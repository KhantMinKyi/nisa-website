import React from "react";
import { motion, Variants } from "framer-motion";
import { FaBook, FaCertificate, FaStar, FaTrophy } from "react-icons/fa"; // Using FontAwesome icons
import { FiAward } from "react-icons/fi";

export default function HeadOfSchoolSection() {



    const cards = [
        {
            id: 1,
            description: "With a commitment to BFI schools since 2005, Mr. Kyaw Moe Aung enters his third year as Director of Studies for Mandalay (MISA) and Nay Pyi Taw (NISA) campuses. He boasts a strong academic background with an MA in Education (IOE, UCL's Faculty of Education and Society, England), an MEd in Secondary Level STEM Teaching (UoPeople - online), and English Qualified Teacher Status (QTS). He also holds other teaching qualifications such as the Cambridge CELTA and the e-Teacher PD Fellowship (University of Oregon). He is also accredited as the programme leader for the Cambridge International Diploma in Teaching and Learning.",
            title: "Director of Studies",
            name: "Mr. Kyaw Moe Aung",
            img: <img src="/img/admin/kyaw-moe-aung.webp" className="w-52 h-52 rounded-full object-cover" />,
            class: 'bg-gray-100 dark:bg-secondary-brand-dark'
        },

        {
            id: 2,
            description: "Just joining the MISA team, Mr. Oraz has been working with BFI at SKT International School as a school leader for the past 6 years. He holds a BA degree in Teaching, Philology, and Translation, as well as an M.Ed. in Educational Leadership. Overall, Mr. Oraz has been in education for more than 13 years now.",
            title: "Heads of School (MISA Highschool)",
            name: "Mr. Orazmyrat Orazmyradov",
            img: <img src="/img/admin/Orazmyrat-Orazmyradov.webp" className="w-52 h-52 rounded-full object-cover" />,
            class: 'bg-white dark:bg-gray-950'
        },
        {
            id: 3,
            description: "With a commitment to BFI schools since 2005, Mr. Kyaw Moe Aung enters his third year as Director of Studies for Mandalay (MISA) and Nay Pyi Taw (NISA) campuses. He boasts a strong academic background with an MA in Education (IOE, UCL's Faculty of Education and Society, England), an MEd in Secondary Level STEM Teaching (UoPeople - online), and English Qualified Teacher Status (QTS). He also holds other teaching qualifications such as the Cambridge CELTA and the e-Teacher PD Fellowship (University of Oregon). He is also accredited as the programme leader for the Cambridge International Diploma in Teaching and Learning.",
            title: "Director of Studies",
            name: "Mr. Kyaw Moe Aung",
            img: <img src="/img/admin/kyaw-moe-aung.webp" className="w-52 h-52 rounded-full object-cover" />,
            class: 'bg-gray-100 dark:bg-secondary-brand-dark'
        },
        {
            id: 4,
            description: "With a commitment to BFI schools since 2005, Mr. Kyaw Moe Aung enters his third year as Director of Studies for Mandalay (MISA) and Nay Pyi Taw (NISA) campuses. He boasts a strong academic background with an MA in Education (IOE, UCL's Faculty of Education and Society, England), an MEd in Secondary Level STEM Teaching (UoPeople - online), and English Qualified Teacher Status (QTS). He also holds other teaching qualifications such as the Cambridge CELTA and the e-Teacher PD Fellowship (University of Oregon). He is also accredited as the programme leader for the Cambridge International Diploma in Teaching and Learning.",
            title: "Director of Studies",
            name: "Mr. Kyaw Moe Aung",
            img: <img src="/img/admin/Orazmyrat-Orazmyradov.webp" className="w-52 h-52 rounded-full object-cover" />,
            class: 'bg-white dark:bg-gray-950'
        },

    ];

    return (
        <div className="w-full ">
            {/* 1. THE GRAY BACKGROUND SECTION (The "Darker Gray" Component) */}
            {cards.map((item) => {
                const isEven = item.id % 2 === 0

                return (
                    <div key={item.id} className={item.class}>
                        <div className="container mx-auto grid grid-cols-1 p-10 md:grid-cols-2">

                            {isEven ? (
                                <>
                                    {/* IMAGE FIRST (even) */}
                                    <motion.div
                                        className="orico-about-text-wrap font-merriweather flex items-center"
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 1 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        <div className="text-justify indent-8 ">
                                            <p>{item.description}</p>
                                        </div>
                                    </motion.div>
                                    {/* TEXT SECOND */}
                                    <motion.div
                                        className="orico-about-text-wrap flex flex-col items-center justify-center"
                                        initial={{ opacity: 0, y: -100 }}
                                        whileInView={{ opacity: 1, y: 1 }}
                                        exit={{ opacity: 0, y: -100 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        <div>
                                            {item.img}
                                        </div>
                                        <div className="text-center">
                                            <h2 className="text-4xl">
                                                {item.name}
                                            </h2>
                                            <h6 className="text-2xl text-secondary-brand dark:text-brand">
                                                {item.title}
                                            </h6>
                                        </div>
                                    </motion.div>

                                </>
                            ) : (
                                <>
                                    {/* TEXT FIRST (odd) */}
                                    <motion.div
                                        className="orico-about-text-wrap flex flex-col items-center justify-center"
                                        initial={{ opacity: 0, y: -100 }}
                                        whileInView={{ opacity: 1, y: 1 }}
                                        exit={{ opacity: 0, y: -100 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        {item.img}
                                        <div className="text-center">
                                            <h2 className="text-4xl">
                                                {item.name}
                                            </h2>
                                            <h6 className="text-2xl text-secondary-brand dark:text-brand">
                                                {item.title}
                                            </h6>
                                        </div>
                                    </motion.div>
                                    {/* IMAGE SECOND */}
                                    <motion.div
                                        className="orico-about-text-wrap font-merriweather flex items-center"
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 1 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        viewport={{ once: false, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        <div className="text-justify indent-8 ">
                                            <p>{item.description}</p>
                                        </div>
                                    </motion.div>

                                </>
                            )}

                        </div>
                    </div>
                )
            })}
        </div>
    );
}