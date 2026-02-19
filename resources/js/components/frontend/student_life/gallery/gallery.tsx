import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from '@inertiajs/react';

// 1. Define the shape of a single image
interface ImageItem {
    id: number;
    src: string;
    alt?: string;
    category_id?: number;
    facility_category_id?: number;
    teacher_category_id?: number;
}

interface CategoryItem {
    id: number;
    title: string;
}

// 2. Define Laravel's Pagination Link structure
interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

// 3. Define the Laravel Paginated Response structure
interface PaginatedResponse<TItem> {
    data: TItem[];
    links: PaginationLink[];
    current_page: number;
    last_page: number;
    prev_page_url: string | null;
    next_page_url: string | null;
    // ... add other meta fields if needed (total, from, to, etc.)
}

interface GalleryProps {
    // Update props to accept the PaginatedResponse object instead of a raw array
    images: PaginatedResponse<ImageItem>;
    showLink: boolean;
    categories?: CategoryItem[];
    selectedCategoryId?: number | null;
    filterQueryKey?: string;
    itemCategoryKey?: 'category_id' | 'facility_category_id' | 'teacher_category_id';
    pagePath?: string;
}

export default function Gallery({
    images,
    showLink,
    categories = [],
    selectedCategoryId = null,
    filterQueryKey = 'category_id',
    itemCategoryKey = 'category_id',
    pagePath,
}: GalleryProps) {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedId !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedId]);

    // Find the currently selected image object (Look inside images.data now)
    const selectedImage = images.data.find((img) => img.id === selectedId);
    const currentPath =
        pagePath || (typeof window !== 'undefined' ? window.location.pathname : '');

    const buildFilterUrl = (categoryId: number | null) => {
        if (!currentPath) {
            return '#';
        }

        const params = new URLSearchParams();
        if (categoryId !== null) {
            params.set(filterQueryKey, String(categoryId));
        }

        const query = params.toString();
        return query ? `${currentPath}?${query}` : currentPath;
    };

    return (
        <div className="container mx-auto px-4 py-10">


            <div className='flex flex-row justify-end'>
                {showLink && (
                    <div className='flex justify-center items-center text-brand-core hover:text-brand transition-colors'>
                        <Link href='/gallery' className='text-lg my-10 font-medium'>
                            Click to View Gallery
                        </Link>
                        <FiChevronRight className='text-lg ml-1' />
                    </div>
                )}
            </div>

            {categories.length > 0 && (
                <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                    <Link
                        href={buildFilterUrl(null)}
                        preserveScroll
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                            selectedCategoryId === null
                                ? 'border-brand-core bg-brand-core text-white'
                                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white'
                        }`}
                    >
                        All
                    </Link>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={buildFilterUrl(category.id)}
                            preserveScroll
                            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                                selectedCategoryId === category.id
                                    ? 'border-brand-core bg-brand-core text-white'
                                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white'
                            }`}
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
            )}

            {/* --- THE GRID --- */}
            {/* Note: We map over images.data now */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4 mb-12">
                {images.data.map((image) => {
                    const imageCategoryId = image[itemCategoryKey];
                    if (
                        selectedCategoryId !== null &&
                        imageCategoryId !== selectedCategoryId
                    ) {
                        return null;
                    }

                    return (
                    <motion.div
                        layoutId={`card-${image.id}`}
                        key={image.id}
                        onClick={() => setSelectedId(image.id)}
                        className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md aspect-square bg-gray-100"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                        <img
                            src={image.src}
                            alt={image.alt || 'Gallery Image'}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </motion.div>
                    );
                })}
            </div>

            {/* --- PAGINATION CONTROLS --- */}
            {images.links.length > 3 && (
                <div className="flex flex-wrap justify-center items-center gap-1 mt-8">
                    {images.links.map((link, key) => {
                        // Decode HTML entities (like &laquo; or &raquo;) sent by Laravel
                        const label = link.label
                            .replace('&laquo;', '«')
                            .replace('&raquo;', '»')
                            .replace('Previous', 'Prev')
                            .replace('Next', 'Next');

                        // Base styles for pagination buttons
                        const baseClasses = "px-4 py-2 text-sm rounded-md transition-colors border";

                        // Active state styles
                        const activeClasses = "bg-brand-core text-white border-brand-core font-semibold";

                        // Inactive/Link styles
                        const inactiveClasses = "bg-white text-gray-700 hover:bg-gray-100 border-gray-300 dark:bg-neutral-900 dark:text-white";

                        // Disabled styles (for null URLs)
                        const disabledClasses = "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50 dark:bg-neutral-600 dark:border-neutral-600";

                        if (link.url === null) {
                            return (
                                <span key={key} className={`${baseClasses} ${disabledClasses}`}>
                                    {label}
                                </span>
                            );
                        }

                        return (
                            <Link
                                key={key}
                                href={link.url}
                                preserveScroll // Keeps user at same scroll position when changing pages
                                className={`${baseClasses} ${link.active ? activeClasses : inactiveClasses}`}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </div>
            )}

            {/* --- THE LIGHTBOX MODAL --- */}
            <AnimatePresence>
                {selectedId !== null && selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <button className="absolute top-5 right-5 text-white/70 hover:text-white transition z-50">
                            <FaTimes size={30} />
                        </button>

                        <motion.div
                            layoutId={`card-${selectedImage.id}`}
                            className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="h-full w-full object-contain max-h-[85vh]"
                            />
                            {selectedImage.alt && (
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                                    <p className="text-center text-sm font-medium">{selectedImage.alt}</p>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
