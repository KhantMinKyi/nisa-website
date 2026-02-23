
import FrontendLayout from '@/layouts/frontend-layout'
import { Head } from '@inertiajs/react'
import * as motion from 'motion/react-client';
import PrimarySchoolBanner from '@/components/frontend/education/primary/primary-school-banner'
import PrimarySubjectsTable from '@/components/frontend/education/primary/primary-subject-table'
import SubjectDetails from '@/components/frontend/education/primary/subject-details'
const PrimarySchool = () => {
    return (
        <>
            <Head>
                <title>Primary School | NISA </title>

                {/* SEO Meta */}
                <meta
                    name="description"
                    content="NISA Naypyitaw Primary School Curriculum is designed for holistic student development, providing individualized education that builds confidence, self-esteem, and strong academic foundations."
                />
                <meta
                    name="keywords"
                    content="NISA Primary School, primary school Naypyitaw, international primary curriculum Myanmar, holistic education Naypyitaw, individualized learning, Cambridge primary school, NISA admissions"
                />
                <meta name="robots" content="index, follow" />

                {/* Canonical */}
                <link rel="canonical" href="https://nisa.edu.mm/primary-school-programs" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Primary School | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    property="og:description"
                    content="Discover NISA’s Primary School in Naypyitaw, where holistic development, individualized learning, and academic excellence build confident and capable students."
                />
                <meta property="og:url" content="https://nisa.edu.mm/primary-school-programs" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:title"
                    content="Primary School | NISA – Naypyitaw International School of Acumen"
                />
                <meta
                    name="twitter:description"
                    content="Explore NISA Naypyitaw Primary School curriculum focused on holistic growth, confidence building, and academic challenge."
                />
            </Head>
            <FrontendLayout>
                <div >
                    <div
                        className="relative bg-cover bg-center bg-no-repeat text-white"
                        style={{
                            backgroundImage: "url('/img/banner/banner_2.webp')", // put your image path here
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
                                <h2 className="font-merriweather mb-4 text-3xl font-bold md:text-5xl">Primary School</h2>
                                {/* <p className="mb-6 max-w-2xl text-lg md:text-xl">Our path through innovation, challenge, and achievement.</p> */}
                            </div>
                        </motion.div>
                    </div>
                    <PrimarySchoolBanner />
                    <PrimarySubjectsTable />
                    <SubjectDetails />

                </div>
            </FrontendLayout>
        </>
    )
}

export default PrimarySchool