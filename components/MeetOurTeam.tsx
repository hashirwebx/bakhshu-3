
import React from 'react';
import { Shield, Medal, Star, Award } from 'lucide-react';

const TEAM = [
    {
        name: "Basharat Ali Akhonzada",
        role: "Founder & Head Coach",
        rank: "Black Belt 5th Dan",
        specialty: "Elite Combat & Forms",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/Basharat-ali" // Placeholder or specific image if available
    },
    {
        name: "Muhammad Awais",
        role: "Senior Trainer",
        rank: "Black Belt 2nd Dan",
        specialty: "Sparring Specialist",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
    },
    {
        name: "Hajira Shakeel",
        role: "Female Trainer",
        rank: "Black Belt 2nd Dan",
        specialty: "Girls Empowerment & Self Defense",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
    },
    {
        name: "Muhammad Mumtaz",
        role: "Trainer",
        rank: "Black Belt 2nd Dan",
        specialty: "Technical Mastery",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
    },
    {
        name: "Dilshad Ali",
        role: "Trainer",
        rank: "Black Belt",
        specialty: "Foundation Drills",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
    },
    {
        name: "Coach Shireen",
        role: "Professional Fitness Trainer",
        rank: "Fitness Expert",
        specialty: "Functional Strength & Conditioning",
        image: "https://ik.imagekit.io/BakhshuTaekwondo/logo.jpeg"
    }
];

const Instructors: React.FC = () => {
    return (
        <section id="instructors" className="py-40 bg-[#0f1a36] overflow-hidden relative">
            {/* Background Aesthetic */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white rounded-full"></div>
            </div>

            <div className="max-w-[1600px] mx-auto px-6 lg:px-24 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-2xl">
                        <span className="text-[#d9b943] font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Elite Coaching Staff</span>
                        <h2 className="text-6xl md:text-6xl font-black tracking-tighter text-white uppercase leading-none">
                            MEET OUR <br /> <span className="text-primary-red">TRAINERS</span>
                        </h2>
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.3em] max-w-xs text-right">
                            Our team consists of internationally recognized masters and dedicated fitness professionals.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM.map((member, idx) => (
                        <div key={idx} className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 p-1 hover:border-primary-gold/50 transition-all duration-700">
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy via-transparent to-transparent opacity-80"></div>

                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="bg-primary-red text-white text-[8px] font-black uppercase tracking-[0.3em] px-3 py-1.5 mb-4 inline-block">
                                        {member.rank}
                                    </span>
                                    <h3 className="text-white text-3xl font-black uppercase tracking-tight leading-none group-hover:text-[#d9b943] transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mt-2">
                                        {member.role}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Stats/Details */}
                            <div className="p-6 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[9px] font-black uppercase tracking-widest text-primary-gold">
                                    {member.specialty}
                                </span>
                                <div className="flex space-x-2 text-white/20">
                                    <Medal size={14} />
                                    <Star size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="mt-32 text-center">
                    <div className="inline-block p-1 bg-white/5 border border-white/10">
                        <div className="px-12 py-8 bg-primary-navy border border-white/5 flex flex-col md:flex-row items-center gap-12">
                            <div className="text-left">
                                <h4 className="text-white text-xl font-black uppercase tracking-tight">Interested in joining our team?</h4>
                                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-1">We are always looking for passionate martial artists.</p>
                            </div>
                            <button className="red-button px-12 py-5 text-[11px]">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructors;
