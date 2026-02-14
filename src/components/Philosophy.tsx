import { motion } from 'framer-motion';

export default function Philosophy() {
    const pillars = [
        {
            title: "Scalable Architecture",
            desc: "I design systems, not just features. From Micro-Frontends to Design Systems, I build maintainable, decoupled architectures that teams can scale horizontally without friction."
        },
        {
            title: "AI & Automation",
            desc: "I leverage LLMs and copilots to automate repetitive tasks, generate test cases, and enhance code documentation, allowing engineers to focus on complex problem solving."
        },
        {
            title: "Product-Minded Engineering",
            desc: "Technical excellence means nothing if it doesn't serve the user. I bridge the gap between design vision and implementation, ensuring performance and accessibility."
        }
    ];

    return (
        <section className="relative z-20 w-full py-20 px-6 md:px-12 flex flex-col items-center bg-[#0a0a0a] border-t border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-7xl"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white tracking-tight text-center md:text-left">
                    How I Lead & Build
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((item, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Core Principles</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Clean Code", "TDD", "CI/CD", "Accessibility (a11y)", "Performance First", "Mentorship"].map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-gray-400 text-xs font-mono bg-black/20 hover:text-white transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
