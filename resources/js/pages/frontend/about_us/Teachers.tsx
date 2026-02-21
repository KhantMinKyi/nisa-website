import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import { TeacherTypePaginate } from '@/types'
import Gallery from '@/components/frontend/student_life/gallery/gallery'

interface Category {
    id: number;
    title: string;
}

interface TeachersPageProps {
    images: TeacherTypePaginate;
    categories: Category[];
    selectedCategoryId: number | null;
    showLink: boolean;
}

const TeachersPage = ({ images, categories, selectedCategoryId, showLink }: TeachersPageProps) => {
    return (
        <>
            <Head>
                <title>Our Teachers | NISA </title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Meet the dedicated educators at NISA. Explore our teaching team across academic areas and see how our faculty supports student growth and success."
                />
                <meta
                    name="keywords"
                    content="NISA teachers, Naypyitaw international school faculty, teaching staff Myanmar, experienced educators, school teachers Naypyitaw"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/teachers" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Our Teachers | NISA – Naypyitaw International School of Acumen" />
                <meta
                    property="og:description"
                    content="Get to know the NISA faculty. Our teachers bring expertise, care, and a passion for learning to every classroom."
                />
                <meta property="og:url" content="https://nisa.edu.mm/teachers" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Teachers | NISA – Naypyitaw International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Meet the NISA teaching team and explore our faculty by subject areas and programs."
                />
            </Head>
            <FrontendLayout>
                <div>
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_5.webp')",
                        }}
                    >
                        <div className="dark:from-dark-950/90 dark:to-dark-950/90 absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-950/60" />
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 1 }}
                            exit={{ opacity: 0, x: -50 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/nisa.webp" className="max-w-40" alt="" />
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Our Teachers</h2>
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        <div className='text-4xl text-center my-10 font-bold text-gray-800 dark:text-brand'>Meet Our Teachers</div>
                        <Gallery
                            images={images}
                            showLink={showLink}
                            categories={categories}
                            selectedCategoryId={selectedCategoryId}
                            filterQueryKey="teacher_category_id"
                            itemCategoryKey="teacher_category_id"
                            pagePath="/teachers"
                        />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default TeachersPage
