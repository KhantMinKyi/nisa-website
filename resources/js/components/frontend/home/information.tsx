import { Link } from '@inertiajs/react';
import { MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function Information() {
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
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">School History </h2>
                                <div className="col-span-6 flex flex-col justify-center p-4">
                                    {/* Header Intro */}
                                    <h2 className="text-2xl font-bold dark:text-white text-slate-900 mb-4 leading-tight">
                                        World-Class International Education
                                    </h2>

                                    <p className="dark:text-white text-slate-600 mb-6 leading-relaxed text-justify sm:text-left">
                                        Nay Pyi Taw International School of Acumen (NISA) is proud to provide a world-class international education from nursery to IGCSE level.
                                    </p>

                                    {/* Simple List Design */}
                                    <ul className="space-y-6">
                                        {/* Purpose-Built Campus */}
                                        <li className="relative pl-6">
                                            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-secondary-brand dark:bg-brand-core"></span>
                                            <h4 className="font-bold dark:text-white text-slate-800 uppercase tracking-wide text-sm mb-1">
                                                Purpose-Built Campus
                                            </h4>
                                            <p className="dark:text-white text-slate-600 text-sm leading-relaxed">
                                                Established in 2014, our main campus in Ottara Thiri Myo Thit offers a spacious,
                                                state-of-the-art environment designed for academic excellence.
                                            </p>
                                        </li>

                                        {/* Two Campuses */}
                                        <li className="relative pl-6">
                                            <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-secondary-brand dark:bg-brand-core"></span>
                                            <h4 className="font-bold dark:text-white text-slate-800 uppercase tracking-wide text-sm mb-1">
                                                Three Dedicated Campuses
                                            </h4>
                                            <div className="space-y-2 dark:text-white text-slate-600 text-sm">
                                                <p>• <strong className="dark:text-white text-slate-700">Main Campus:</strong> Serving Year 2 to Year 11.</p>
                                                <p>• <strong className="dark:text-white text-slate-700">Preschool Campus:</strong> Opened 2022-23 for KG learners.</p>
                                                <p>• <strong className="dark:text-white text-slate-700">KG Campus in Pyinmana:</strong> For the 2025 – 2026 academic year, expanding access to world-class early years education</p>
                                            </div>
                                        </li>
                                    </ul>

                                    {/* Simple Footer */}
                                    <p className="mt-8 pt-4 border-t border-slate-100 dark:text-white text-slate-500 text-sm italic">
                                        With a commitment to excellence, NISA continues to nurture young minds with a globally recognized Cambridge International curriculum in a dynamic and enriching environment.
                                    </p>
                                </div>
                                <ul className="col:block mb-8 flex">
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-brand-core">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>Main Campus</p>
                                    </li>
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-brand-core">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>Preschool</p>
                                    </li>
                                    <li className="relative inline-block py-1 pl-6 text-base font-semibold text-brand-core">
                                        <i className="absolute top-2 left-0">
                                            <MapPinIcon className="h-4" />
                                        </i>
                                        <p>KG (Pyinmana)</p>
                                    </li>
                                </ul>
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
                            {/* <div className="flex flex-col sm:flex-row">
                                <div className="flex flex-row gap-2 md:flex-col lg:flex-row">
                                    <img src="/img/skt_riverside_campus.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/skt_riverside_campus_b.webp" alt="" className="hidden h-24 dark:block" />
                                    <img src="/img/skt_city_campus.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/skt_city_campus_b.webp" alt="" className="hidden h-24 dark:block" />
                                </div>
                                <div className="flex flex-row gap-2 md:flex-col lg:flex-row">
                                    <img src="/img/nisa.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/nisa_b.webp" alt="" className="hidden h-24 dark:block" />
                                    <img src="/img/nisa.webp" alt="" className="h-24 dark:hidden" />
                                    <img src="/img/nisa_b.webp" alt="" className="hidden h-24 dark:block" />
                                </div>
                            </div> */}
                            {/* <div className="col:w-[160px] col:h-[150px] absolute bottom-[-25px] left-[-25px] flex items-center justify-center rounded-[8px] bg-yellow-600 text-center backdrop-blur-[15px] md:bottom-0 md:left-0 lg:h-[235px] lg:w-[201px]">
                                    <div className="flex flex-col">
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                        <img src="/img/cambridge.webp" className="w-20" alt="" />
                                    </div>
                                </div> */}
                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8"
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

export default Information;
