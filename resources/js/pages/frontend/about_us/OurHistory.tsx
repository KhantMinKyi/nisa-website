import InfoSection from '@/components/frontend/home/info-section'
import Information from '@/components/frontend/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';
import HistoryBanner from '@/components/frontend/about_us/history'
const OurHistory = () => {
    return (
        <>
            <Head>
                <title>Our History | NISA</title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Nay Pyi Taw International School of Acumen (NISA) provides world-class international education from Nursery to IGCSE in Nay Pyi Taw. Established in 2014, NISA offers modern campuses in Ottara Thiri and Pyinmana with a globally recognized Cambridge International curriculum."
                />
                <meta
                    name="keywords"
                    content="NISA Nay Pyi Taw, Nay Pyi Taw International School of Acumen, Cambridge International School Myanmar, IGCSE Nay Pyi Taw, Ottara Thiri school, Pyinmana KG campus, international school Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/our-history" />

                {/* Open Graph */}
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="About NISA | Nay Pyi Taw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover NISA, a leading international school in Nay Pyi Taw offering Nursery to IGCSE education. Established in 2014, with modern campuses in Ottara Thiri and Pyinmana delivering the Cambridge International curriculum."
                />
                <meta property="og:url" content="https://nisa.edu.mm/our-history" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="About NISA | Nay Pyi Taw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="NISA provides world-class Nursery to IGCSE education in Nay Pyi Taw with modern campuses and Cambridge International curriculum."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_3.webp')", // put your image path here
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Our History</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <HistoryBanner />
                </div>
            </FrontendLayout>
        </>
    )
}

export default OurHistory