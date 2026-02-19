import React from 'react'

function PrimarySchoolBanner() {
    // Exact data list from your request
    const achievementPoints = [
        "Internationally recognized Cambridge Primary Curriculum and assessments which includes Cambridge International Primary Checkpoint and yearly progression tests from Year 3 to Year 6.",
        "Aiming to produce confident and competent learners, who are able to communicate effectively.",
        "Excursions and field trips broaden the students’ horizons.",
        "Projects and activities that encourage students to explore, inquire, question, and apply what they know.",
        "Working in an environment marked by encouragement.",
        "Encouraging students to read a wide range of books",
        "Teachers create a stimulating learning environment by displaying students’ work.",
        "Developing students’ 21st Century skills such as critical thinking, communication, collaboration, problem-solving, leadership and etc."
    ];

    return (
        <div className="bg-white dark:bg-black py-12">
            <div className="container mx-auto px-4">

                {/* Intro Section - Text preserved exactly */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-core mb-6">
                        Primary School Curriculum
                    </h1>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                        is engineered for the holistic development of all its students. The school provides the highest standard of individualized education by fostering the love of learning in the children. Teachers aim to enhance each child’s self-confidence and self-esteem while, at the same time, challenging them academically. This is achieved by:
                    </p>
                </div>

                {/* Grid Section - 8 Exact Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievementPoints.map((point, index) => (
                        <div
                            key={index}
                            className="  bg-gray-50 dark:bg-neutral-950 p-6 rounded-xl border border-gray-100 dark:border-brand-core/20 hover:border-brand-core hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Icon for visual consistency */}
                            <div className="w-10 h-10 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center text-brand-core shadow-sm mb-4 shrink-0">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            {/* Exact Text */}
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                                {point}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default PrimarySchoolBanner