import React, { useState } from 'react';

// --- Types & Interfaces ---

interface AdmissionContent {
    intro: string;
    section1: string; // Age placement
    section2: string; // Download form...
    section3: string; // Contact school fee...
    listTitle: string; // Required docs title
    listItems: string[]; // List of docs
    section4: string; // Assessment...
    section5: string; // Decision...
    section6: string; // Payment...
    contactText: string;
}

type TabType = 'English' | 'Unicode' | 'Zawgyi';

// --- Data Content ---

const content: Record<TabType, AdmissionContent> = {
    English: {
        intro: "Thank you for considering NISA for your child’s education. We are excited to guide you through the admissions process and look forward to welcoming you to our school.",
        section1: "Students applying from Kindergarten to Secondary will be placed based on their age and results from a placement test. .",
        section2: "They will be assigned to the appropriate year level according to these factors",
        section3: "To begin, please complete the application form and include the required documents along with a one-time, non-refundable application fee.",
        listTitle: "The required documents include",
        listItems: [
            "Previous scholastic records from the last school attended",
            "A recommendation letter from the last school attended is needed.",
            "Proof of date of birth (ID card, passport copy if applicable)",
            "2 passport sized photographs",
            "Child’s health record"
        ],
        section4: "After you submit your application, we will arrange a parent meeting and child assessment. ",
        section5: " The Admissions Committee will review your application and notify you of the decision.",
        section6: " If a place is offered, you will be required to sign the Payment and Refund policy and pay the registration fee by the specified deadline.",
        contactText: "For more information, please email us or call our admissions office at +95 9882266358, +95 9895095080, or +95 9428460373."
    },
    // REPLACE UNICODE HERE
    Unicode: {
        intro: "NISA ကို သင့်၏ကလေး၏ပညာရေးအတွက် ရွေးချယ်ရန်အတွက် ကျေးဇူးတင်ပါသည်။ ",
        section1: "ကျောင်းသို့ ဝင်ရောက်ခြင်းလုပ်ငန်းစဉ်အတွင်း မိတ်ဆွေကို ညွှန်ကြားပေးရန် အလွန်ဝမ်းမြောက်မိပါသည်။",
        section2: "ကလေးသူငယ်များမှ မူကြိုမှ တက်ရောက်နိုင်မည့် တန်းအထိ အသက်နှင့် နေရာချထားမှု စစ်ဆေးပွဲရလာဒ်ပေါ် မူတည်၍ တန်းခွဲသတ်မှတ်ပေးမည်ဖြစ်သည်။",
        section3: "စတင်ရန်၊ လျှောက်လွှာဖောင်ကို ဖြည့်စွက်ပြီး လိုအပ်သောစာရွက်စာတမ်းများနှင့် အတူ တစ်ကြိမ်သာပေးသွင်းရမည့်၊ ပြန်မပေးသည့် လျှောက်လွှာကြေးကို ပေးပို့ပါ။",
        listTitle: "လိုအပ်သောစာရွက်စာတမ်းများမှာ –",
        listItems: [
            "ယခင်တက္ကသိုလ် သို့မဟုတ် ကျောင်းမှ သင်တန်းရလာဒ်များ",
            "ယခင်တက္ကသိုလ် သို့မဟုတ် ကျောင်းမှ အကြံပြုစာ",
            "မွေးသက္ကရာဇ် အထောက်အထား (မှတ်ပုံတင်ကတ်၊ ပါစပို့ မိတ္တူ ထည့်သွင်းပါ)",
            "ပတ်စ်ပို့အရွယ် အပြုံးဓာတ်ပုံ ၂ ပုံ",
            "ကလေးသူငယ်၏ ကျန်းမာရေးမှတ်တမ်း"
        ],
        section4: "လျှောက်လွှာကို တင်ပြပြီးနောက်၊ မိဘ တွေ့ဆုံပွဲနှင့် ကလေး စမ်းသပ်ခြင်း စီစဉ်ပေးမည်ဖြစ်သည်။ ",
        section5: "ဝင်ခွင့်ကော်မတီ သည် လျှောက်လွှာကို သုံးသပ်ပြီး ဆုံးဖြတ်ချက်ကို အသိပေးပါမည်။",
        section6: "တက်ရောက်ခွင့် ရရှိပါက ငွေပေးချေမှုနှင့် ပြန်အမ်းမှု မူဝါဒ ကို လက်မှတ်ရေးထိုးရမည်ဖြစ်ပြီး သတ်မှတ်ချိန်အတွင်း မှတ်ပုံတင်ကြေး ကို ပေးချေရန် လိုအပ်ပါသည်။",
        contactText: "အသေးစိတ်အချက်အလက်များအတွက် ကျွန်ုပ်တို့ထံ အီးမေးလ် ပေးပို့ရန် သို့မဟုတ် ဝင်ခွင့်ဌာနကို ဖုန်းခေါ်ဆိုပါ။ +95 9882266358, +95 9895095080, +95 9428460373"
    },
    // REPLACE ZAWGYI HERE
    Zawgyi: {
        intro: "NISA ကို သင့်၏ကလေး၏ပညာရေးအတွက် ရွေးချယ်ရန်အတွက် ကျေးဇူးတင်ပါသည်။ ",
        section1: "ကျောင်းသို့ ဝင်ရောက်ခြင်းလုပ်ငန်းစဉ်အတွင်း မိတ်ဆွေကို ညွှန်ကြားပေးရန် အလွန်ဝမ်းမြောက်မိပါသည်။",
        section2: "ကလေးသူငယ်များမှ မူကြိုမှ တက်ရောက်နိုင်မည့် တန်းအထိ အသက်နှင့် နေရာချထားမှု စစ်ဆေးပွဲရလာဒ်ပေါ် မူတည်၍ တန်းခွဲသတ်မှတ်ပေးမည်ဖြစ်သည်။",
        section3: "စတင်ရန်၊ လျှောက်လွှာဖောင်ကို ဖြည့်စွက်ပြီး လိုအပ်သောစာရွက်စာတမ်းများနှင့် အတူ တစ်ကြိမ်သာပေးသွင်းရမည့်၊ ပြန်မပေးသည့် လျှောက်လွှာကြေးကို ပေးပို့ပါ။",
        listTitle: "လိုအပ်သောစာရွက်စာတမ်းများမှာ –",
        listItems: [
            "ယခင်တက္ကသိုလ် သို့မဟုတ် ကျောင်းမှ သင်တန်းရလာဒ်များ",
            "ယခင်တက္ကသိုလ် သို့မဟုတ် ကျောင်းမှ အကြံပြုစာ",
            "မွေးသက္ကရာဇ် အထောက်အထား (မှတ်ပုံတင်ကတ်၊ ပါစပို့ မိတ္တူ ထည့်သွင်းပါ)",
            "ပတ်စ်ပို့အရွယ် အပြုံးဓာတ်ပုံ ၂ ပုံ",
            "ကလေးသူငယ်၏ ကျန်းမာရေးမှတ်တမ်း"
        ],
        section4: "လျှောက်လွှာကို တင်ပြပြီးနောက်၊ မိဘ တွေ့ဆုံပွဲနှင့် ကလေး စမ်းသပ်ခြင်း စီစဉ်ပေးမည်ဖြစ်သည်။ ",
        section5: "ဝင်ခွင့်ကော်မတီ သည် လျှောက်လွှာကို သုံးသပ်ပြီး ဆုံးဖြတ်ချက်ကို အသိပေးပါမည်။",
        section6: "တက်ရောက်ခွင့် ရရှိပါက ငွေပေးချေမှုနှင့် ပြန်အမ်းမှု မူဝါဒ ကို လက်မှတ်ရေးထိုးရမည်ဖြစ်ပြီး သတ်မှတ်ချိန်အတွင်း မှတ်ပုံတင်ကြေး ကို ပေးချေရန် လိုအပ်ပါသည်။",
        contactText: "အသေးစိတ်အချက်အလက်များအတွက် ကျွန်ုပ်တို့ထံ အီးမေးလ် ပေးပို့ရန် သို့မဟုတ် ဝင်ခွင့်ဌာနကို ဖုန်းခေါ်ဆိုပါ။ +95 9882266358, +95 9895095080, +95 9428460373"
    }


};

