import React from 'react'

function SecondarySubjectsTable() {
    const subjects = [
        { no: 1, name: "English Language A", periods: 8 },
        { no: 2, name: "Mathematics", periods: 6 },
        { no: 3, name: "Science", periods: 4 },
        { no: 4, name: "Geography", periods: 2 },
        { no: 5, name: "History", periods: 1 },
        { no: 6, name: "Myanmar Culture", periods: 5 },
        { no: 7, name: "Art", periods: 1 },
        { no: 8, name: "ICT", periods: 2 },
        { no: 9, name: "Music / Elective Language", periods: 2 },
        { no: 10, name: "PE", periods: 2 },
        { no: 11, name: "Etiquette", periods: 1 },
        { no: 12, name: "Myanmar History/Geography", periods: 2 }
    ]

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Secondary School (Year 7 – 9)
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
                        Students are assessed through two rigorous testing options: Cambridge International Secondary 1 Checkpoint and yearly progression tests.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mb-8 bg-gray-50 dark:bg-neutral-900/60 border border-gray-200 dark:border-brand-core/20 rounded-2xl p-6">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                            <span>A variety of teaching techniques are employed to ensure that instruction is meaningful, effective, and relevant to the diversity of the developmental needs of this age group.</span>
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                            <span>Students are involved in more structured activities like projects, presentations, experiments, essays, debates, Olympiad studies, research papers, and inter-school competitions in various fields such as math, science, sports, English language, and art.</span>
                        </li>
                        <li className="flex items-start text-gray-700 dark:text-gray-300">
                            <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                            <span>Students are encouraged to take part in community service activities such as visiting homes for the elderly and/or orphanages.</span>
                        </li>
                    </ul>
                </div>

                {/* Table Card */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-core/10">

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-brand-core text-white">
                                    <th className="px-6 py-5 text-center font-semibold text-sm uppercase tracking-wider w-20">
                                        No
                                    </th>
                                    <th className="px-6 py-5 font-semibold text-sm uppercase tracking-wider">
                                        Subject Name
                                    </th>
                                    <th className="px-6 py-5 text-center font-semibold text-sm uppercase tracking-wider w-40">
                                        Periods / Week
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {subjects.map((item, index) => (
                                    <tr
                                        key={item.no}
                                        className={`
                                            transition-colors duration-200 hover:bg-blue-50/50 dark:hover:bg-neutral-800
                                            ${index % 2 === 0 ? 'bg-white dark:bg-neutral-900' : 'bg-gray-50/50 dark:bg-neutral-900/50'}
                                        `}
                                    >
                                        <td className="px-6 py-4 text-center text-gray-400 dark:text-gray-500 font-mono text-sm">
                                            {String(item.no).padStart(2, '0')}
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium whitespace-pre-line leading-relaxed">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-brand-core/20 text-brand-core font-bold text-sm shadow-sm">
                                                {item.periods}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SecondarySubjectsTable
