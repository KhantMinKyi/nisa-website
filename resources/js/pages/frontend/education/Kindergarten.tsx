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
                <title>Kindergarten | MISA – Mandalay International School of Acumen</title>
                {/* SEO Meta */}
                <meta
                    name="description"
                    content="MISA Kindergarten provides a nurturing, play-based learning environment for early years education in Mandalay. Our program focuses on holistic development, creativity, and social skills in a safe, modern facility."
                />
                <meta
                    name="keywords"
                    content="Kindergarten Mandalay, preschool education, early years foundation, MISA kindergarten, international preschool Mandalay, child development, KG admissions"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical - Ensure this URL matches your actual route */}
                <link rel="canonical" href="https://misa.edu.mm/kindergarten-programs" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Kindergarten | MISA – Mandalay International School of Acumen" />
                <meta
                    property="og:description"
                    content="Enroll your child in MISA Kindergarten for a world-class early learning experience in Mandalay. Focusing on play, discovery, and fundamental skills."
                />
                <meta property="og:url" content="https://misa.edu.mm/kindergarten-programs" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Kindergarten | MISA – Mandalay International School of Acumen" />
                <meta
                    name="twitter:description"
                    content="MISA Kindergarten provides a nurturing, play-based learning environment for early years education in Mandalay."
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
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 0.5, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/misa.webp" className="max-w-40" alt="" />
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