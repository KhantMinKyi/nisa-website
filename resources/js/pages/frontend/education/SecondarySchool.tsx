
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import SecondarySchoolBanner from '@/components/frontend/education/secondary/secondary-school-banner'
import SecondarySubjectsTable from '@/components/frontend/education/secondary/secondary-subject-table'
import SubjectDetails from '@/components/frontend/education/secondary/subject-details';
const SecondarySchool = () => {
    return (
        <>
            <Head>
                <title>Secondary School | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="NISA Naypyitaw Secondary School follows the Cambridge International Secondary 1 curriculum, strengthening foundations in English, Mathematics, and Science while offering Myanmar Language, History, Geography, ICT, Music, Art, and PE."
                />
                <meta
                    name="keywords"
                    content="NISA Secondary School, secondary school Naypyitaw, Cambridge Secondary 1 Myanmar, Year 7-9 curriculum, international school Naypyitaw, Cambridge curriculum Myanmar, NISA admissions"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/secondary-school-programs" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Secondary School | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover NISA’s Cambridge International Secondary 1 programme in Naypyitaw, building strong academic foundations and specialized subject knowledge for a fast-changing world."
                />
                <meta property="og:url" content="https://nisa.edu.mm/secondary-school-programs" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Secondary School | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Explore NISA Naypyitaw Secondary School offering the Cambridge International Secondary 1 curriculum with a strong academic foundation."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_1.webp')", // put your image path here
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
                            viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/nisa.webp" className="max-w-40" alt="" />
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Secondary School</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <SecondarySchoolBanner />
                    <SecondarySubjectsTable />
                    <SubjectDetails />

                </div>
            </FrontendLayout>
        </>
    )
}

export default SecondarySchool