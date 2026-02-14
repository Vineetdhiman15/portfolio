'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {

    // Section 1: Intro (My Name)
    // Visible from 0 to 0.2
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    // Section 2: "I build digital experiences."
    // Visible from 0.2 to 0.4
    const y2 = useTransform(scrollYProgress, [0.2, 0.4], [100, -100]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]);

    // Section 3: "Bridging design and engineering."
    // Visible from 0.5 to 0.7
    const y3 = useTransform(scrollYProgress, [0.5, 0.7], [100, -100]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

    // Section 4: Final Hint
    // Visible from 0.85 to 1.0
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 1.0], [50, 0]);

    // Initial scroll hint (pulsating arrow/text)
    const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

    return (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none text-white mix-blend-difference">

            {/* Scroll Hint */}
            <motion.div
                style={{ opacity: hintOpacity }}
                className="absolute bottom-10 left-1/2 -track-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-[0.3em] font-light">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>

            {/* Container for centering items */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-8">

                {/* Section 1 */}
                <motion.div style={{ y: y1, opacity: opacity1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                        Lead Software Engineer
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-gray-300 mb-8">
                        React • Next.js • TypeScript
                    </p>
                    <a
                        href="https://drive.google.com/uc?export=download&id=1shBDsm2rCF3ft2SgGz7ALWDexJQI8zR1"
                        className="pointer-events-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors"
                        download
                    >
                        Download Resume
                    </a>
                </motion.div>

                {/* Section 2 */}
                <motion.div style={{ y: y2, opacity: opacity2 }} className="absolute inset-0 flex flex-col items-start justify-center left-10 md:left-20">
                    <h2 className="text-5xl md:text-7xl font-semibold leading-tight max-w-md">
                        Driving conversion & performance.
                    </h2>
                </motion.div>

                {/* Section 3 */}
                <motion.div style={{ y: y3, opacity: opacity3 }} className="absolute inset-0 flex flex-col items-end justify-center right-10 md:right-20 text-right">
                    <h2 className="text-5xl md:text-7xl font-semibold leading-tight max-w-md">
                        Expert in Scalable UI Architecture.
                    </h2>
                </motion.div>

                {/* Section 4: Transition to content */}
                <motion.div style={{ y: y4, opacity: opacity4 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        A Passion for Excellence.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400">
                        Scroll down to learn more about my journey.
                    </p>
                </motion.div>

            </div>
        </div>
    );
}
