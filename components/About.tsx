
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, UserCheck, LayoutPanelTop, SearchCheck } from 'lucide-react';

declare const gsap: any;
declare const ScrollTrigger: any;

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-header", {
        y: -50,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".about-header",
          start: "top 85%",
        }
      });

      gsap.from(".about-img", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
        }
      });

      gsap.from(".about-text > *", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-white overflow-hidden border-t border-gray-200 relative">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">

        {/* New Section Headline Header */}
        <div className="about-header mb-24 relative">
          <h2 className="text-6xl md:text-[10rem] font-bebas text-black/5 absolute -top-16 md:-top-24 left-0 select-none tracking-tighter uppercase leading-none pointer-events-none">Martial Arts</h2>
          <h3 className="text-4xl md:text-7xl font-bebas text-black tracking-widest uppercase relative z-10 leading-none">Expert Coaching  <span className="text-primary-red">You Can Trust</span></h3>
          <div className="w-32 h-1 bg-primary-red mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="about-img relative">
            <div className="relative z-10 bg-gray-100 p-2 rounded-none overflow-hidden shadow-2xl border border-gray-200">
              <img
                src="https://scontent.fmfg1-1.fna.fbcdn.net/v/t39.30808-6/482238520_9793777673975446_9077913270090878022_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kAC93HQB3hUQ7kNvwEkVif4&_nc_oc=Adk-K2BUIudHs-sRlupM-egfSK1Cs15Xq1HEwOVbucgeeo5OzIxvvI2PjLSBl5-Wgrs&_nc_zt=23&_nc_ht=scontent.fmfg1-1.fna&_nc_gid=AwemgLmEzLwLqL7cYI8-_g&oh=00_Afp49hAo-EIKNyQcZtTLTrna7NsXXxhUN1vgANIwM9kYnQ&oe=69700CC2"
                alt="Master Basharat"
                className="w-full h-full grayscale brightness-90 hover:grayscale-0 transition-all duration-700 rounded-none"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-red/10 blur-[120px] -z-10 rounded-none"></div>
          </div>

          <div className="about-text space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold text-black leading-[1] tracking-tight">
              LED BY INTERNATIONAL LEVEL <span className="text-primary-red">EXPERIENCE</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Founded in 2010 by <strong>Master Basharat Ali Akhonzada</strong>, former Pakistan National Taekwondo Player, Bakhshu Taekwondo Club has trained hundreds of students — from beginners to champions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck size={24} />, title: "Highly Trained", desc: "Expertly experienced staff." },
                { icon: <UserCheck size={24} />, title: "Patient Instruction", desc: "Ideal for young learners." },
                { icon: <SearchCheck size={24} />, title: "Safety Focused", desc: "Correct technique prioritized." },
                { icon: <LayoutPanelTop size={24} />, title: "Committed Progress", desc: "Focused on every child." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-4 bg-gray-50 backdrop-blur-md border border-gray-100 rounded-none hover:border-primary-red/30 transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="text-primary-red shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-black font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
