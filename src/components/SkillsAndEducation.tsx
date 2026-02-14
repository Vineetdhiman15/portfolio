import { motion } from 'framer-motion';

export default function SkillsAndEducation() {
    const skillCategories = [
        {
            title: "Frontend Architecture",
            skills: ["React", "Next.js", "TypeScript", "JavaScript", "Micro Frontends", "Gatsby"]
        },
        {
            title: "State & Data",
            skills: ["Redux", "Redux-Saga", "Redux Toolkit", "GraphQL", "REST APIs", "Node.js"]
        },
        {
            title: "UI Engineering",
            skills: ["HTML5", "CSS3/SCSS", "Styled Components", "Ant Design", "Material UI", "Tailwind CSS"]
        },
        {
            title: "Testing & Quality",
            skills: ["Jest", "React Testing Library", "Cypress", "TDD", "Unit Testing", "Code Review"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Webpack", "CI/CD", "Jenkins", "Git", "Jira", "Confluence"]
        },
        {
            title: "Design & Visualization",
            skills: ["D3.js", "Storybook", "Figma", "Zeplin", "Design Systems"]
        },
        {
            title: "Performance & Security",
            skills: ["Web Vitals", "Accessibility (a11y)", "Front-end Security", "Optimization", "A/B Testing"]
        },
        {
            title: "Modern Tech",
            skills: ["AI Tools", "LLMs", "CMS (Contentful)", "Optimizely", "Internationalization"]
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

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {/* Education Section */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Education</h2>
                        <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-colors">
                            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology</h3>
                            <p className="text-gray-400 mb-1">Chandigarh Group of Colleges</p>
                            <span className="text-sm font-mono text-cyan-400">Aug 2013 – May 2017</span>
                        </div>
                    </div>

                    {/* Intro to Skills */}
                    <div className="lg:col-span-2 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Technical Expertise</h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I specialize in building scalable, high-performance frontend systems. My expertise spans the entire development lifecycle, from architectural design and UI implementation to testing, optimization, and deployment.
                        </p>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm text-gray-400 bg-black/20 px-2 py-1 rounded-md border border-white/5"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}
