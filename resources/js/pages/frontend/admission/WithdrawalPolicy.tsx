
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import TerminatingEnrolment from '@/components/frontend/admission/withdrawal_policy/terminating-enrolment';
const WithdrawalPolicy = () => {
    return (
        <>
            <Head>
                <title>Withdrawal Policy | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Review NISA Naypyitaw’s Withdrawal of Enrollment policy. Learn about clearance requirements, outstanding fee payments, library returns, and procedures for re-admission."
                />
                <meta
                    name="keywords"
                    content="NISA withdrawal policy, Naypyitaw international school withdrawal, student clearance process, school document release policy, NISA re-admission process, enrollment termination Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/withdrawal-policy" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Withdrawal Policy | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Important information about student withdrawal at NISA Naypyitaw, including document clearance, fee settlement, and re-enrollment procedures."
                />
                <meta property="og:url" content="https://nisa.edu.mm/withdrawal-policy" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Withdrawal Policy | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Understand NISA Naypyitaw’s withdrawal process, including required clearances and policies for future re-admission."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl"> Withdrawal Policy</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <TerminatingEnrolment />

                </div>
            </FrontendLayout>
        </>
    )
}

export default WithdrawalPolicy