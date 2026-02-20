import React from 'react'

function SubjectSelectionTable() {
    const compulsory = [
        { subject: "First Language English", periods: 5 },
        { subject: "Mathematics", periods: 5 },
        { subject: "Global Perspectives", periods: 2 },
        { subject: "Physical Education", periods: 2 },
        { subject: "Homeroom", periods: 1 },
        { subject: "Myanmar Language", periods: 5 },
        { subject: "Myanmar Geography", periods: 1 },
        { subject: "Myanmar History", periods: 1 }
    ]

    const electives = [
        { subject: "Physics", periods: 4 },
        { subject: "Economics", periods: null },
        { subject: "Chemistry", periods: 4 },
        { subject: "Business", periods: null },
        { subject: "Additional Mathematics", periods: 4 },
        { subject: "Biology", periods: null },
        { subject: "ICT", periods: 4 },
        { subject: "Chinese", periods: 4 }
    ]

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Overview of the Subject Structure
                    </h2>
                    <div className="w-24 h-1 bg-brand-core mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        IGCSE (Year 10 and 11) Courses at NISA
                    </p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-core/10">
                        <div className="px-6 py-5 bg-brand-core text-white">
                            <h3 className="font-semibold uppercase tracking-wider text-sm">
                                Compulsory Subjects
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-neutral-950 text-gray-600 dark:text-gray-300">
                                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider w-2/3">
                                            Subject
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-center w-1/3">
                                            Periods per Week
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                    {compulsory.map((item, index) => (
                                        <tr key={index} className="bg-white dark:bg-neutral-900">
                                            <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
                                                {item.subject}
                                            </td>
                                            <td className="px-6 py-4 text-center font-bold text-brand-core">
                                                {item.periods}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50 dark:bg-neutral-950">
                                        <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">
                                            Total Periods
                                        </td>
                                        <td className="px-6 py-4 text-center font-bold text-brand-core">
                                            22
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-900 shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-brand-core/10">
                        <div className="px-6 py-5 bg-brand-core text-white">
                            <h3 className="font-semibold uppercase tracking-wider text-sm">
                                Elective Subjects
                            </h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 dark:bg-neutral-950 text-gray-600 dark:text-gray-300">
                                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider w-2/3">
                                            Subject
                                        </th>
                                        <th className="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-center w-1/3">
                                            Periods per Week
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                    {electives.map((item, index) => (
                                        <tr key={index} className="bg-white dark:bg-neutral-900">
                                            <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
                                                {item.subject}
                                            </td>
                                            <td className="px-6 py-4 text-center font-bold text-brand-core">
                                                {item.periods ?? "—"}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gray-50 dark:bg-neutral-950">
                                        <td className="px-6 py-4 font-semibold text-gray-700 dark:text-gray-300">
                                            Total Periods
                                        </td>
                                        <td className="px-6 py-4 text-center font-bold text-brand-core">
                                            20
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SubjectSelectionTable
