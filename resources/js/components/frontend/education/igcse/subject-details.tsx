import React from 'react'

function SubjectDetails() {
    const subjectData = [
        {
            title: "First Language English (0500)",
            content: "Cambridge IGCSE First Language English is designed for learners whose first language is English. The course enables learners to: develop the ability to communicate clearly, accurately and effectively when speaking and writing, use a wide range of vocabulary, and the correct grammar, spelling and punctuation, develop a personal style and an awareness of the audience being addressed. Learners are also encouraged to read widely, both for their own enjoyment and to further their awareness of the ways in which English can be used. Cambridge IGCSE First Language English also develops more general analysis and communication skills such as inference, and the ability to order facts and present opinions effectively.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            )
        },
        {
            title: "English as a Second Language* (0511)",
            content: "This subject helps students develop skills, which are needed for practical communication. They also build solid foundation skills required for further study or employment using English as the medium. Students become aware of the nature of the language and language learning skills. It also promotes learners’ personal development. Students are assessed in four skills: Reading Comprehension, writing, speaking and listening.\n\n*English as a second language might be offered on demand. However it depends on the number of the students and the availability of teachers and school facilities. Students must submit their request in the first week of the academic year. Students cannot choose both English as a second Language and First Language English if offered.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            )
        },
        {
            title: "Mathematics (0580)",
            content: "An essential subject for all learners, Cambridge IGCSE Mathematics encourages the development of mathematical knowledge as a key life skill, and as a strong basis for more advanced study. The syllabus aims to build learners’ confidence by helping them develop competence and fluency with mathematical concepts, methods and skills, as well as a feel for numbers, patterns and relationships. The syllabus also places a strong emphasis on solving problems and presenting and interpreting results. Learners also gain an understanding of how to communicate and reason using mathematical concepts",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Additional Mathematics (0606)",
            content: "Cambridge IGCSE Additional Mathematics supports learners in building competency, confidence and fluency in their use of techniques and mathematical understanding. This course helps learners to develop a feel for quantity, patterns and relationships. Learners will develop their reasoning, problem-solving and analytical skills in a variety of contexts. It provides a strong foundation of mathematical knowledge both for candidates studying mathematics at a higher level and those who will require mathematics to support skills in other subjects. It is designed to stretch the most able candidates and provides a smooth transition to Cambridge AS & A Level Mathematics.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Physics (0625)",
            content: "The Cambridge IGCSE Physics syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments. They learn about the basic principles of Physics through a mix of theoretical and practical studies. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Physics has links to many other courses in higher education such as engineering, space and astronomy sciences.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            )
        },
        {
            title: "Chemistry (0620)",
            content: "The Cambridge IGCSE Chemistry syllabus helps learners to understand the technological world in which they live, and take an informed interest in science and scientific developments. Chemistry is an experimental science that connects theoretical knowledge with practical applications. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Chemistry has links to many other courses in higher education such as medicine, biological sciences and environmental sciences.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            )
        },
        {
            title: "Biology (0610)",
            content: "The Cambridge IGCSE Biology syllabus helps learners to understand the living world around us, and take an informed interest in science and scientific developments. Learners develop experimental and investigation skills, which are needed for their further studies as well as daily life experiences. Biology has links to many other courses in higher education such as medicine, health sciences, botanics and zoology.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            )
        },
        {
            title: "Business Studies (0450)",
            content: "The Cambridge IGCSE Business Studies syllabus develops learners’ understanding of business activity in the public and private sectors, and the importance of innovation and change. Learners find out how the major types of business organisation are established, financed and run, and how their activities are regulated. Factors influencing business decision-making are also considered, as are the essential values of cooperation and interdependence. Learners not only study business concepts and techniques but also enhance related skills such as numeracy and enquiry. The syllabus provides both a foundation for further studies and an ideal preparation for the world of work.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Economics (0455)",
            content: "The Cambridge IGCSE Economics syllabus develops an understanding of economic terminology and principles and of basic economic theory. Learners study the economics of developed and developing nations and how these interrelate. They also learn to handle simple data and undertake economic analysis, evaluate information and discriminate between facts and value judgments in economic issues. A foundation for further studies, the syllabus also encourages a better understanding of the world in which learners live, and helps them play an active part in the decision-making process, whether as consumers, producers or citizens of the local, national and international community.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            )
        },
        {
            title: "ICT (0417)",
            content: "The Information Communication Technology syllabus encourages learners to develop lifelong skills, which will be useful to them in their work across the curriculum and prepare them for future employment. They will develop understanding of the implications of technology in society, including social, economic and ethical uses and awareness of the ways ICT can help in home, learning and work environments. The syllabus combines theoretical and practical studies focusing on the ability to use common software applications to solve problems, including word processors, spreadsheets, databases, interactive presentation software, web browsers and website design. Learners analyse, design, implement, test and evaluate ICT systems, ensuring that they are fit for purpose.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            )
        },
        {
            title: "Global Perspectives (0457)",
            content: "Global Perspectives is a cross-curricular and skills-based subject which develops critical thinking skills and global awareness; promotes internationalism and encourages students to be open-minded individuals through activities and strategies like team work, presentations, projects, and working with other learners. Students discuss contemporary global issues such as poverty, global warming, and peace and conflict in the world.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        },
        {
            title: "Foreign Language Mandarin Chinese (0547)",
            content: "This syllabus is designed for learners who are learning Mandarin Chinese as a foreign language. The aim is to develop an ability to use the language effectively for practical communication. The course is based on the linked language skills of listening, reading, speaking and writing, and these are built on as learners progress through their studies.\n\nThe syllabus also aims to offer insights into the culture of countries where Mandarin Chinese is spoken, thus encouraging positive attitudes towards language learning and towards speakers of other languages.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
            )
        },
        {
            title: "Physical Education",
            content: "Physical Education encourages students to participate in physical and sports activities within and beyond the school. Students learn to develop competency in a wide range of physical activities. The course also aims to build students’ teamwork, self-confidence and competitive skills.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            )
        }
    ];

    return (
        <section className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                <h2 className="text-3xl font-bold text-center text-brand-core mb-12">
                    Subject Details
                </h2>

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

                            {/* Content */}
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
