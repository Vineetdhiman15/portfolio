import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Experience() {
    const experiences = [
        {
            company: "Sberbank",
            role: "Lead Software Engineer",
            period: "Jan 2025 – Present",
            location: "Bengaluru, India",
            logo: "/logos/sberbank.svg",
            tech: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Micro-Frontends", "Microservices", "AWS CloudFront", "Lambda@Edge", "GenAI / RAG", "LangChain", "GitHub Actions"],
            bullets: [
                "Architected a full-stack digital banking platform: React/TypeScript/Redux Toolkit micro-frontends on the client, Node.js/Express.js microservices on the backend, backed by MongoDB — improved conversion 32%.",
                "Built Node.js/Express.js APIs for core banking operations, authentication, and real-time financial data pipelines, achieving sub-200ms response times at scale.",
                "Designed and shipped GenAI/LLM features in production — a RAG-backed chat interface and a personalized financial-recommendation engine — using LangChain, prompt engineering, and a Node.js/MongoDB backend for context retrieval and response grounding, boosting engagement 28%.",
                "Implemented a CDN and edge-caching strategy using AWS CloudFront and Lambda@Edge for high-traffic API responses and static assets, reducing average latency and easing load on core banking services.",
                "Owned CI/CD end-to-end using GitHub Actions and AWS (S3, CloudFront, Lambda), cutting deployment time 40% with zero-downtime releases.",
                "Mentored 2 engineers via code reviews and pairing, improving team velocity 20%."
            ]
        },
        {
            company: "JPMorgan Chase & Co",
            role: "Software Engineer III",
            period: "Aug 2023 – Jan 2025",
            location: "Bengaluru, India",
            logo: "/logos/jpmorgan.svg",
            tech: ["React", "TypeScript", "Redux-Saga", "Node.js", "Express.js", "BFF Middleware", "Microservices", "Design Systems", "AI-Assisted Tooling"],
            bullets: [
                "Built a Commercial Real Estate platform full-stack: React/TypeScript/Redux-Saga micro-frontends + Node.js/Express.js backend services — increased deal conversion 24%.",
                "Engineered a Node.js/Express.js BFF (Backend-for-Frontend) layer decoupling the UI from 8+ upstream services, cutting API round-trips 35% and improving load performance 30%.",
                "Optimized the BFF's data-aggregation layer with request batching and short-lived response caching for high-traffic property-listing endpoints, reducing redundant calls to upstream services.",
                "Used AI-assisted engineering workflows (AI pair-programming and code-review tooling) to accelerate refactors and documentation across the microservices layer.",
                "Published 20+ reusable React components to JPMorgan's internal design system, speeding delivery across 4 squads.",
                "Partnered with backend architects to define API contracts, data schemas, and service boundaries across 8+ microservices."
            ]
        },
        {
            company: "Cimpress",
            role: "Senior Software Engineer",
            period: "Nov 2022 – Aug 2023",
            location: "Bengaluru, India",
            logo: "/logos/cimpress.svg",
            tech: ["Gatsby", "React", "TypeScript", "REST APIs", "CDN Caching", "Cypress E2E", "ESLint / Prettier"],
            bullets: [
                "Led full-stack development for Drukwerkdeal (Netherlands' largest print e-commerce site) using Gatsby/React/TypeScript on the frontend and REST API integrations on the backend — 10% conversion uplift.",
                "Integrated third-party REST APIs for product catalog, dynamic pricing, and multi-step checkout, building fallback and error-handling logic for high-traffic backend dependencies.",
                "Introduced CDN-level caching for static assets and shared component bundles across 3 storefronts, reducing repeated asset requests and improving load-time consistency at scale.",
                "Adopted early AI-assisted coding workflows (AI pair-programming tools) to speed up refactors and cut development turnaround on the component library.",
                "Architected a shared React component library across 3 storefronts, cutting duplicate UI code 40%.",
                "Authored Cypress E2E suites covering 85%+ of critical flows, cutting regression hotfixes 30%.",
                "Mentored frontend engineers through weekly design reviews and pairing sessions."
            ]
        },
        {
            company: "Publicis Sapient",
            role: "Senior Associate Technology",
            period: "Dec 2020 – Nov 2022",
            location: "Gurugram, India",
            logo: "/logos/publicis.svg",
            tech: ["Next.js", "React", "Redux", "Node.js", "Firebase / Firestore", "Redis", "WCAG 2.1 / ARIA"],
            bullets: [
                "Led full-stack ownership of the Single Page Checkout rebuild — Next.js/React/Redux frontend + Node.js API integrations with shipping, payment, and order-management systems — driving 30% traffic growth and 18% higher checkout completion.",
                "Built a Firebase-backed Customer Service module with real-time Firestore listeners and backend data sync, cutting support resolution time 25%.",
                "Implemented Redis-backed session caching for the checkout flow, reducing repeated database reads and improving response times during high-traffic sale periods.",
                "Began using AI pair-programming tools during development, an early step toward AI-augmented workflows.",
                "Achieved 95% WCAG 2.1/ARIA compliance across the platform through semantic HTML and RTL test coverage.",
                "Mentored 4 junior developers in JavaScript, React, Redux, and Next.js through structured onboarding and bi-weekly coaching."
            ]
        },
        {
            company: "Globant",
            role: "Software Engineer",
            period: "Sep 2020 – Dec 2020",
            location: "Pune, India",
            logo: "/logos/globant.svg",
            tech: ["React", "Redux", "Healthcare APIs", "D3.js", "ESLint Tooling", "Figma to Code"],
            bullets: [
                "Built a React-Redux frontend integrated with backend healthcare REST APIs and data services, cutting page load 40% and bounce rate 20%.",
                "Developed D3.js analytics dashboards consuming backend patient-data endpoints, increasing session duration 25%.",
                "Collaborated with backend teams to shape efficient API response payloads for clinical dashboards, reducing over-fetching on data-heavy views.",
                "Built automated linting and code-quality tooling (ESLint rule sets, pre-commit checks) that flagged issues before review, cutting manual review time.",
                "Translated Figma prototypes into accessible, pixel-perfect components across screen sizes."
            ]
        },
        {
            company: "Cognizant",
            role: "Programmer Analyst",
            period: "Feb 2018 – Aug 2020",
            location: "Pune, India",
            logo: "/logos/cognizant.svg",
            tech: ["React", "Redux", "Webpack / Vite", "D3.js", "Jest TDD", "REST APIs", "SCSS"],
            bullets: [
                "Delivered a mobile-first React/Redux platform with REST API backend integration, growing mobile traffic 15% and engagement 25%.",
                "Refactored a legacy app with Webpack/Vite code-splitting, cutting bundle size 30% and improving Time to Interactive 22%.",
                "Built D3.js dashboards consuming backend KPI-reporting endpoints, improving decision speed 30%.",
                "Collaborated with backend engineers to define efficient API response formats and contributed to a caching strategy for frequently accessed KPI data.",
                "Built automated test scaffolding and CI lint/format checks (Jest, ESLint, Prettier), establishing TDD standards across the team that cut production bugs 20% over two release cycles."
            ]
        },
        {
            company: "Kansal Group",
            role: "Design Engineer",
            period: "Jul 2017 – Feb 2018",
            location: "Mohali, Punjab, India",
            tech: ["CAD Modeling", "Product Prototyping", "Physical Testing", "Technical Drawings"],
            bullets: [
                "Engineered detailed product models and technical drawings using specialized CAD software to ensure manufacturing precision.",
                "Researched advanced materials and optimized design methodologies to improve structural efficiency and durability.",
                "Developed and validated prototypes in collaboration with cross-functional design and procurement teams."
            ]
        }
    ];

    const internships = [
        { title: "Philips Lighting", role: "Intern", period: "Jan 2017 – Jun 2017", location: "Mohali, Punjab" },
        { title: "Indian Air Force", role: "Intern", period: "Jan 2016 – Feb 2016", location: "Chandigarh, India" },
        { title: "Mahindra Group", role: "Intern", period: "May 2015 – Jun 2015", location: "Mohali, Punjab" }
    ];

    return (
        <section className="relative z-20 w-full min-h-screen py-32 px-6 md:px-12 flex flex-col items-center overflow-hidden bg-[#0a0a0a]">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-cyan-900/10 blur-[150px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-7xl z-10"
            >
                <div className="mb-16">
                    <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">Career Journey</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Professional Experience</h2>
                </div>

                <div className="grid grid-cols-1 gap-10 w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col md:flex-row justify-between p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all duration-500 hover:border-cyan-500/40 hover:bg-white/10"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="z-10 md:w-1/3 mb-6 md:mb-0 flex flex-row gap-5 items-start pr-4">
                                {exp.logo && (
                                    <div className="w-16 h-16 bg-white rounded-2xl p-2.5 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-900/20 relative overflow-hidden">
                                        <Image
                                            src={exp.logo}
                                            alt={`${exp.company} logo`}
                                            fill
                                            className="object-contain p-2.5"
                                        />
                                    </div>
                                )}
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono text-cyan-400 mb-1.5 block uppercase tracking-wider">{exp.period}</span>
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-200 transition-colors">{exp.company}</h3>
                                    <p className="text-base text-gray-300 font-semibold">{exp.role}</p>
                                    <p className="text-xs text-gray-500 mt-1">{exp.location}</p>
                                </div>
                            </div>

                            <div className="z-10 md:w-2/3 md:pl-8 md:border-l border-white/10 flex flex-col justify-between">
                                <ul className="space-y-3 mb-6">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="text-gray-300 text-sm md:text-base leading-relaxed flex items-start gap-3">
                                            <span className="text-cyan-400 font-bold text-lg leading-none mt-1">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {exp.tech && (
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                        {exp.tech.map((t, tIdx) => (
                                            <span key={tIdx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-black/40 text-cyan-300 border border-cyan-500/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Early Career Internships */}
                <div className="mt-20 pt-12 border-t border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6">Early Career Internships</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {internships.map((intern, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                                <h4 className="text-lg font-semibold text-white mb-1">{intern.title}</h4>
                                <p className="text-sm text-cyan-400 font-medium mb-2">{intern.role}</p>
                                <div className="flex justify-between items-center text-xs font-mono text-gray-400">
                                    <span>{intern.period}</span>
                                    <span>{intern.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
}
