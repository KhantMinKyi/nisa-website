import React from "react";
import { motion, Variants } from "framer-motion";
import { FaBook, FaCertificate, FaStar, FaTrophy } from "react-icons/fa"; // Using FontAwesome icons
import { FiAward } from "react-icons/fi";

export default function HeadOfSchoolSection() {



    const cards = [
        {
            id: 1,
            description: "Welcome to Nay Pyi Taw International School of Acumen — a community where learning is purposeful, relationships are valued, and every child is empowered to grow with strong character, self-discipline, and integrity while preparing for world-class university pathways and lifelong learning.At NISA, we are committed to nurturing students through a challenging and balanced curriculum within a safe and caring environment. We believe that academic excellence must go hand in hand with personal growth, responsibility, and compassion. Our goal is not only to prepare students for future success, but also to guide them in becoming thoughtful individuals who contribute positively to the world around them.Together with our dedicated staff and supportive families, we are building a school where every child feels valued, challenged, and inspired to reach their full potential. We look forward to partnering with you as we support every learner on their journey toward success and meaningful global citizenship.",
            title: "Principal of Naypyitaw International School of Acumen",
            name: "Mrs. Annalyn Gadin Mogol",
            img: <img src="/img/admin/principal_1.webp" className="w-52 h-52 rounded-full object-cover" />,
            class: 'bg-gray-100 dark:bg-secondary-brand-dark'
        },

        {
            id: 2,
            description: "Mrs. Naw He Mu Paw is the Head of the Nay Pyi Taw International School of Acumen - Preschool campus. She has been with the BFI Company for over 18 years. Her goal is to deliver a high-quality educational experience to nursery, pre-KG, and KG students. She aims to achieve this by setting high professional standards and providing a nurturing and supportive environment where children can flourish in all areas.She holds a B.A. in Teaching and a B.A. in Communicative English. Passionate about professional development in early childhood education, she has completed multiple courses during her career, including the Teaching Knowledge Test (TKT) program from Cambridge University.At Nay Pyi Taw International School of Acumen - Preschool, she and her team strive to make each child's educational experience both successful and enjoyable. Through active participation and collaboration, combined with their best professional efforts, they work to achieve the highest educational outcomes for all students.",
            title: "Head of the Nay Pyi Taw International School of Acumen - Preschool campus",
            name: "Mrs. Naw He Mu Paw",
            img: <img src="/img/admin/principal_2.webp" className="w-52 h-52 rounded-full object-cover" />,
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
                        <div className="container mx-auto grid grid-cols-1 p-10 gap-5 md:grid-cols-2">

                            {isEven ? (
                                <>
                                    {/* IMAGE FIRST (even) */}
                                    <motion.div
                                        className="orico-about-text-wrap font-merriweather flex items-center"
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 1 }}
                                        exit={{ opacity: 0, y: 100 }}
                                        viewport={{ once: true, amount: 0.1 }}
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
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        <div>
                                            {item.img}
                                        </div>
                                        <div className="text-center">
                                            <h2 className="text-4xl">
                                                {item.name}
                                            </h2>
                                            <h6 className="text-xl mt-2 text-secondary-brand italic dark:text-brand">
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
                                        viewport={{ once: true, amount: 0.1 }}
                                        transition={{ duration: 1, ease: 'anticipate' }}
                                    >
                                        {item.img}
                                        <div className="text-center">
                                            <h2 className="text-4xl">
                                                {item.name}
                                            </h2>
                                            <h6 className="text-xl mt-2 text-secondary-brand italic dark:text-brand">
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
                                        viewport={{ once: true, amount: 0.1 }}
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