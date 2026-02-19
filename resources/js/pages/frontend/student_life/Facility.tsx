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
                <title>Our Facilities | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Discover the world-class facilities at MISA. Explore our modern classrooms, science labs, libraries, sports grounds, and dedicated arts spaces designed to enhance student learning."
                />
                <meta
                    name="keywords"
                    content="MISA facilities, school campus Mandalay, modern classrooms, science labs, school library, MISA sports grounds, learning environment, international school facilities Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://misa.edu.mm/facilities" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Our Facilities | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Take a tour of MISA. From advanced technology labs to spacious recreational areas, see how our facilities support a holistic educational experience."
                />
                <meta property="og:url" content="https://misa.edu.mm/facilities" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Facilities | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="Discover the world-class facilities at MISA, including modern classrooms, labs, and sports grounds designed for student success."
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
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/misa.webp" className="max-w-40" alt="" />
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
