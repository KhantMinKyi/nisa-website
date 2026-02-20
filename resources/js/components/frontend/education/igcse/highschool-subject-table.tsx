import React from 'react'

function HighSchoolSubjectTable() {
    const compulsorySubjects = [
        "First Language English",
        "Mathematics",
        "Global Perspectives (Optional to sit for the Exam)"
    ]

    const electiveSubjects = [
        "Additional Mathematics",
        "Biology",
        "Physics",
        "Economics",
        "Chemistry",
        "Business studies",
        "Information & Communication Technology",
        "Chinese"
    ]

    const otherCompulsory = [
        "Homeroom (Character Education)",
        "Physical Education",
        "Myanmar Language",
        "Myanmar Geography & History"
    ]

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        IGCSE (Year 10 and 11) Courses at NISA
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        For IGCSE, Students take 6 compulsory subjects including three core subjects and 5 elective subjects.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl border border-gray-100 dark:border-brand-core/10 p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-4">
                            Compulsory Subjects
                        </h3>
                        <ul className="space-y-3">
                            {compulsorySubjects.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 shadow-lg rounded-2xl border border-gray-100 dark:border-brand-core/10 p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-4">
                            Electives
                        </h3>
                        <ul className="space-y-3">
                            {electiveSubjects.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-6 bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/10 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-4">
                        Other compulsory subjects (non-examined)
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {otherCompulsory.map((item, index) => (
                            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default HighSchoolSubjectTable
