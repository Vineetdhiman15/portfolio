import { motion } from 'framer-motion';

export default function About() {
    const highlights = [
        { title: "High-quality UI engineering", desc: "Pixel-perfect, responsive, accessible interfaces" },
        { title: "AI-augmented development", desc: "Faster iteration, smarter debugging, automated workflows" },
        { title: "Code Cleanup Specialist", desc: "Refactoring legacy or chaotic code into clean, scalable architecture" },
        { title: "Performance & optimization", desc: "Lighthouse, Core Web Vitals, bundle optimization" },
        { title: "Design-to-code excellence", desc: "Figma, Zeplin, component-driven development" },
        { title: "Scalable frontend systems", desc: "Design systems, reusable components, clean architecture" },
        { title: "Product mindset", desc: "Close collaboration with designers, PMs, backend & AI teams" },
        { title: "Startup speed + enterprise discipline", desc: "Rapid delivery with maintainable code" }
    ];

    return (
        <section className="relative z-20 w-full py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[100px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-7xl z-10"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-12 text-white tracking-tight text-center md:text-left">About Me</h2>

                <div className="flex flex-col md:flex-row gap-16">
                    {/* Left Column: Bio */}
                    <div className="md:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            I’m a <span className="text-cyan-400 font-semibold">Lead Software Engineer</span> with 8+ years of experience building fast, scalable, and visually polished web applications. I combine strong engineering expertise with a deep understanding of design, usability, performance, and modern AI-powered workflows.
                        </p>
                        <p>
                            I specialize in React, Next.js, TypeScript, JavaScript, D3.js, Redux, UI libraries (Ant Design, MUI), CSS/SCSS, Storybook, CI/CD, testing (Jest, React Testing Library, Cypress), GraphQL, and modern frontend architectures.
                        </p>
                        <p>
                            Beyond traditional frontend engineering, I work extensively with <span className="text-purple-400 font-semibold">AI tools</span> (LLMs, code copilots, automation workflows) to accelerate development, improve code quality, and enhance product intelligence.
                        </p>
                        <p>
                            I also position myself as a <span className="text-cyan-400 font-semibold">Code Cleanup Specialist</span>, refactoring messy, inconsistent, or legacy frontend codebases into clean, scalable, high-performance systems that teams actually enjoy working in.
                        </p>
                        <p className="pt-4 font-semibold text-white">
                            Tech Stack: React | Next.js | TypeScript | JavaScript | D3 | Redux | Node.js | GraphQL | CSS/SCSS | AI Tools
                        </p>
                    </div>

                    {/* Right Column: Key Highlights Grid */}
                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
