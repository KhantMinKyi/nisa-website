import { Link } from '@inertiajs/react';
import { MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function KgBanner() {
    return (
        <section className="relative z-20 flex flex-col justify-center overflow-hidden py-[120px] sm:py-[80px] sm:pt-[60px] md:py-[90px] md:pt-[70px] dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-12 items-center gap-x-4">
                    <div className="col-span-12 p-10 md:col-span-6">
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="orico-about-text">
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“MISA”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">Kindergarten Programs</h2>
                                <p className="mb-5">
                                    Our International curriculum addresses social-emotional development via engaging activities and positive reinforcement and by actively involving parents in our lessons and extra-curricular programs. We follow an age-appropriate curriculum based on the latest research on early childhood learning. Children are free to explore their world using classroom toys, sand, water, paint, life-sized blocks and out playground equipment.
                                </p>

                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="col-span-12 p-10 md:col-span-6"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <div className="mt-14 flex flex-col items-center justify-center gap-4 pl-0 md:pl-12">
                            <div>
                                <img src="/img/logo/misa.webp" alt="" className="h-62 dark:hidden" />
                                <img src="/img/logo/misa_b.webp" alt="" className="hidden h-62 dark:block" />
                            </div>

                        </div>
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8 hidden md:block"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60 opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
                        viewport={{ once: false, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/misa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default KgBanner;
