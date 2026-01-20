
import React, { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

declare const gsap: any;

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('INITIATING...');
    const containerRef = useRef<HTMLDivElement>(null);
    const topHalfRef = useRef<HTMLDivElement>(null);
    const bottomHalfRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const phases = [
        'FOCUSING MIND...',
        'BUILDING DISCIPLINE...',
        'STRENGTHENING SPIRIT...',
        'READY FOR EXCELLENCE'
    ];

    useEffect(() => {
        // Slowed down progress counter for ~8-10 second experience
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Smaller increments to ensure it takes about 8 seconds
                const next = prev + (Math.random() > 0.8 ? 2 : 1);
                return next > 100 ? 100 : next;
            });
        }, 40);

        // Dynamic phase text updates
        const phaseInterval = setInterval(() => {
            setPhase(phases[Math.floor(Math.random() * phases.length)]);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearInterval(phaseInterval);
        };
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setPhase('READY FOR EXCELLENCE');

            const tl = gsap.timeline({
                onComplete: onComplete
            });

            tl.to(contentRef.current, {
                opacity: 0,
                y: -20,
                duration: 0.5,
                delay: 0.8, // Slight delay at 100% for impact
                ease: "power2.in"
            })
                .to(topHalfRef.current, {
                    y: '-100%',
                    duration: 0.8,
                    ease: "expo.inOut"
                }, "-=0.1")
                .to(bottomHalfRef.current, {
                    y: '100%',
                    duration: 0.8,
                    ease: "expo.inOut"
                }, "<");
        }
    }, [progress, onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[1000] overflow-hidden">
            <div ref={topHalfRef} className="absolute inset-0 h-1/2 bg-[#0f1a36] z-10 border-b border-white/5"></div>
            <div ref={bottomHalfRef} className="absolute inset-y-1/2 inset-x-0 h-1/2 bg-[#0f1a36] z-10 border-t border-white/5"></div>

            <div ref={contentRef} className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
                    <h1 className="text-[4rem] sm:text-[10rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-black text-white uppercase tracking-tighter leading-none">
                        BAKHSHU
                    </h1>
                </div>

                <div className="relative flex flex-col items-center space-y-10 md:space-y-12 max-w-2xl text-center">

                    <div className="space-y-2 animate-pulse">
                        <h2 className="text-white font-bebas text-6xl md:text-6xl tracking-[0.2em] uppercase leading-tight">
                            Welcome to <span className="text-primary-red">Bakhshu Taekwondo</span>
                        </h2>
                        <p className="text-[#d9b943] font-black text-[10px] md:text-[12px] tracking-[0.4em] uppercase opacity-70">
                            & Martial Arts Club
                        </p>
                    </div>

                    <div className="relative">
                        <div className="w-20 h-20 md:w-32 md:h-32 bg-white rounded-full p-1 shadow-[0_0_60px_rgba(255,255,255,0.1)] relative z-10 overflow-hidden">
                            <img
                                src="https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
                                alt="Logo"
                                className="w-full h-full object-contain rounded-full"
                            />
                        </div>
                        <div className="absolute inset-[-15px] border border-primary-red/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-[-25px] border border-primary-gold/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                    </div>

                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center space-x-4">
                            <div className="h-[1px] w-8 bg-primary-red/50"></div>
                            <span className="text-primary-gold font-black text-[10px] tracking-[0.5em] uppercase">{phase}</span>
                            <div className="h-[1px] w-8 bg-primary-red/50"></div>
                        </div>

                        <div className="flex flex-col items-center">
                            <span className="text-white text-7xl md:text-8xl font-black tracking-tighter tabular-nums leading-none">
                                {progress}%
                            </span>
                        </div>
                    </div>

                    <div className="w-[200px] md:w-[300px] h-[3px] bg-white/10 relative overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 bg-primary-red shadow-[0_0_15px_rgba(240,80,65,0.8)] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.6em] mt-4">
                        Forging Future Champions
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
