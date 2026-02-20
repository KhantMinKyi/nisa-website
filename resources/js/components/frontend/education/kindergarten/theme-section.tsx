import React from 'react'

const ThemeSection = () => {
    const developmentAreas = [
        "Cognitive or intellectual development",
        "Communication, language and literacy development",
        "Persona, social and emotional development",
        "Physical development",
        "Creative development"
    ]

    const levelPrograms = [
        {
            level: "Nursery (3 to 4 years old)",
            items: [
                "Scholastic, Early Childhood Program",
                "Scholastic Publisher Inc., USA"
            ]
        },
        {
            level: "Pre-KG (4 to 5 years old)",
            items: [
                "Saxon Early Learning",
                "Saxon Publishers Inc., USA",
                "Macmillan/ McGrow-Hill, Inc. USA (Math)",
                "Oxford Wonder World (Phonics)",
                "Oxford University Press, UK"
            ]
        },
        {
            level: "KG (5 to 6 years old)",
            items: [
                "DLM Early childhood Express",
                "SRA / Mcgrow-Hill., Inc. USA",
                "Jolly Phonics",
                "Jolly Learning LTD, UK",
                "Cambridge Primary Mathematics",
                "Cambridge Primary English",
                "Cambridge Primary Science"
            ]
        }
    ]

    const learningCenters = [
        "Learning centers help children to make choices.",
        "Focus on particular activities.",
        "Giving them the freedom to try these activities on their own.",
        "When children are actively involved in their own learning, they tend to find such hands-on experiences meaningful and relevant in their own lives."
    ]

    const morningCircle = [
        "Attendance through song and game.",
        "Kids learn math",
        "Calendar",
        "Talking about date, day, month & year",
        "Counting dates in ordinal numbers",
        "Saying “Today is the first of December 2019, Monday”.",
        "Talking about tomorrow and yesterday",
        "Saying “Today is Monday",
        "Yesterday was Sunday”",
        "Tomorrow will be Tuesday",
        "Checking weather",
        "Review about previous lessons or talk about current lessons"
    ]

    const coSubjects = [
        {
            title: "Science",
            body: "Young children are natural scientists. They are eager to discover all they can about the world in which they live. In kindergarten children participate in simple investigations that help them begin to develop the skills of asking questions, and making informed decisions. Using their own senses and common tools, students make observations and collect information. Through these processes, children about their world. The meaningful experiences increase children’s understanding of the natural world, living things, cycles, change, and patterns."
        },
        {
            title: "Fine Arts",
            body: "Through art, children learn to express their thoughts, feelings, and ideas in symbolic ways."
        },
        {
            title: "Social Studies",
            body: "Social studies learn them to share, cooperate, and participate with others."
        },
        {
            title: "Health or Safety",
            body: "Lessons in health or safety help children make life choices that will enhance their physical well-being."
        },
        {
            title: "Physical Development",
            body: "Specially designed movement activities help children practice and improve their gross and fine motor skills as well as maintain personal space."
        },
        {
            title: "Personal and Social Development",
            body: "Interwoven throughout the entire program, these activities enable children to develop a sense of who they are and their own capabilities to establish positive relationships with others."
        }
    ]

    const moralReasons = [
        "Good moral is a foundation of a strong nation.",
        "At the very young age of a child, it should be instilled the importance of respect towards others.",
        "The children of today are the leaders of the future. Therefore, they should learn the values that leaders must possess.",
        "This is the basic education but plays the vital rule in child’s development."
    ]

    return (
        <section className="py-10 bg-white dark:bg-black">
            <hr className="my-4 w-1/2 mx-auto border-gray-300 dark:border-gray-700" />

            <div className="text-center mb-10">
                <h2 className="text-3xl my-4 font-bold text-brand-core">
                    Curriculum Overview
                </h2>
                <p className="max-w-4xl mx-auto text-gray-600 dark:text-gray-300 px-4">
                    Our curriculum is a holistic, child-centered program that natures each child by offering carefully selected and carefully sequenced learning experiences. It focuses on major areas of the development of children.
                </p>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-4">
                            Development Areas
                        </h3>
                        <ul className="space-y-3">
                            {developmentAreas.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-gray-600 dark:text-gray-300">
                            At the same time, it natures the natural curiosity and sense of self that can serve as the foundation for a lifetime of learning.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-brand-core/10 via-white to-white dark:from-brand-core/15 dark:via-neutral-950 dark:to-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Lesson Format
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            The lesson format is designed to present information in a way that makes it easy for children to learn.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-3">
                            Each lesson contains the most relevant subjects, presented as miniature lessons.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-3">
                            With our curriculum children develop concrete skills through experiences with music and movement, art, storytelling, and teacher directed lessons that, in addition to skills development, emphasize practice and reflection.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-brand-core mb-4 text-center">
                        Curriculum Levels
                    </h3>
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
                        Below is an overview of the curriculum and subjects offered in Nursery, Pre-Kg and Kg Levels.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {levelPrograms.map((level, index) => (
                            <div key={index} className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-brand-core mb-4">
                                    {level.level}
                                </h4>
                                <ul className="space-y-3">
                                    {level.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                                            <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Learning Centers
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Why use learning centers in the class room?
                        </p>
                        <ul className="space-y-3">
                            {learningCenters.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Morning Circle
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            This is a time for togetherness and a positive, engaging way to start each day.
                        </p>
                        <ul className="space-y-3">
                            {morningCircle.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Music And Movement
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Children learn to sing, play simple instruments, listen, and respond to music. They also begin to create and recreate moods and experiences in order to express their feelings through increasingly coordinated movement.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Outdoor Play
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Learning takes place outdoors as well as indoors. In an outdoor learning area children can develop motor skills, language, social skills, self-confidence, group camaraderie, and can have fun.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Closing Circle
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Reflect/Access questions help children think about possible applications of what they have learnt in the lesson.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-brand-core mb-6 text-center">
                        Co-Subjects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {coSubjects.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-brand-core mb-3">
                                    {item.title}
                                </h4>
                                <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Special Activities
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Technology
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                            Computer activities help children build not only their technology skills, but also early language, math and other skills.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Moral
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Moral is one of the major aspects in learning that plays a very important rule in child’s development. It caters the significant character building that each learner should know to grow upright with dignity.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-3">
                            Why teaching Moral?
                        </p>
                        <ul className="space-y-3">
                            {moralReasons.map((item, index) => (
                                <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                    <span className="mr-3 mt-1.5 w-2 h-2 bg-brand-core rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-neutral-950 border border-gray-200 dark:border-brand-core/30 rounded-2xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                            Culture
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Our Kindergarten follows an international curriculum; however, it is important for Myanmar students to understand their culture to be able to make connections to other cultures. While it helps non-local students to adapt to our culture, and address the challenges that they can face in their daily life.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-3">
                            Culture is offered in Pre-kg and Kg level
                        </p>
                    </div>
                </div>

                <div className="mt-12 bg-gray-50 dark:bg-neutral-900 rounded-2xl border border-gray-100 dark:border-neutral-800 p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-brand-core mb-3">
                        Sand and Water
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                        Experiences in the sand and water area have a sensory motor quality, which is a unique attribute that allow children to release tension in a non-threatening environment and help them develop new skills, increasing their confidence. Sand and water experiences will also help children grow in all areas of development.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ThemeSection
