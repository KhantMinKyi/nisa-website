import InfoSection from '@/components/frontend/home/info-section'
import Information from '@/components/frontend/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import { FacilityTypePaginate } from '@/types'
import Gallery from '@/components/frontend/student_life/gallery/gallery'

interface Category {
    id: number;
    title: string;
}

interface FacilityPageProps {
    images: FacilityTypePaginate; // This must be the Paginated Object, not an array
    categories: Category[];
    selectedCategoryId: number | null;
    showLink: boolean;
}
const FacilityPage = ({ images, categories, selectedCategoryId, showLink }: FacilityPageProps) => {

    return (
        <>
            <Head>
                <title>Academic Calendar | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="View the official academic calendar for NISA in Naypyitaw. Stay informed about term dates, school holidays, examination schedules, and key academic events throughout the year."
                />
                <meta
                    name="keywords"
                    content="NISA academic calendar, Naypyitaw school term dates, NISA school schedule, exam dates Naypyitaw, school holidays Myanmar, Cambridge school calendar, NISA events schedule"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/calendar" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Academic Calendar | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Plan your academic year with NISA’s official calendar. Access important dates for school terms, holidays, exams, and key events in Naypyitaw."
                />
                <meta property="og:url" content="https://nisa.edu.mm/calendar" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Academic Calendar | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Check NISA’s academic calendar for term dates, school holidays, and examination schedules in Naypyitaw."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_6.webp')", // put your image path here
                        }}
                    >
                        {/* Overlay */}
                        {/* <div className="absolute inset-0 bg-blue-950/60" /> */}
                        <div className="dark:from-dark-950/90 dark:to-dark-950/90 absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-950/60" />
                        {/* Content */}
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, y: -50 }} // start 50px below
                            whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                            exit={{ opacity: 0, y: -50 }} // fade out and slide down
                            viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/nisa.webp" className="max-w-40" alt="" />
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Our Facility
                                </h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        {/* <PostGrid posts={postsData} categories={categoryTagData} /> */}
                        <div className='text-4xl text-center my-10 font-bold text-gray-800 dark:text-brand'>Facility</div>
                        <Gallery
                            images={images}
                            showLink={showLink}
                            categories={categories}
                            selectedCategoryId={selectedCategoryId}
                            filterQueryKey="category_id"
                            itemCategoryKey="facility_category_id"
                            pagePath="/facilities"
                        />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default FacilityPage
