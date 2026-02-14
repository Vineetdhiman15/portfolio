import Image from 'next/image';

export default function Experience() {
    const experiences = [
        {
            company: "Sberbank",
            role: "Lead Software Engineer",
            period: "Jan 2025 – Present",
            location: "Bengaluru, India",
            description: "Spearheaded development of scalable solutions for digital banking using React, TypeScript, Redux Toolkit, and Micro Frontends. Integrated GenAI and LLMs for intelligent chat interfaces, boosting engagement by 28%. Mentored developers and led architecture reviews.",
            logo: "/logos/sberbank.svg"
        },
        {
            company: "JPMorgan Chase & Co",
            role: "Software Engineer III",
            period: "Aug 2023 – Jan 2025",
            location: "Bengaluru, India",
            description: "Engineered next-gen commercial real estate solutions using Micro Frontends, React, and Redux-Saga. Crafted high-quality React components for the Salt Design System. Optimized UI performance and accessibility using Styled Components and WCAG 2.1 standards.",
            logo: "/logos/jpmorgan.svg"
        },
        {
            company: "Cimpress",
            role: "Senior Software Engineer",
            period: "Nov 2022 – Aug 2023",
            location: "Bengaluru, India",
            description: "Advanced the development of Drukwerkdeal, a major e-commerce platform. Leveraged React, Redux-Saga, and TypeScript to enhance design and functionality, resulting in a 10% increase in conversion rates. Mentored the front-end team and established coding standards.",
            logo: "/logos/cimpress.svg"
        },
        {
            company: "Publicis Sapient",
            role: "Senior Associate",
            period: "Jan 2021 – Nov 2022",
            location: "Gurugram, India",
            description: "Implemented Single Page Checkout and optimized cart modules, driving a 30% increase in traffic. Created a Customer Service Help Module and achieved 95% accessibility compliance using ARIA and React Testing Library within a 12-member agile team.",
            logo: "/logos/publicis.svg"
        },
        {
            company: "Globant",
            role: "UI Developer",
            period: "Sep 2020 – Dec 2020",
            location: "Pune, India",
            description: "Architected React-Redux state management for healthcare clients. Analyzed performance to achieve 40% faster load times and reduced bounce rates by 20%. Developed interactive D3.js data visualizations increasing session duration by 25%.",
            logo: "/logos/globant.svg"
        },
        {
            company: "Cognizant",
            role: "Front End Developer",
            period: "Feb 2018 – Aug 2020",
            location: "Pune, India",
            description: "Pioneered a responsive mobile-first approach using React and SCSS, boosting mobile traffic by 15%. Refactored legacy code to reduce bundle size by 30% and standardized deployment practices, cutting bugs by 20%.",
            logo: "/logos/cognizant.svg"
        }
    ];

    return (
        <section className="relative z-20 w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
            </div>

            <div className="relative w-full max-w-7xl z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-16 text-white tracking-tight">Professional Experience</h2>

                <div className="grid grid-cols-1 gap-8 w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col md:flex-row justify-between p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:border-white/30 hover:bg-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="z-10 md:w-1/3 mb-6 md:mb-0 flex flex-row gap-6 items-start">
                                {exp.logo && (
                                    <div className="w-20 h-20 bg-white rounded-full p-3 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-900/20 relative overflow-hidden">
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            fill
                                            className="object-contain p-3"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-cyan-400 mb-2 block uppercase tracking-wider">{exp.period}</span>
                                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-cyan-200 transition-colors">{exp.company}</h3>
                                    <p className="text-lg text-gray-300 font-medium">{exp.role}</p>
                                    <p className="text-sm text-gray-500 mt-1">{exp.location}</p>
                                </div>
                            </div>

                            <div className="z-10 md:w-2/3 md:pl-8 border-l border-white/10 md:border-l-1 border-t-0 md:border-t-0 border-l-0">
                                <p className="text-gray-300 text-base leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
