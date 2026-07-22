import { motion } from 'framer-motion';

export default function About() {
    const highlights = [
        { title: "Technical Leadership", desc: "Architecture & design reviews, TDD, CI/CD standards, mentoring 10+ engineers" },
        { title: "Frontend Architecture", desc: "React, Next.js, TypeScript, Redux Toolkit/Saga, Micro Frontends & Design Systems" },
        { title: "Backend & APIs", desc: "Node.js, Express.js, REST, GraphQL/Apollo, BFF middleware, Microservices" },
        { title: "Data & Cloud Infrastructure", desc: "AWS (CloudFront, Lambda@Edge, S3, EC2), Docker, Redis, MongoDB, Firestore" },
        { title: "AI Integration & GenAI", desc: "RAG pipelines, LangChain, OpenAI/Anthropic APIs, Prompt Engineering, LLMs in prod" },
        { title: "Quality & Optimization", desc: "Jest, Cypress, TDD, Core Web Vitals, 20-30% faster page loads & zero-downtime releases" }
    ];

    const keyMetrics = [
        { stat: "8+ Yrs", label: "Full-Stack Experience" },
        { stat: "32%", label: "Conversion Uplift (Banking)" },
        { stat: "35%", label: "API Round-Trips Reduced" },
        { stat: "10+", label: "Engineers Mentored" }
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
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Executive Summary</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">About Me</h2>
                    </div>
                    <div className="mt-4 md:mt-0 flex flex-wrap gap-2 text-xs font-mono">
                        <span className="px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300">Open to Full-Time</span>
                        <span className="px-3 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">Lead / EM</span>
                        <span className="px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">Contract & Consulting</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Detailed Bio */}
                    <div className="lg:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            I’m <span className="text-white font-bold">Vineet Dhiman</span>, a <span className="text-cyan-400 font-semibold">Full-Stack Engineering Lead</span> with <span className="text-white font-semibold">8+ years</span> building and scaling production systems end-to-end — from React/Next.js frontends to Node.js/Express backends, REST & GraphQL APIs, and AWS cloud infrastructure — across fintech, banking, healthcare, and e-commerce (<span className="text-white font-medium">Sberbank, JPMorgan Chase, Cimpress, Publicis Sapient</span>).
                        </p>
                        <p>
                            Alongside hands-on engineering, I regularly own technical leadership: architecture decisions, design/code reviews, engineering standards (TDD, Linting, CI/CD), and mentoring — several mentees have gone on to more senior roles.
                        </p>
                        <p>
                            I specialize in architecting modern micro-frontends and backend microservices, integrating <span className="text-purple-400 font-semibold">Generative AI & LLMs in production</span> (RAG pipelines, LangChain, Anthropic/OpenAI APIs), and driving 20–30%+ gains in conversion and load performance.
                        </p>
                        <div className="pt-2 p-4 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-sm font-mono text-cyan-300 font-semibold mb-1">
                                Core Capabilities:
                            </p>
                            <p className="text-sm text-gray-400">
                                React • Next.js • Node.js • TypeScript • AWS • Microservices • GraphQL • RAG / LLMs • Redis • MongoDB • Jest • Cypress
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Domain Grid & Impact Banner */}
                    <div className="lg:w-1/2 flex flex-col gap-6">
                        {/* Stats Banner */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/30 to-black border border-white/10">
                            {keyMetrics.map((m, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl md:text-3xl font-extrabold text-white">{m.stat}</div>
                                    <div className="text-xs text-gray-400 mt-1">{m.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all">
                                    <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                                    <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
