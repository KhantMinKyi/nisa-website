import InfoSection from '@/components/frontend/home/info-section'
import Information from '@/components/frontend/home/information'
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client';

import PostGrid from '@/components/frontend/home/post-grid'
import { CategoryTag, Post } from '@/types'
const News = ({ posts, category_tags }: { posts: Post[], category_tags: CategoryTag[] }) => {
    const postsData = posts;
    const categoryTagData = category_tags;
    return (
        <>
            <Head>
                <title>News & Events | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Stay updated with the latest news, events, and announcements from NISA in Naypyitaw. Explore student achievements, school activities, academic highlights, and upcoming programs."
                />
                <meta
                    name="keywords"
                    content="NISA news, NISA events, Naypyitaw International School of Acumen, school announcements Naypyitaw, student activities NISA, Cambridge school Naypyitaw, NISA academic calendar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/news-and-events" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="News & Events | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover the latest events, student success stories, and school activities at NISA in Naypyitaw."
                />
                <meta property="og:url" content="https://nisa.edu.mm/news-and-events" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="News & Events | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Stay updated with NISA’s latest news, events, and important school announcements in Naypyitaw."
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Events & News
                                </h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <div className='container mx-auto mt-20'>
                        <PostGrid posts={postsData} categories={categoryTagData} />
                    </div>
                </div>
            </FrontendLayout>
        </>
    )
}

export default News