import React from 'react'

function PrimarySubjectsTable() {
    // Exact data preserved from your list
    const subjects = [
        { no: 1, name: "English Language A\nEnglish Language B*", periods: 10 },
        { no: 2, name: "Mathematics", periods: 5 },
        { no: 3, name: "Science", periods: 3 },
        { no: 4, name: "Social Studies", periods: 2 },
        { no: 5, name: "Myanmar Culture", periods: 3 },
        { no: 6, name: "Arts", periods: 2 },
        { no: 7, name: "Computing", periods: 2 },
        { no: 8, name: "Music", periods: 2 },
        { no: 9, name: "Physical Education", periods: 2 },
        { no: 10, name: "Etiquette", periods: 1 },
    ];

    return (
        <section className="py-12 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-brand-core mb-4">
                        Primary School (Year 2 – 6)
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Below is an overview of the subjects offered in Primary School:
                    </p>
                </div>

                {/* Table Section */}
                <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-md border border-gray-200 dark:border-brand-core/20">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-brand-core text-white">
                                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider w-16 text-center">No</th>
                                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider border-l border-white/20">Subject Name</th>
                                    <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-center border-l border-white/20">Number of Periods</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-brand-core/20 bg-gray-50 dark:bg-neutral-950">
                                {subjects.map((item) => (
                                    <tr
                                        key={item.no}
                                        className="hover:bg-white dark:hover:bg-neutral-900 transition-colors duration-150"
                                    >
                                        <td className="px-6 py-4 text-center font-medium text-gray-500 dark:text-gray-400">
                                            {item.no}
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium whitespace-pre-line">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 text-center font-bold text-brand-core">
                                            {item.periods}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer Note inside the card structure */}
                    <div className="bg-gray-100 dark:bg-neutral-900 px-6 py-3 border-t border-gray-200 dark:border-brand-core/20">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            * May not be offered on all campuses
                        </p>
                    </div>
                </div>

                {/* Bottom Information Box */}
                <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 dark:bg-neutral-900/50 border border-blue-100 dark:border-brand-core/30 rounded-lg flex items-start gap-4">
                    <div className="text-brand-core mt-1 shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <p className="text-gray-800 dark:text-gray-300">
                        We offer the Cambridge International Primary curriculum framework in English, mathematics, and science from Year 2 to Year 6.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default PrimarySubjectsTable