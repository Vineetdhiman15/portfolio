'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent, MotionValue, useTransform, motion } from 'framer-motion';

export default function ScrollyCanvas({
    frameCount = 120,
    children
}: {
    frameCount?: number,
    children?: ((props: { scrollYProgress: MotionValue<number> }) => React.ReactNode) | React.ReactNode
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Fade out canvas at the very end (0.9 to 1.0)
    const canvasOpacity = useTransform(scrollYProgress, [0.92, 0.98], [1, 0]);

    // Load images
    useEffect(() => {
        let isCancelled = false;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new Image();
                    const index = i.toString().padStart(3, '0');
                    img.src = `/sequence/img_${index}.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image ${i}`);
                        resolve();
                    }
                });
                promises.push(promise);
            }

            await Promise.all(promises);

            if (!isCancelled) {
                setImages(loadedImages);
                setLoaded(true);
            }
        };

        loadImages();

        return () => {
            isCancelled = true;
        };
    }, [frameCount]);

    // Draw Frame (Helper)
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const outputRatio = canvas.width / canvas.height;
        const inputRatio = img.width / img.height;

        let renderWidth, renderHeight, xOffset, yOffset;

        if (inputRatio > outputRatio) {
            renderHeight = canvas.height;
            renderWidth = img.width * (canvas.height / img.height);
            xOffset = (canvas.width - renderWidth) / 2;
            yOffset = 0;
        } else {
            renderWidth = canvas.width;
            renderHeight = img.height * (canvas.width / img.width);
            yOffset = (canvas.height - renderHeight) / 2;
            xOffset = 0;
        }

        ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
    }, [images]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                const currentFrameIndex = Math.min(
                    frameCount - 1,
                    Math.floor(scrollYProgress.get() * (frameCount - 1))
                );
                renderFrame(currentFrameIndex);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [loaded, scrollYProgress, frameCount, renderFrame]);

    // Sync with scroll
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!loaded || images.length === 0) return;

        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * (frameCount - 1))
        );

        requestAnimationFrame(() => renderFrame(frameIndex));
    });

    // Initial Render
    useEffect(() => {
        if (loaded && images.length > 0) {
            renderFrame(0);
        }
    }, [loaded, images, renderFrame]);


    return (
        <div ref={containerRef} className="h-[500vh] relative w-full">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <motion.div style={{ opacity: canvasOpacity }} className="absolute inset-0 w-full h-full">
                    <canvas
                        ref={canvasRef}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                {/* Render children (Overlay) with scrollYProgress prop */}
                {typeof children === 'function'
                    ? children({ scrollYProgress })
                    : children}
            </div>
        </div>
    );
}
