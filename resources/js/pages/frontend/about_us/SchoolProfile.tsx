import InfoSection from '@/components/frontend/home/info-section'
import Information from '@/components/frontend/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
import HistoryBanner from '@/components/frontend/about_us/history'
import SchoolProfileBanner from '@/components/frontend/about_us/school-profil-banner'
import Grading from '@/components/frontend/about_us/grading'
import Result from '@/components/frontend/about_us/result'
import UniversityAndColleges from '@/components/frontend/about_us/university-and-colleges'
const SchoolProfile = () => {
    return (
        <>
            <Head>
                <title>School Profile | NISA</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Established in 2014, NISA is a premier K-12 Cambridge International School in Nay Pyi Taw, Myanmar, offering world-class education from Year 2 to IGCSE Level."
                />
                <meta
                    name="keywords"
                    content="NISA Nay Pyi Taw, International School Myanmar, Cambridge Curriculum Nay Pyi Taw, IGCSE Myanmar, K-12 private school Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/school-profile" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="School Profile | Nay Pyi Taw International School of Acumen" />
                <meta
                    property="og:description"
                    content="A registered Cambridge International School in Myanmar. Providing academic excellence from Year 2 through IGCSE graduation."
                />
                <meta property="og:url" content="https://nisa.edu.mm/school-profile" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="School Profile | NISA Nay Pyi Taw" />
                <meta
                    name="twitter:description"
                    content="Explore NISA’s journey from its 2014 establishment to its first IGCSE graduating class in 2023."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">School Profile</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <SchoolProfileBanner />
                    <Grading />
                    {/* <Result /> */}
                    {/* <UniversityAndColleges /> */}
                    {/* <div className='h-40'></div> */}
                    {/* <InfoSection /> */}
                </div>
            </FrontendLayout>
        </>
    )
}

export default SchoolProfile