import React from 'react'

function PrimarySubjectsTable() {
    const subjects = [
        { no: 1, name: "English Language A", periods: 9 },
        { no: 2, name: "Mathematics", periods: 5 },
        { no: 3, name: "Science", periods: 3 },
        { no: 4, name: "Computing", periods: 2 },
        { no: 5, name: "Geography", periods: 2 },
        { no: 6, name: "Physical Education", periods: 2 },
        { no: 7, name: "Music", periods: 2 },
        { no: 8, name: "Art", periods: 2 },
        { no: 9, name: "Myanmar Language", periods: 5 },
        { no: 10, name: "Social Studies (Myanmar)", periods: 1 },
        { no: 11, name: "Homeroom", periods: 1 }
    ]

    const totalPeriods = 34

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
                            <tfoot>
                                <tr className="bg-white dark:bg-neutral-950">
                                    <td className="px-6 py-4 text-center font-semibold text-gray-700 dark:text-gray-300">
                                        &nbsp;
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-800 dark:text-gray-200">
                                        Total Number of Periods
                                    </td>
                                    <td className="px-6 py-4 text-center font-bold text-brand-core">
                                        {totalPeriods}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    {/* Footer Note inside the card structure */}
                    <div className="bg-gray-100 dark:bg-neutral-900 px-6 py-3 border-t border-gray-200 dark:border-brand-core/20">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            *** May not be offered on all campuses
                        </p>
                    </div>
                </div>

                {/* Bottom Information Box */}
                <div className="max-w-4xl mx-auto mt-8 p-6 bg-blue-50 dark:bg-neutral-900/50 border border-blue-100 dark:border-brand-core/30 rounded-lg">
                    <p className="text-gray-800 dark:text-gray-300">
                        Internationally recognized Cambridge Primary Curriculum and assessments which includes Cambridge International Primary Checkpoint and yearly progression tests from Year 3 to Year 6.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default PrimarySubjectsTable
