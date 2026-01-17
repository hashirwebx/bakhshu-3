
import React, { useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

declare const gsap: any;
declare const ScrollTrigger: any;

const REVIEWS = [
    {
        name: "Dr. Sofia Khan",
        role: "Mother of 2 Students",
        review: "Since joining Bakhshu Taekwondo, my children have shown remarkable improvement in discipline and confidence. Sir Basharat is not just a coach but a mentor who truly cares about every child's development.",
        rating: 5
    },
    {
        name: "Ahmed Malik",
        role: "Parent",
        review: "The environment is extremely professional and safe. My daughter loves the training sessions. It's the best place in Islamabad for martial arts and character building.",
        rating: 5
    },
    {
        name: "Zara Hussain",
        role: "Mother",
        review: "Highly recommended! The focus on fitness and self-defense for girls is excellent. I feel much more at ease knowing my daughter is learning how to protect herself.",
        rating: 5
    },
    {
        name: "Kamran Ali",
        role: "Father of Gold Medalist",
        review: "Watching my son win a gold medal was a proud moment, all thanks to the dedication of the coaching staff here. They push the kids to be their best versions.",
        rating: 5
    }
];

const ParentsReviews: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".review-card", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/5 rounded-full blur-[100px] -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-[1440px] mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">
                        Parents <span className="text-primary-red">Reviews</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto font-medium">
                        Hear from the families who have trusted us with their children's growth and training.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {REVIEWS.map((review, idx) => (
                        <div key={idx} className="review-card bg-gray-50 border border-gray-200 p-8 relative hover:shadow-xl transition-shadow duration-300">
                            <Quote className="absolute top-6 right-6 text-gray-200" size={40} />

                            <div className="flex space-x-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 text-sm italic leading-relaxed mb-6 relative z-10">
                                "{review.review}"
                            </p>

                            <div className="mt-auto border-t border-gray-200 pt-4">
                                <h4 className="font-bold text-black uppercase text-sm tracking-wide">{review.name}</h4>
                                <p className="text-primary-red text-[10px] font-black uppercase tracking-widest">{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ParentsReviews;
