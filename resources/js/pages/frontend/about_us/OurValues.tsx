import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import * as motion from 'motion/react-client'

const values = [
    {
        title: 'SELF - DISCIPLINE',
        description:
            'Focused and committed to goals, even in the face of challenges or distractions.',
    },
    {
        title: 'COMPASSION',
        description: 'Show concern for the wellbeing of all people.',
    },
    {
        title: 'RESPECT',
        description: 'Treat yourself and those around you with dignity.',
    },
    {
        title: 'INTEGRITY',
        description: 'Embody strong character and moral principles.',
    },
    {
        title: 'BELIEF',
        description: 'Know that you can make a positive change.',
    },
    {
        title: 'EXCELLENCE',
        description: 'It is a habit.',
    },
]

const OurValues = () => {
    return (
        <>
            <Head>
                <title>Our Values | NISA</title>
                <meta
                    name="description"
                    content="Our values at Naypyitaw International School of Acumen (NISA): self-discipline, compassion, respect, integrity, belief, and excellence."
                />
                <meta
                    name="keywords"
                    content="NISA values, Naypyitaw International School values, self-discipline, compassion, respect, integrity, belief, excellence"
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://nisa.edu.mm/our-values" />
                <meta property="og:type" content="article" />
                <meta
                    property="og:title"
                    content="Our Values | NISA - Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover the core values of NISA: self-discipline, compassion, respect, integrity, belief, and excellence."
                />
                <meta property="og:url" content="https://nisa.edu.mm/our-values" />
            </Head>

            <FrontendLayout>
                <div>
                    <div
                        className="relative bg-fit bg-white bg-center bg-no-repeat text-white"
                        style={{ backgroundImage: "url('/img/banner/banner_10.webp')" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-gray-950/60 dark:from-dark-950/90 dark:to-dark-950/90" />
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 1 }}
                            exit={{ opacity: 0, y: -50 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center md:py-40 lg:py-52">
                                <img src="/img/logo/nisa.webp" className="max-w-40" alt="" />
                                <h2 className="mb-4 text-3xl font-bold md:text-5xl">OUR VALUES</h2>
                            </div>
                        </motion.div>
                    </div>

                    <section className="bg-white py-16 dark:bg-black">
                        <div className="container mx-auto max-w-6xl px-4">
                            <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
                                <img src="/img/logo/nisa.webp" className="max-w-40 dark:hidden" alt="" />
                                <img src="/img/logo/nisa_b.webp" className="hidden max-w-40 dark:block" alt="" />
                            </div>
                            <div className="mb-14 text-center">
                                <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">OUR VALUES</h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {values.map((value, index) => (
                                    <div
                                        key={value.title}
                                        className="rounded-2xl border border-gray-200 bg-gray-50 p-7 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                                    >
                                        <p className="mb-2 text-sm font-semibold tracking-wider text-brand-core">
                                            {String(index + 1).padStart(2, '0')}
                                        </p>
                                        <h3 className="mb-3 text-2xl font-bold text-brand">
                                            {value.title}
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                                            {value.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </FrontendLayout>
        </>
    )
}

export default OurValues
