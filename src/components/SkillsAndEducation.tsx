import { motion } from 'framer-motion';

export default function SkillsAndEducation() {
    const skillCategories = [
        {
            title: "Technical Leadership",
            skills: ["Architecture Reviews", "Engineering Standards", "TDD & Linting", "CI/CD Pipeline Design", "Mentorship & Onboarding", "Agile / Scrum Delivery"]
        },
        {
            title: "Frontend Architecture",
            skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "Redux-Saga", "Styled Components", "Micro Frontends & Module Federation", "Gatsby", "Design Systems", "Accessibility (WCAG 2.1/ARIA)"]
        },
        {
            title: "Backend & APIs",
            skills: ["Node.js", "Express.js", "REST APIs", "GraphQL / Apollo", "BFF Middleware", "Microservices", "API Design & Contracts"]
        },
        {
            title: "Data & Cloud Infrastructure",
            skills: ["MongoDB", "Firebase / Firestore", "Redis", "AWS (Lambda, S3, CloudFront, EC2, IAM, Lambda@Edge)", "Docker", "CI/CD (GitHub Actions, Jenkins)"]
        },
        {
            title: "AI Integration & GenAI",
            skills: ["Generative AI & LLMs in Production", "OpenAI APIs", "Anthropic APIs", "RAG Pipelines", "LangChain", "Prompt Engineering", "AI-Assisted Development"]
        },
        {
            title: "Quality & Performance",
            skills: ["Jest", "Cypress", "TDD", "Core Web Vitals Optimization", "Webpack / Vite Code-Splitting", "D3.js Data Visualization"]
        }
    ];

    const certifications = [
        "Programming in HTML5 with JavaScript and CSS3",
        "Styled-Components",
        "CutShort Certified Javascript - Advanced",
        "Redux-Saga",
        "AI Tools Workshop"
    ];

    const languages = [
        { lang: "Hindi", proficiency: "Native or Bilingual" },
        { lang: "English", proficiency: "Full Professional" },
        { lang: "Punjabi", proficiency: "Native or Bilingual" },
        { lang: "French", proficiency: "Professional Working" }
    ];

    const education = [
        {
            degree: "Bachelor of Technology",
            institution: "Chandigarh Group of Colleges",
            period: "August 2013 – May 2017"
        },
        {
            degree: "High Schooling",
            institution: "Kendriya Vidyalaya",
            period: "2003 – 2013"
        }
    ];

    return (
        <section className="relative z-20 w-full py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[20%] w-[700px] h-[700px] rounded-full bg-blue-900/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-indigo-900/10 blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-7xl z-10"
            >
                {/* Header */}
                <div className="mb-16">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Technical Foundations</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Skills & Background</h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-mono text-gray-300 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education, Certifications & Languages Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Education Card */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-cyan-400" />
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="border-l-2 border-cyan-500/40 pl-4 py-1">
                                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                                    <p className="text-sm text-gray-300">{edu.institution}</p>
                                    <span className="text-xs font-mono text-cyan-400 mt-1 block">{edu.period}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications Card */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-purple-400" />
                            Certifications
                        </h3>
                        <ul className="space-y-3">
                            {certifications.map((cert, idx) => (
                                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2.5">
                                    <span className="text-purple-400 font-bold">•</span>
                                    <span>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Languages Card */}
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            Languages
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {languages.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-black/20 border border-white/5">
                                    <span className="text-sm font-semibold text-white">{item.lang}</span>
                                    <span className="text-xs font-mono text-emerald-400">{item.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
