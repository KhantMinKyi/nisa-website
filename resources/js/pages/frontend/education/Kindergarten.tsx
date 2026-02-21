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
import KgBanner from '@/components/frontend/education/kindergarten/kg-banner'
import ThemeSection from '@/components/frontend/education/kindergarten/theme-section'
const Kindergarten = () => {
    return (
        <>
            <Head>
                <title>Preschool Program | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="NISA Naypyitaw Preschool offers a meaningful, high-quality international early years education focused on intellectual, moral, emotional, social, and physical development in a supportive learning environment."
                />
                <meta
                    name="keywords"
                    content="NISA preschool, preschool Naypyitaw, international preschool Myanmar, early years education Naypyitaw, NISA KG program, Cambridge early years, Naypyitaw kindergarten admission"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/kindergarten-programs" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Preschool Program | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover NISA’s international preschool program in Naypyitaw, designed to nurture intellectual, moral, emotional, social, and physical development through a mission-driven curriculum."
                />
                <meta property="og:url" content="https://nisa.edu.mm/kindergarten-programs" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Preschool Program | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Explore NISA Naypyitaw’s international preschool program focused on holistic development and meaningful early education."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_7.webp')", // put your image path here
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Kindergarten</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <KgBanner />
                    <ThemeSection />

                </div>
            </FrontendLayout>
        </>
    )
}

export default Kindergarten