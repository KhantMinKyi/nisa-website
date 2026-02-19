import React from 'react'

const Hero = () => {
    return (
        <div className=' bg-gray-50 dark:bg-secondary-brand-dark w-full flex flex-col justify-center items-center pt-10 pb-24 md:pt-20 md:py-30 sm:text-center text-justify'>
            <span className='text-xl text-gray-400'>Naypyitaw Internatinal School of Acumen</span>
            <h2 className='mb-6 mt-2 text-4xl md:text-6xl text-brand-core dark:text-brand font-bold '>Welcome To NISA</h2>
            <p className='max-w-3xl sm:text-center leading-10 font-normal p-4'>Nay Pyi Taw International School of Acumen is a comprehensive K-12 private international school located in Nay Pyi Taw, Myanmar. Offering the Cambridge Curriculum from Year 2 to Year 11, the school provides a high-quality education for both primary and high school students. Established in 2014, it celebrated the graduation of its first IGCSE class in 2023. The school is officially registered with Cambridge Assessment International Education as a Cambridge International School, ensuring globally recognized academic standards and excellence.
            </p>
        </div>
    )
}

export default Hero