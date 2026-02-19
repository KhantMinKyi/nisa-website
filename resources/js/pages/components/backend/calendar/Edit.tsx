import AppLayout from '@/layouts/app-layout';
import { Head, Link, useForm } from '@inertiajs/react';
import React, { useState } from 'react';


interface CalendarFormData {
    _method: string;
    alt: string;
    academic_year: string;
    src: File | null;
}
export default function CalendarEdit({
    calendar,
}: {
    calendar: any;

}) {
    // Fix: Use _method: 'put' to allow file upload on update
    const { data, setData, post, processing, errors } =
        useForm<CalendarFormData>({
            _method: 'put',
            alt: calendar.alt || '',
            academic_year: calendar.academic_year || '',
            src: null,
        });

    const [preview, setPreview] = useState(calendar.src);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        // Fix: Use post() instead of put(), targeting the update route
        // post(route('calendars.update', calendar.id));
        post('/admin/calendars/' + calendar.id);
    };

    return (
        <AppLayout
            breadcrumbs={[
                { title: 'Calendar', href: '/admin/calendars' },
                { title: 'Edit', href: '#' },
            ]}
        >
            <Head title="Edit Photo" />

            <div className="mx-auto min-w-4xl py-12">
                <div className="rounded-lg bg-white p-6 shadow dark:bg-neutral-800">
                    <h2 className="mb-4 text-lg font-bold">Edit Calendar</h2>

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
                                Academic Year
                            </label>
                            <input
                                type="text"
                                value={data.academic_year}
                                onChange={(e) => setData('academic_year', e.target.value)}
                                className="my-2 w-full rounded-lg border-gray-300 bg-gray-100 px-2 py-2 focus:border-blue-500 focus:ring-blue-500 dark:border-brand-core dark:bg-neutral-900 dark:focus:border-brand-core dark:focus:ring-brand-core"
                            />
                            {errors.academic_year && (
                                <p className="text-xs text-red-500">
                                    {errors.academic_year}
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
                                //  href={route('calendars.index')}
                                href={'/admin/calendars/'}
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
