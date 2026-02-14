"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Heenal Sanghvi",
        role: "Technical Product Manager",
        company: "EY (ex-JMPC)",
        text: "Vineet played a key role in shaping a system that was scalable, reliable, and genuinely enjoyable for developers to use. He is approachable, thoughtful, and always open to feedback. I highly recommend him to any team lucky enough to have him."
    },
    {
        name: "Fernanda Castillo Gómez",
        role: "Lead Software Engineer",
        company: "JP Morgan Chase & Co",
        text: "I had the pleasure of working with Vineet as he contributed to the design system library I work on. He was always thoughtful in his approach, detail-oriented, and great to collaborate with. Vineet is a proactive and reliable frontend engineer."
    },
    {
        name: "Chaitanya Halbe",
        role: "Frontend Software Engineer III",
        company: "JP Morgan Chase & Co",
        text: "His expertise was instrumental in delivering projects on time and achieving team goals. He is a confident, reliable developer and was a valuable asset to our team."
    },
    {
        name: "Aishwarya Mary",
        role: "Software Engineer",
        company: "Conga (ex-Publicis Sapient)",
        text: "I consider myself lucky to have worked under Vineet. His dedication to his craft is inspiring, and his ability to coach others is something I'll miss. He is multi-skilled, insightful, and has exceptional troubleshooting skills."
    },
    {
        name: "Vivek Malhan",
        role: "Senior Software Engineer",
        company: "GenAI Explorer",
        text: "A true 'Bug Killer' and React expert. Throughout Vineet's tenure, he consistently exhibited an impressive ability to identify and resolve complex software bugs, earning him a well-deserved reputation."
    },
    {
        name: "Siddharth Zinzuwadia",
        role: "Senior Software Engineer",
        company: "Publicis Sapient",
        text: "Vineet Dhiman is a great professional to work with. He helped me a lot to get started and understand internal processes. His work ethics is immaculate and it is so easy to work together with him."
    },
    {
        name: "Mateen Shaikh",
        role: "Co-Founder",
        company: "Sitecore & Umbraco Partner",
        text: "Vineet is very sincere in his work and has immense dedication. He has a 'never let go' attitude. I had a great experience working with him on ReactJS projects; he has good understanding of technology."
    },
    {
        name: "Shubham Soni",
        role: "Senior Software Engineer",
        company: "Cognizant",
        text: "If you are looking to work with someone who is not just a teammate but more of a friend and makes coding easy and fun, Vineet is that person. He manages everything amazingly."
    },
    {
        name: "Dhrumil Shah",
        role: "Senior Software Engineer",
        company: "Teammate",
        text: "Vineet is one of the most valuable people I have ever met. Both smart and professional. Experienced, deadline oriented and intelligent person. Highly recommended."
    },
    {
        name: "Heena Begum",
        role: "Front-end Developer",
        company: "Northern Trust",
        text: "He has a deep understanding of HTML5, CSS3, JavaScript, and front-end frameworks like React. He has an amazing ability to transform design concepts into visually appealing and responsive interfaces."
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    return (
        <section className="relative z-20 w-full py-24 px-6 md:px-12 flex flex-col items-center bg-[#121212] border-t border-white/5 overflow-hidden">

            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] rounded-full bg-cyan-900/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-purple-900/10 blur-[100px]" />
            </div>

            <div className="w-full max-w-7xl mb-16 text-center md:text-left z-10">
                <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 tracking-tight mb-4">
                    Trusted by Engineers & Leads
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Feedback from the people I’ve worked with, mentored, and built systems alongside.
                </p>
            </div>

            <div className="w-full overflow-hidden z-10" ref={containerRef}>
                <motion.div
                    className="flex gap-6 cursor-grab active:cursor-grabbing pb-10"
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    whileTap={{ scale: 0.98 }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[350px] md:min-w-[450px] p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors relative"
                        >
                            <div className="mb-6 relative">
                                <span className="text-6xl text-white/10 font-serif absolute -top-4 -left-2">“</span>
                                <p className="text-gray-300 text-lg leading-relaxed relative z-10 italic">
                                    {t.text}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold">{t.name}</h4>
                                    <p className="text-xs text-cyan-400 uppercase tracking-wider">{t.role}</p>
                                    <p className="text-xs text-gray-500">{t.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <p className="text-gray-600 text-sm mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                Drag to explore recommendations
            </p>
        </section>
    );
}
