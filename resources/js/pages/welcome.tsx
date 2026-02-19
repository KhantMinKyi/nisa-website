import Carousel from '@/components/frontend/home/carousel';
import ContactBanner from '@/components/frontend/home/contact-banner';
import Gallery from '@/components/frontend/home/facility';
import Hero from '@/components/frontend/home/hero';
import InfoSection from '@/components/frontend/home/info-section';
import Information from '@/components/frontend/home/information';
import PostGrid from '@/components/frontend/home/post-grid';
import FrontendLayout from '@/layouts/frontend-layout';

import { CategoryTag, FacilityType, Post } from '@/types';
import { Head } from '@inertiajs/react';

export default function Welcome({
    posts,
    category_tags,
    images,
}: {
    posts: Post[];
    category_tags: CategoryTag[];
    images: FacilityType[];
}) {
    const postsData = posts;
    const categoryTagData = category_tags;

    return (
        <>
            <Head>
                <title>
                    Welcome to NISA – Naypyitaw International School of Acumen
                </title>

                {/* Fonts */}
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="Welcome to NISA, Naypyitaw International School of Acumen, providing world-class education with modern facilities and a strategic location in Naypyitaw. Explore our curriculum, campus, and student programs."
                />
                <meta
                    name="keywords"
                    content="NISA, Naypyitaw International School of Acumen, international school Naypyitaw, best schools in Naypyitaw, education Myanmar"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Welcome to NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="NISA offers world-class education in Naypyitaw with modern facilities and a strategic location. Explore our curriculum and student programs."
                />
                <meta property="og:url" content="https://nisa.edu.mm/" />
                <meta
                    property="og:image"
                    content="https://nisa.edu.mm/images/og/landing.jpg"
                />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Welcome to NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Discover NISA in Naypyitaw, offering a modern campus and world-class education for students."
                />
            </Head>

            <FrontendLayout>
                <Carousel />
                <Hero />
                <InfoSection />
                <Gallery images={images} showLink={true} />
                <Information />
                <div className="container mx-auto mt-20">
                    <PostGrid posts={postsData} categories={categoryTagData} />
                </div>
                {/* <div className='h-96 bg-brand-core'></div> */}
                <ContactBanner />
            </FrontendLayout>
        </>
    );
}
