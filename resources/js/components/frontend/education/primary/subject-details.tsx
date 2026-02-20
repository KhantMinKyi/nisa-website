import React from 'react'

function SubjectDetails() {
    const subjectData = [
        {
            title: "English Language A (Cambridge Primary English)",
            content: "Cambridge Primary English develops learners’ confidence and effectiveness in communication while enhancing critical skills to engage with diverse texts, media, and information. It builds first-language competency in English through a culturally adaptable curriculum that fosters cross-cultural understanding. Speaking, listening, reading, and writing skills are continuously assessed throughout the course.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            title: "Mathematics",
            content: "The mathematics curriculum framework covers five key areas: number, geometry, measure, data handling, and problem-solving. It emphasizes principles, patterns, systems, functions, and relationships, enabling learners to apply their knowledge and develop a comprehensive understanding of the subject.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Science",
            content: "The Cambridge Primary Science curriculum framework covers four key areas: scientific enquiry, biology, chemistry, and physics. It develops skills in investigating, evaluating evidence, recording, and analysing data. The curriculum also includes environmental awareness and aspects of the history of science.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "Computing",
            content: "The computing curriculum takes a real-life, project-based approach to teaching logic, programming, computational thinking, creativity, image editing, computer networks, communication, collaboration, productivity, and online safety.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Geography",
            content: "Geography is a valued part of the Cambridge Primary curriculum, offering learners the opportunity to explore, appreciate, and understand the world and how it has evolved over time. It examines the dynamic relationship between the Earth and its people, fostering a deeper awareness of environmental and cultural connections.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Physical Education",
            content: "Regular exercise, supported by sports and outdoor activities, plays a crucial role in enhancing physical and mental well-being. It also contributes to better academic performance. Establishing healthy exercise habits through these activities in primary school provides learners with a strong foundation for an active and healthy lifestyle.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            )
        },
        {
            title: "Music",
            content: "We aim to provide an engaging and inclusive music curriculum that fosters a love for and enjoyment of all aspects of music. Our goal is to ensure that every child is actively involved in appreciating and performing a diverse range of music through various approaches and experiences.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" /></svg>
            )
        },
        {
            title: "Art",
            content: "Art is a highly valued and cherished aspect of life at Cambridge Primary School. Blocked art and design sessions are an integral part of our topic-based curriculum, providing pupils with dedicated time to build and develop skills in drawing, painting, printing, 3D art, collage, and textiles.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
            )
        },
        {
            title: "Myanmar Language",
            content: "The Myanmar language curriculum aims to build a strong foundation in the language, enhancing communication skills and fostering a deep understanding of Myanmar’s rich linguistic and cultural heritage. It focuses on developing proficiency in reading, writing, listening, and speaking, helping students confidently express themselves in various contexts.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253" /></svg>
            )
        },
        {
            title: "Social Studies (Myanmar)",
            content: "The Social Studies (Myanmar) curriculum aims to build a strong understanding of Myanmar’s history, geography, culture, and society. It enhances students’ awareness of their roles as responsible citizens and fosters respect for diversity and national unity. The curriculum encourages critical thinking and exploration, helping students connect with their community, heritage, and the world around them.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Homeroom",
            content: "The homeroom curriculum focuses on character and values education, helping students develop essential qualities such as compassion, determination, honesty, and respect. It encourages students to reflect on their behaviour, build positive relationships, and contribute to a supportive school community. Through discussions, activities, and projects, students learn to understand and apply universal values, fostering personal growth and responsible citizenship.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
            )
        }
    ]

    const highlights = [
        "Aiming to produce confident and competent learners, who are able to communicate effectively.",
        "Excursions and field trips broaden the students’ horizons.",
        "Projects and activities that encourage students to explore, inquire, question, and apply what they know.",
        "Working in an environment marked by encouragement.",
        "Encouraging students to read a wide range of books",
        "Teachers create a stimulating learning environment by displaying students’ work.",
        "Developing students’ 21st Century skills such as critical thinking, communication, collaboration, problem-solving, leadership and etc."
    ]

    return (
        <section className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold text-brand-core mb-4">
                        Subject Details
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Internationally recognized Cambridge Primary Curriculum and assessments which includes Cambridge International Primary Checkpoint and yearly progression tests from Year 3 to Year 6.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto mb-10 bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/20 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-4">
                        Primary School Approach
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {subjectData.map((subject, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-neutral-950 rounded-2xl p-8 border border-gray-100 dark:border-brand-core/20 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group"
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 left-0 w-1 h-full bg-brand-core opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Header */}
                            <div className="flex items-start gap-5 mb-6">
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-neutral-900 text-brand-core shrink-0">
                                    {subject.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core pt-1">
                                    {subject.title}
                                </h3>
                            </div>

                            {/* Content - whitespace-pre-line ensures paragraph breaks are respected */}
                            <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line text-sm md:text-base">
                                {subject.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SubjectDetails
