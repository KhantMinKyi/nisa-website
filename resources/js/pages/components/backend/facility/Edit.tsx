import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';

interface Category {
    id: number;
    title: string;
}

interface FacilityFormData {
    _method: string;
    alt: string;
    facility_category_id: number | string;
    src: File | null;
}
export default function FacilityEdit({
    facility,
    categories,
}: {
    facility: any;
    categories: Category[];
}) {
    // Fix: Use _method: 'put' to allow file upload on update
    const { data, setData, post, processing, errors } =
        useForm<FacilityFormData>({
            _method: 'put',
            alt: facility.alt || '',
            facility_category_id:
                facility.facility_category_id ?? categories?.[0]?.id ?? '',
            src: null,
        });

    const [preview, setPreview] = useState(facility.src);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fix: Use post() instead of put(), targeting the update route
        // post(route('facilities.update', facility.id));
        post('/admin/facilities/' + facility.id);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Facility', href: '/admin/facilities' },
                { title: 'Edit', href: '#' },
            ]}
        >
            <Head title="Edit Photo" />

            <div className="mx-auto min-w-4xl py-12">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-neutral-800">
                    <h2 className="mb-4 text-lg font-bold">Edit Facility</h2>

                    <form onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Title / Alt
                            </label>
                            <input
                                type="text"
                                value={data.alt}
                                onChange={(e) => setData('alt', e.target.value)}
                                className="my-2 w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-brand-core dark:bg-neutral-900 dark:focus:border-brand-core dark:focus:ring-brand-core"
                            />
                            {errors.alt && (
                                <p className="text-xs text-red-500">
                                    {errors.alt}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Category
                            </label>
                            <select
                                value={data.facility_category_id}
                                onChange={(e) =>
                                    setData(
                                        'facility_category_id',
                                        Number(e.target.value),
                                    )
                                }
                                className="my-2 w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-brand-core dark:bg-neutral-900 dark:focus:border-brand-core dark:focus:ring-brand-core"
                            >
                                <option value="" disabled>
                                    Select category
                                </option>
                                {categories?.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                            {errors.facility_category_id && (
                                <p className="text-xs text-red-500">
                                    {errors.facility_category_id}
                                </p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core">
                                Replace Image (Optional)
                            </label>
                            <input
                                type="file"
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        setData('src', e.target.files[0]);
                                        setPreview(
                                            URL.createObjectURL(
                                                e.target.files[0],
                                            ),
                                        );
                                    }
                                }}
                                className="my-2 mt-1 block w-full rounded-lg bg-gray-100 px-2 py-2 text-sm text-gray-500 dark:bg-neutral-900 dark:text-brand"
                            />
                            {/* Preview */}
                            <div className="mt-2">
                                <img
                                    src={preview}
                                    className="h-32 w-auto rounded border"
                                    alt="Preview"
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Link
                                //  href={route('facilities.index')}
                                href={'/admin/facilities/'}
                                className="rounded-lg bg-red-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-red-700 disabled:opacity-50 dark:bg-red-600 dark:hover:bg-red-600"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-blue-700 disabled:opacity-50 dark:bg-brand-core dark:hover:bg-brand-dark"
                            >
                                {processing ? 'Updating...' : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
