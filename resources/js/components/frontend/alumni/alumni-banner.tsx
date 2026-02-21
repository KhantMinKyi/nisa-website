import { Link } from '@inertiajs/react';
import { MailIcon, MapPinIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
function AlumniBanner() {
    return (
        <section className="relative z-20 flex flex-col justify-center overflow-hidden py-[120px] sm:py-[80px] sm:pt-[60px] md:py-[90px] md:pt-[70px] dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-12 items-center gap-x-4">
                    <motion.div
                        className="col-span-12 p-10 md:col-span-6"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
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
                    <div className="col-span-12 p-10 md:col-span-6">
                        <motion.div
                            className="orico-about-text-wrap 111"
                            initial={{ opacity: 0, x: -50 }} // start 50px below
                            whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                            exit={{ opacity: 0, x: -50 }} // fade out and slide down
                            viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                            transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                        >
                            <div className="orico-about-text">
                                <span className="font-merriweather mb-1 inline-block text-xl font-normal text-brand-core underline">“NISA”</span>
                                <h2 className="font-merriweather mb-5 text-3xl font-bold sm:text-4xl lg:text-6xl dark:text-yellow-400">Alumni </h2>
                                <p className="mb-5">
                                    Today’s NISA is a vibrant and ever-growing community built on the foundation of excellence, shaped by our past and strengthened by our shared values. Our alumni represent the legacy of NISA—individuals who have carried forward the spirit of learning, leadership, and community into the world beyond our school.

                                    As a valued member of our alumni network, we invite you to reconnect with your alma mater. Visit our campus, engage with former teachers, and witness how the traditions and values that shaped your journey continue to thrive in today’s students.

                                    We encourage you to stay involved—attend alumni events, volunteer, or mentor the next generation of NISA graduates. Your connection to NISA lasts a lifetime, and we look forward to celebrating your achievements as part of our extended family.

                                    For more information on how to stay connected, please keep an eye on our website and social media channels!
                                </p>
                                <ul className="col:block mb-8 flex">
                                    <li className="relative inline-block py-1 pl-6 text-base text-brand-core">
                                        <i className="absolute top-2 left-0 ">
                                            <MailIcon className="h-4 " />
                                        </i>
                                        <p>alumnicoordinator@bfi-edu.com </p>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="absolute top-1/8 left-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-1/8 right-[40px] -z-10 -translate-y-1/8"
                        initial={{ opacity: 0, x: 50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: 50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60  opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 left-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
                        viewport={{ once: true, amount: 0.4 }} // trigger when 20% visible
                        transition={{ duration: 1, ease: 'easeInOut' }} // longer duration
                    >
                        <img src="/img/logo/nisa.webp" alt="" className="hidden w-60 opacity-10 sm:block" />
                    </motion.div>
                    <motion.div
                        className="absolute top-8/8 right-[40px] -z-10 -translate-y-8/8"
                        initial={{ opacity: 0, x: -50 }} // start 50px below
                        whileInView={{ opacity: 1, x: 1 }} // slide up and fade in
                        exit={{ opacity: 0, x: -50 }} // fade out and slide down
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

export default AlumniBanner;
