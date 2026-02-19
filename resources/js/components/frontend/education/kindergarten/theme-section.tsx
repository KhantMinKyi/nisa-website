import React from 'react'

const ThemeSection = () => {
    // Grouping the raw data into logical categories for better UI organization
    const curriculumData = [
        {
            category: "Language & Literacy",
            subjects: ["English Phonics: Letter & Sound", "English Writing", "English Language & Literacy", "Story & Music"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            category: "STEM & Discovery",
            subjects: ["Math", "Science", "Computer", "Blocks"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            category: "Arts & Expression",
            subjects: ["Music and Movement", "Fine Arts: Drawing & Painting", "Drama", "Story & Music"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            )
        },
        {
            category: "Physical & Well-being",
            subjects: ["Large Motor Skills", "Sand and Water", "Gymnastics/Swimming", "Health & Safety"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            category: "Social & World",
            subjects: ["Social Studies", "Environmental Awareness", "Field Trips"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }
    ];

    return (
        <section className="py-8 bg-white dark:bg-black">
            <hr className='my-4 w-1/2 mx-auto border-gray-300 dark:border-gray-700' />

            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className='text-3xl my-4 font-bold text-brand-core'>
                    Curriculum Overview
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 px-4">
                    Our theme-based approach links topics across different subjects to create
                    an integrated learning experience.
                </p>
            </div>

            {/* Content Container */}
            <div className='container mx-auto px-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {curriculumData.map((section, index) => (
                        <div
                            key={index}
                            className="flex flex-col h-full bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-xl shadow-sm hover:shadow-lg hover:border-brand-core transition-all duration-300 p-6"
                        >
                            {/* Card Header with Icon */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-lg bg-gray-50 dark:bg-neutral-900 text-brand-core">
                                    {section.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core">
                                    {section.category}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div className="h-px w-full bg-gray-100 dark:bg-neutral-800 mb-4"></div>

                            {/* List of Subjects */}
                            <ul className="space-y-3 flex-1">
                                {section.subjects.map((subject, subIndex) => (
                                    <li key={subIndex} className="flex items-start text-gray-700 dark:text-gray-300 group">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-brand-core rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"></span>
                                        <span className="group-hover:text-brand-core transition-colors">
                                            {subject}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Optional Footer/Extra info */}
                <div className="my-12 p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        *Subjects are integrated dynamically through project-based learning activities.
                    </p>
                </div>
                <p>We also encourage children’s creativity and independence by allowing them to direct their own learning via guided play periods. During these periods, children are free to explore their world using classroom toys, sand, water, paint, life-sized blocks and playground equipment. Field trips, performances, and family programs are other key components of our holistic approach designed to educate, stimulate and challenge our students.</p>

            </div>
        </section>
    )
}

export default ThemeSection