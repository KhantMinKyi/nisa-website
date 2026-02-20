
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import IgcseBanner from '@/components/frontend/education/igcse/igcse-banner';
import HighSchoolSubjectTable from '@/components/frontend/education/igcse/highschool-subject-table';
import SubjectDetails from '@/components/frontend/education/igcse/subject-details';
import SubjectSelectionTable from '@/components/frontend/education/igcse/subject-selection-table';
const Igcse = () => {
    return (
        <>
            <Head>
                <title>IGCSE Programme | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="NISA Naypyitaw offers the Cambridge IGCSE programme for Year 10 and 11. Students complete a two-year course with core subjects including English, Mathematics, and Global Perspectives, plus elective choices."
                />
                <meta
                    name="keywords"
                    content="NISA IGCSE, IGCSE Naypyitaw, Cambridge IGCSE Myanmar, Year 10 Year 11 programme, international high school Naypyitaw, IGCSE subjects NISA, university preparation Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/igcse" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="IGCSE Programme | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Explore the two-year Cambridge IGCSE programme at NISA Naypyitaw. Students study core subjects and select electives based on interests, talents, and future goals."
                />
                <meta property="og:url" content="https://nisa.edu.mm/igcse" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="IGCSE Programme | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Discover NISA Naypyitaw’s Cambridge IGCSE programme for Year 10 and 11 students, preparing them for international examinations and future success."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_4.webp')", // put your image path here
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
                                <img src="/img/logo/nisa.webp" className="max-w-40" alt="" />
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">IGCSE</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <IgcseBanner />
                    {/* <SecondarySchoolBanner /> */}
                    <HighSchoolSubjectTable />
                    <SubjectSelectionTable />
                    <SubjectDetails />

                </div>
            </FrontendLayout>
        </>
    )
}

export default Igcse