// --- Component ---

const AdmissionTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('English');
    const data = content[activeTab];
    const isMyanmar = activeTab === 'Zawgyi' || activeTab === 'Unicode';

    return (
        <section className="py-16 bg-gray-50 dark:bg-black">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-core mb-4">
                        Admissions Process
                    </h2>
                    <div className="w-20 h-1 bg-brand-core mx-auto rounded-full"></div>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex bg-white dark:bg-neutral-900 rounded-lg p-1 shadow-sm border border-gray-200 dark:border-neutral-800">
                        {(Object.keys(content) as TabType[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    px-6 py-2 rounded-md text-sm font-medium transition-all duration-200
                                    ${activeTab === tab
                                        ? 'bg-brand-core text-white shadow-md'
                                        : 'text-gray-500 hover:text-brand-core dark:text-gray-400 dark:hover:text-white'
                                    }
                                    ${tab === 'Zawgyi' ? 'font-zawgyi' : ''} 
                                `}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Card */}
                <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-100 dark:border-brand-core/10 overflow-hidden">

                    {/* Intro */}
                    <div className="bg-brand-core/5 dark:bg-brand-core/10 p-8 border-b border-brand-core/10">
                        <p className={`text-lg text-brand-core dark:text-brand-core font-medium text-center leading-relaxed ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>
                            {data.intro}
                        </p>
                    </div>

                    <div className={`p-8 md:p-10 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>

                        {/* Section 1 */}
                        <p>{data.section1}</p>

                        {/* Section 2 - Includes Email */}
                        <div className="bg-gray-50 dark:bg-neutral-800 p-4 rounded-lg border-l-4 border-brand-core">
                            {data.section2.split('admission@nisa.edu.mm')[0]}
                            <a href="mailto:admission@nisa.edu.mm" className="text-brand-core font-bold hover:underline">
                                admission@nisa.edu.mm
                            </a>
                        </div>

                        {/* Section 3 */}
                        <p>{data.section3}</p>

                        {/* Document List */}
                        <div className="pl-2 md:pl-4">
                            <p className="font-bold text-gray-900 dark:text-white mb-3">
                                {data.listTitle}
                            </p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-brand-core">
                                {data.listItems.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <p>{data.section4}</p>

                        {/* Section 5 */}
                        <p>{data.section5}</p>

                        {/* Section 6 */}
                        <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg text-blue-800 dark:text-blue-200">
                            {data.section6}
                        </div>
                    </div>

                    {/* Footer Contact */}
                    <div className="bg-gray-50 dark:bg-neutral-950 p-6 md:p-8 text-center border-t border-gray-100 dark:border-neutral-800">
                        <p className={`text-gray-600 dark:text-gray-400 font-medium ${activeTab === 'Zawgyi' ? 'font-zawgyi' : ''}`}>
                            {data.contactText}
                        </p>
                    </div>

                </div>
            </div>
            {/* <div className='text-center mt-10'>
                <a href="/pdf/MISA-Admission-Form.pdf" target='_blank' className="rounded-full cursor-pointer bg-brand-core px-8 py-3 text-sm font-bold text-white hover:text-black transition hover:bg-brand">
                    Download Application Form
                </a>
            </div> */}
        </section>
    );
}

export default AdmissionTabs;