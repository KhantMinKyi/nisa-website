import React from "react";
import { motion, Variants } from "framer-motion";
import { FaBook, FaCertificate, FaStar, FaTrophy } from "react-icons/fa"; // Using FontAwesome icons
import { FiAward } from "react-icons/fi";

export default function SisterSchoolSection() {
    // Animation configuration
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Cards appear one by one
            },
        },
    };

    const cardVariants: Variants = {
        hidden: { y: 50, opacity: 0 }, // Start down and invisible
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 } // Nice springy pop-up
        },
    };

    const cards = [
        { id: 1, title: "BFI Education Sevices", icon: <img src="/img/logo/bfi.webp" className="h-40" />, webUrl: 'https://www.bfi.edu.mm/' },
        { id: 2, title: "SKT International School ( City Campus )", icon: <img src="/img/logo/skt_city_campus.webp" className="h-40" />, webUrl: 'https://skt.edu.mm/skt-city-campus' },
        { id: 3, title: "SKT International School ( Riverside Campus )", icon: <img src="/img/logo/skt_riverside_campus.webp" className="h-40" />, webUrl: 'https://skt.edu.mm/skt-riverside-campus' },
        { id: 4, title: "NAYPYITAW International School of Acumen", icon: <img src="/img/logo/nisa.webp" className="h-40" />, webUrl: 'https://nisa.edu.mm/' },
    ];

    return (
        <div className="w-full ">
            {/* 1. THE GRAY BACKGROUND SECTION (The "Darker Gray" Component) */}

            {/* -mt-20 pulls this container UP into the gray section to create the overlap */}
            <div className="relative z-10 mt-20  px-4">
                <motion.div
                    className="container mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}// Animation triggers when 30% visible
                >
                    {cards.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            whileHover={{ y: -10 }} // Optional: slight lift on hover
                            className="flex cursor-pointer flex-col items-center justify-center bg-white dark:bg-neutral-900 py-12 px-6 text-center shadow-lg transition-shadow hover:shadow-xl rounded-sm dark:hover:border-brand-dark hover:border-brand hover:border-2"
                        >
                            {/* Icon Wrapper (Gold Color) */}
                            <div className="mb-6 text-brand-core dark:text-brand">
                                {item.icon}
                            </div>

                            {/* Text (Uppercase & Bold) */}
                            <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-gray-50">
                                {item.title}
                            </h3>
                            {/* Text (Uppercase & Bold) */}
                            <a href={item.webUrl ?? '#'} target="_blank" className="text-sm mt-2 font-bold uppercase tracking-wide text-brand dark:text-secondary-brand">
                                Go to the website
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* 3. THE BOTTOM WHITE SECTION */}
            <div className="bg-white dark:bg-neutral-950 pb-20 pt-20">
                {/* Content below the cards goes here */}
            </div>
        </div>
    );
}