import { Link } from '@inertiajs/react';
import { MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function SchoolProfileBanner() {
    return (
        <section className="relative z-20 flex flex-col justify-center overflow-hidden py-[120px] sm:py-[80px] sm:pt-[60px] md:py-[90px] md:pt-[70px] dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-12 items-center gap-x-4">
                    <div className="col-span-12 p-10 md:col-span-6">
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, y: -50 }} // start 50px below
                            whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                            exit={{ opacity: 0, y: -50 }} // fade out and slide down
                            viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="orico-about-text">
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“NISA”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">Community</h2>
                                <p className="mb-5">
                                    Nay Pyi Taw is the capital city of Myanmar, strategically located in the central part of the country. It lies approximately 370 kilometers (230 miles) north of Yangon and 300 kilometers (186 miles) south of Mandalay, making it a key administrative and transportation hub. Situated close to Mandalay Region, near the border of the Bago Region and Shan State, the city enjoys excellent connectivity via highways, railways, and an international airport. Nay Pyi Taw was purposefully designed as a planned and spacious capital, chosen for its geographical advantages, lower population density, and reduced risk of natural disasters.
                                    The city has a well-established educational system, comprising 757 basic education schools, 28 monastic schools, and 57 private schools. It is also home to international institutions, such as Nay Pyi Taw International School of Acumen (NISA), which offers the Cambridge Curriculum from Year 2 to Year 11, providing students with globally recognized education and preparing them for future academic and professional success.{' '}
                                </p>

                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="col-span-12 p-10 md:col-span-6"
                        initial={{ opacity: 0, y: 50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <div className="mt-14 flex flex-col items-center justify-center gap-4 pl-0 md:pl-12">
                            <div>
                                <img src="/img/logo/nisa.webp" alt="" className="h-62 dark:hidden" />
                                <img src="/img/logo/nisa_b.webp" alt="" className="hidden h-62 dark:block" />
                            </div>

                        </div>
                    </motion.div>
                    <div className="col-span-12 p-6 md:col-span-6 lg:p-10">
                        <motion.div
                            className="orico-about-text-wrap"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <div className="orico-about-text">
                                {/* Section Label */}
                                <span className="font-merriweather mb-2 inline-block text-lg font-medium tracking-wider text-brand-core uppercase border-b-2 border-brand-core">
                                    Our Curriculum
                                </span>

                                <h2 className="font-merriweather mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl dark:text-yellow-400">
                                    Global Academic Excellence
                                </h2>

                                <div className="space-y-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    <p>
                                        <span className="font-semibold text-gray-900 dark:text-white">Nay Pyi Taw International School of Acumen</span> offers
                                        Cambridge International programmes from primary school to IGCSE Level, ensuring a globally recognized education.
                                    </p>

                                    {/* Primary & Lower Secondary */}
                                    <div className="border-l-4 border-brand-core pl-4">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Primary & Lower Secondary (KS 1 & 2)</h3>
                                        <p>
                                            Years 2–9 follow the <span className="italic">Cambridge Lower Secondary Checkpoint Curriculum</span>.
                                            Students sit for external examinations at the end of <span className="font-bold">Year 6 and Year 9</span> to benchmark progress.
                                        </p>
                                    </div>

                                    {/* Upper Secondary / IGCSE */}
                                    <div className="mt-8">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Upper Secondary (IGCSE Level)</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <h4 className="font-bold text-brand-core mb-1 uppercase text-xs tracking-widest">Sciences & Tech</h4>
                                                <p>Physics, Biology, Chemistry, ICT</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <h4 className="font-bold text-brand-core mb-1 uppercase text-xs tracking-widest">Mathematics</h4>
                                                <p>Additional Mathematics</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <h4 className="font-bold text-brand-core mb-1 uppercase text-xs tracking-widest">Languages</h4>
                                                <p>English (First Language), Chinese</p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                                                <h4 className="font-bold text-brand-core mb-1 uppercase text-xs tracking-widest">Social & Business</h4>
                                                <p>Business Studies, Economics, History, Global Perspectives</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="col-span-12 p-10 md:col-span-6"
                        initial={{ opacity: 0, y: 50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <div className="orico-about-text">
                            <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“NISA”</span>
                            <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">About School </h2>
                            <p className="mb-5">
                                Nay Pyi Taw International School of Acumen is a comprehensive K-12 private international school located in Nay Pyi Taw, Myanmar. Offering the Cambridge Curriculum from Year 2 to Year 11, the school provides a high-quality education for both primary and high school students. Established in 2014, it celebrated the graduation of its first IGCSE class in 2023. The school is officially registered with Cambridge Assessment International Education as a Cambridge International School, ensuring globally recognized academic standards and excellence.{' '}
                            </p>

                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8 hidden md:block"
                        initial={{ opacity: 0, y: 50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, y: 50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, y: -50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: -50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60 opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, y: -50 }} // start 50px below
                        whileInView={{ opacity: 1, y: 1 }} // slide up and fade in
                        exit={{ opacity: 0, y: -50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default SchoolProfileBanner;
