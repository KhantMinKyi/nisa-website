import React, { useMemo, useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { HiArrowLeft, HiCloudUpload, HiTrash } from 'react-icons/hi';
import { Input } from '@headlessui/react';

interface PostType {
    id: number;
    title: string;
    is_activity: number;
}

interface CategoryTag {
    id: number;
    title: string;
}

interface Props {
    post_types: PostType[];
    category_tags: CategoryTag[];
}

export default function PostCreate({ post_types, category_tags }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        post_type_id: post_types?.[0]?.id ?? '',
        title: '',
        subtitle: '',
        description: '',
        footer_description: '',
        banner_img: null as File | null,
        images: [] as File[],
        start_date: '',
        end_date: '',
        registration_fee: '',
        location: '',
        award_description: '',
        video_url: '',
        category_tag_ids: [] as number[],
    });

    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    const selectedType = useMemo(
        () => post_types.find((type) => type.id === Number(data.post_type_id)),
        [data.post_type_id, post_types]
    );
    const isActivity = Number(selectedType?.is_activity ?? 0) === 1;

    const handleBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('banner_img', file);
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    const handleImages = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []);
        setData('images', files);
        setImagePreviews(files.map((file) => URL.createObjectURL(file)));
    };

    const toggleCategory = (id: number) => {
        const current = data.category_tag_ids;
        if (current.includes(id)) {
            setData(
                'category_tag_ids',
                current.filter((item) => item !== id)
            );
        } else {
            setData('category_tag_ids', [...current, id]);
        }
    };

    const handlePostTypeChange = (value: number) => {
        setData('post_type_id', value);
        const newType = post_types.find((type) => type.id === value);
        if (Number(newType?.is_activity ?? 0) !== 1) {
            setData('start_date', '');
            setData('end_date', '');
            setData('registration_fee', '');
            setData('location', '');
            setData('award_description', '');
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/admin/events-and-news');
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Event & News', href: '/admin/events-and-news' }, { title: 'Create', href: '#' }]}>
            <Head title="Create Post" />

            <div className="w-5xl mx-auto py-10 px-4">
                <Link
                    href={'/admin/events-and-news'}
                    className="flex items-center text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors">
                    <HiArrowLeft className="mr-1" /> Back to Posts
                </Link>

                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-100 dark:border-brand-core p-8">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Create New Post</h2>

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Post Type</label>
                                <select
                                    value={data.post_type_id}
                                    onChange={(e) => handlePostTypeChange(Number(e.target.value))}
                                    className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                >
                                    <option value="" disabled>
                                        Select post type
                                    </option>
                                    {post_types.map((type) => (
                                        <option key={type.id} value={type.id}>
                                            {type.title}
                                        </option>
                                    ))}
                                </select>
                                {errors.post_type_id && <p className="text-red-500 text-xs mt-1">{errors.post_type_id}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Title</label>
                                <Input
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                    placeholder="Post title"
                                />
                                {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Subtitle</label>
                            <Input
                                type="text"
                                value={data.subtitle}
                                onChange={e => setData('subtitle', e.target.value)}
                                className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                placeholder="Subtitle (optional)"
                            />
                            {errors.subtitle && <p className="text-red-500 text-xs mt-1">{errors.subtitle}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Description</label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                rows={6}
                                className="w-full rounded-lg border-gray-300 px-3 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                placeholder="Main content"
                            />
                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Footer Description (Optional)</label>
                            <textarea
                                value={data.footer_description}
                                onChange={(e) => setData('footer_description', e.target.value)}
                                rows={3}
                                className="w-full rounded-lg border-gray-300 px-3 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                placeholder="Footer notes"
                            />
                            {errors.footer_description && <p className="text-red-500 text-xs mt-1">{errors.footer_description}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Category Tags</label>
                            <div className="flex flex-wrap gap-3 rounded-lg border border-gray-200 dark:border-neutral-700 p-4 bg-gray-50 dark:bg-neutral-900">
                                {category_tags.map((tag) => (
                                    <label key={tag.id} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
                                        <input
                                            type="checkbox"
                                            checked={data.category_tag_ids.includes(tag.id)}
                                            onChange={() => toggleCategory(tag.id)}
                                            className="rounded border-gray-300 text-brand-core focus:ring-brand-core"
                                        />
                                        {tag.title}
                                    </label>
                                ))}
                            </div>
                            {errors.category_tag_ids && <p className="text-red-500 text-xs mt-1">{errors.category_tag_ids}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Banner Image</label>
                            <div className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${bannerPreview ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/10' : 'border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700'}`}>
                                {bannerPreview ? (
                                    <div className="relative">
                                        <img src={bannerPreview} className="max-h-64 mx-auto rounded-lg shadow-sm" alt="Banner Preview" />
                                        <button
                                            type="button"
                                            onClick={() => { setBannerPreview(null); setData('banner_img', null); }}
                                            className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600"
                                        >
                                            <HiTrash />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <HiCloudUpload className="text-4xl text-gray-400 mb-3" />
                                        <label htmlFor="banner-upload" className="cursor-pointer">
                                            <span className="text-blue-600 dark:text-brand-core font-semibold hover:underline">Click Here to upload</span>
                                            <input id="banner-upload" type="file" className="hidden" accept="image/*" onChange={handleBanner} />
                                        </label>
                                        <p className="text-xs text-gray-400 mt-2">PNG, JPG, Webp up to 2MB</p>
                                    </div>
                                )}
                            </div>
                            {errors.banner_img && <p className="text-red-500 text-xs mt-1">{errors.banner_img}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Additional Images (Optional)</label>
                            <div className="border-2 border-dashed rounded-xl p-6 text-center transition-colors border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700">
                                <label htmlFor="images-upload" className="cursor-pointer">
                                    <span className="text-blue-600 dark:text-brand-core font-semibold hover:underline">Click Here to upload</span>
                                    <input id="images-upload" type="file" className="hidden" accept="image/*" multiple onChange={handleImages} />
                                </label>
                                <p className="text-xs text-gray-400 mt-2">You can select multiple images</p>
                            </div>
                            {imagePreviews.length > 0 && (
                                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {imagePreviews.map((src, index) => (
                                        <img key={index} src={src} className="h-24 w-full object-cover rounded-lg" alt={`Preview ${index + 1}`} />
                                    ))}
                                </div>
                            )}
                            {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images}</p>}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Video URL (Optional)</label>
                                <Input
                                    type="text"
                                    value={data.video_url}
                                    onChange={e => setData('video_url', e.target.value)}
                                    className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                    placeholder="https://"
                                />
                                {errors.video_url && <p className="text-red-500 text-xs mt-1">{errors.video_url}</p>}
                            </div>
                        </div>

                        {isActivity && (
                            <div className="rounded-xl border border-brand-core/30 bg-brand-core/5 p-6 space-y-6">
                                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Activity Details</h3>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Start Date</label>
                                        <Input
                                            type="date"
                                            value={data.start_date}
                                            onChange={e => setData('start_date', e.target.value)}
                                            className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                        />
                                        {errors.start_date && <p className="text-red-500 text-xs mt-1">{errors.start_date}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">End Date</label>
                                        <Input
                                            type="date"
                                            value={data.end_date}
                                            onChange={e => setData('end_date', e.target.value)}
                                            className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                        />
                                        {errors.end_date && <p className="text-red-500 text-xs mt-1">{errors.end_date}</p>}
                                    </div>
                                </div>
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Registration Fee</label>
                                        <Input
                                            type="text"
                                            value={data.registration_fee}
                                            onChange={e => setData('registration_fee', e.target.value)}
                                            className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                        />
                                        {errors.registration_fee && <p className="text-red-500 text-xs mt-1">{errors.registration_fee}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Location</label>
                                        <Input
                                            type="text"
                                            value={data.location}
                                            onChange={e => setData('location', e.target.value)}
                                            className="w-full rounded-lg border-gray-300 px-2 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                        />
                                        {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-brand-core mb-2">Award Description</label>
                                    <textarea
                                        value={data.award_description}
                                        onChange={(e) => setData('award_description', e.target.value)}
                                        rows={3}
                                        className="w-full rounded-lg border-gray-300 px-3 py-2 dark:border-brand-core bg-gray-100 dark:bg-neutral-900 focus:ring-blue-500 focus:border-blue-500 dark:focus:border-brand-core  dark:focus:ring-brand-core"
                                    />
                                    {errors.award_description && <p className="text-red-500 text-xs mt-1">{errors.award_description}</p>}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-end pt-4">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-blue-600 hover:bg-blue-700 dark:bg-brand-core dark:hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all disabled:opacity-50"
                            >
                                {processing ? 'Saving...' : 'Create Post'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
