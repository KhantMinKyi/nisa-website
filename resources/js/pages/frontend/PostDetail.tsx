import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import {
    HiOutlineCalendar,
    HiOutlineUser,
    HiChevronLeft,
    HiOutlineMail,
    HiCheckCircle,
    HiOutlineLocationMarker,
    HiOutlineCash,
    HiOutlineVideoCamera,
} from 'react-icons/hi';
import FrontendLayout from '@/layouts/frontend-layout';

interface CategoryTag {
    id: number;
    title: string;
}

interface PostCategoryTag {
    id: number;
    category_tag: CategoryTag;
}

interface Post {
    id: number;
    title: string;
    subtitle?: string;
    description: string;
    footer_description?: string;
    banner_img: string;
    images?: string | null;
    start_date?: string | null;
    end_date?: string | null;
    registration_fee?: string | null;
    award_description?: string | null;
    video_url?: string | null;
    location?: string | null;
    created_at: string;
    category_tags: PostCategoryTag[];
}

interface Comment {
    id: number;
    name: string;
    email: string;
    description: string;
    created_at: string;
}

interface Props {
    post: Post;
    related_posts?: Post[];
    comments: Comment[];
}

interface CommentForm {
    name: string;
    email: string;
    description: string;
    post_id: number;
}

const PostDetail: React.FC<Props> = ({ post, related_posts = [], comments = [] }) => {
    const [formData, setFormData] = useState<CommentForm>({
        name: '',
        email: '',
        description: '',
        post_id: post.id,
    });

    const [errors, setErrors] = useState<Partial<CommentForm>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof CommentForm]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        setSubmitStatus('idle');

        try {
            await axios.post('/api/post-comment/store', formData);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', description: '', post_id: post.id });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                setSubmitStatus('error');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const imageList = post.images ? post.images.split(',').filter(Boolean) : [];

    return (
        <FrontendLayout>
            <Head title={post.title} />

            <div className="bg-gray-50 dark:bg-black min-h-screen py-10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <Link
                        href="/news"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-core mb-8 transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center shadow-sm mr-2 group-hover:scale-110 transition-transform">
                            <HiChevronLeft className="text-lg" />
                        </div>
                        Back to News
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-8 space-y-8">
                            <article className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden">
                                <div className="relative h-64 md:h-[420px] w-full group">
                                    <img
                                        src={post.banner_img || '/placeholder.svg'}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.category_tags.map((ct) => (
                                                <span key={ct.id} className="bg-brand-core text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                                                    {ct.category_tag.title}
                                                </span>
                                            ))}
                                        </div>
                                        <h1 className="text-2xl md:text-4xl md:leading-tight font-bold text-white mb-2 drop-shadow-md">
                                            {post.title}
                                        </h1>
                                        {post.subtitle && (
                                            <p className="text-white/80 text-sm md:text-base max-w-2xl">
                                                {post.subtitle}
                                            </p>
                                        )}
                                        <div className="flex flex-wrap items-center gap-4 text-gray-200 text-sm font-medium mt-4">
                                            <div className="flex items-center gap-2">
                                                <HiOutlineCalendar className="text-lg text-brand-core" />
                                                {new Date(post.created_at).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="p-6 md:p-10 prose prose-lg dark:prose-invert max-w-none 
                                    prose-a:text-brand-core hover:prose-a:text-brand-core/80
                                    prose-img:rounded-xl prose-img:shadow-lg"
                                    dangerouslySetInnerHTML={{ __html: post.description }}
                                />

                                {post.footer_description && (
                                    <div
                                        className="px-6 md:px-10 pb-8 prose prose-base dark:prose-invert max-w-none border-t border-gray-100 dark:border-neutral-800 pt-6"
                                        dangerouslySetInnerHTML={{ __html: post.footer_description }}
                                    />
                                )}
                            </article>

                            {imageList.length > 0 && (
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6 md:p-8">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                        Event Gallery
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {imageList.map((img, index) => (
                                            <img
                                                key={index}
                                                src={img}
                                                alt={`Post image ${index + 1}`}
                                                className="h-40 w-full object-cover rounded-lg"
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3 pb-4 border-b border-gray-100 dark:border-neutral-800">
                                    <HiOutlineUser className="text-brand-core" />
                                    Leave a Comment
                                </h3>

                                {submitStatus === 'success' ? (
                                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-300">
                                            <HiCheckCircle className="text-3xl" />
                                        </div>
                                        <h4 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">Comment Submitted!</h4>
                                        <p className="text-green-700 dark:text-green-300">Your comment will appear once approved by admin.</p>
                                        <button
                                            onClick={() => setSubmitStatus('idle')}
                                            className="mt-4 text-sm font-bold text-green-700 underline hover:text-green-800"
                                        >
                                            Post another comment
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    required
                                                    className={`w-full pl-4 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white
                                                        ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                                />
                                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                                        <HiOutlineMail />
                                                    </div>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder="you@example.com"
                                                        required
                                                        className={`w-full pl-10 pr-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white
                                                            ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                                    />
                                                </div>
                                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="description" className="block text-sm font-bold text-gray-700 dark:text-gray-300">
                                                Comment <span className="text-red-500">*</span>
                                            </label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                rows={5}
                                                value={formData.description}
                                                onChange={handleChange}
                                                placeholder="Write your comment here..."
                                                required
                                                className={`w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-neutral-800 border focus:ring-2 outline-none transition-all dark:text-white
                                                    ${errors.description ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 dark:border-neutral-700 focus:border-brand-core focus:ring-brand-core/20'}`}
                                            />
                                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="bg-brand-core hover:bg-brand-dark text-white px-6 py-2.5 rounded-lg font-medium shadow-sm transition-all disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>

                            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-8 md:p-10">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Recent Comments
                                </h3>
                                {comments.length < 1 ? (
                                    <p className="text-sm text-gray-500">No comments yet.</p>
                                ) : (
                                    <div className="space-y-6">
                                        {comments.map((comment) => (
                                            <div key={comment.id} className="border-b border-gray-100 dark:border-neutral-800 pb-6 last:border-0 last:pb-0">
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                    <div>
                                                        <p className="font-semibold text-gray-900 dark:text-white">{comment.name}</p>
                                                        <p className="text-xs text-gray-500">{comment.email}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-400">
                                                        {new Date(comment.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                                <p className="mt-3 text-sm text-gray-700 dark:text-gray-200">
                                                    {comment.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <aside className="lg:col-span-4 space-y-6">
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Event Details
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-200">
                                    {post.start_date && (
                                        <li className="flex items-center gap-3">
                                            <HiOutlineCalendar className="text-brand-core" />
                                            <span>
                                                {post.start_date} {post.end_date ? ` - ${post.end_date}` : ''}
                                            </span>
                                        </li>
                                    )}
                                    {post.location && (
                                        <li className="flex items-center gap-3">
                                            <HiOutlineLocationMarker className="text-brand-core" />
                                            <span>{post.location}</span>
                                        </li>
                                    )}
                                    {post.registration_fee && (
                                        <li className="flex items-center gap-3">
                                            <HiOutlineCash className="text-brand-core" />
                                            <span>{post.registration_fee}</span>
                                        </li>
                                    )}
                                    {post.award_description && (
                                        <li className="text-gray-700 dark:text-gray-200">
                                            {post.award_description}
                                        </li>
                                    )}
                                </ul>
                            </div>

                            {post.video_url && (
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                        <HiOutlineVideoCamera className="text-brand-core" />
                                        Video
                                    </h3>
                                    <a
                                        href={post.video_url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm text-brand-core hover:underline break-all"
                                    >
                                        {post.video_url}
                                    </a>
                                </div>
                            )}

                            {related_posts.length > 0 && (
                                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 p-6">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        Related Posts
                                    </h3>
                                    <div className="space-y-4">
                                        {related_posts.map((related) => (
                                            <Link key={related.id} href={`/post-detail/${related.id}`} className="flex items-center gap-3 group">
                                                <div className="h-16 w-20 overflow-hidden rounded-lg bg-gray-100">
                                                    <img
                                                        src={related.banner_img || '/placeholder.svg'}
                                                        alt={related.title}
                                                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                                                        {related.title}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        {new Date(related.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
};

export default PostDetail;
