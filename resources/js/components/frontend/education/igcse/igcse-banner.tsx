import * as motion from 'motion/react-client';
function IgcseBanner() {
    return (
        <section className="relative z-20 overflow-hidden py-16 md:py-20 dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-12 gap-8 items-start">
                    <motion.div
                        className="col-span-12 lg:col-span-7"
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <div className="rounded-3xl border border-gray-200 dark:border-brand-core/20 bg-white dark:bg-neutral-950 p-8 shadow-sm">
                            <p className="text-sm font-semibold tracking-widest text-brand-core uppercase">
                                What is IGCSE?
                            </p>
                            <h2 className="mt-3 font-merriweather text-3xl font-bold text-gray-900 dark:text-yellow-400 md:text-4xl">
                                International General Certificate of Secondary Education
                            </h2>
                            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                                IGCSE stands for the International General Certificate of Secondary Education. It is the international equivalent of the General Certificate of Secondary Education or GCSE, which is taken by all UK students at the end of their compulsory schooling at age 16.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="col-span-12 lg:col-span-5"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    >
                        <div className="rounded-3xl border border-gray-200 dark:border-brand-core/20 bg-gradient-to-br from-brand-core/10 via-white to-white dark:from-brand-core/20 dark:via-neutral-950 dark:to-neutral-950 p-8 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                                Why study IGCSE?
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                In nearly two decades since their inception, IGCSEs have become a widely recognized standard for education. IGCSE is designed for 14–16-year-olds and provides a common assessment system suitable for students of a wide range of abilities. Students who obtain IGCSE qualifications are well prepared for further academic success, including progression to IBDP, AS and A Level study, and will be equipped with the skills needed for immediate employment. IGCSE is recognised as evidence of ability by academic institutions and employers around the world.
                            </p>
                            <div className="mt-6 flex items-center justify-center">
                                <img src="/img/logo/cambridge.webp" alt="" className="h-24 dark:hidden" />
                                <img src="/img/logo/cambridge_b.webp" alt="" className="hidden h-24 dark:block" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <div className="rounded-3xl border border-gray-200 dark:border-brand-core/20 bg-white dark:bg-neutral-950 p-8 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            IGCSE Course Structure
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            Most IGCSE courses are 2 years in duration. At NISA, students start their IGCSE courses in Year 10 and continue until the final IGCSE examinations at the end of Year 11. For IGCSE, Students take 6 compulsory subjects including three core subjects and 5 elective subjects.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                            Compulsory core subjects include English, Mathematics and Global Perspectives. Meanwhile, students can choose the elective subjects based on their personal preference, talent, interests and future aim.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default IgcseBanner;
