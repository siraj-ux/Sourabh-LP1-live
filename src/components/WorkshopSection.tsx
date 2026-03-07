import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";

const WorkshopSection = () => {
  const phases = [
    {
      title: "Identify",
      text: "Ascertain the Root cause.",
      gradient: "from-blue-600 to-blue-400",
      accent: "bg-blue-300",
    },
    {
      title: "Release",
      text: "Release trigger points, restore movement aur eliminate muscle pain.",
      gradient: "from-amber-500 to-orange-400",
      accent: "bg-amber-300",
    },
    {
      title: "Strengthen",
      text: "Regain functional strength in weak muscles.",
      gradient: "from-emerald-600 to-teal-400",
      accent: "bg-emerald-300",
    },
    {
      title: "Restore",
      text: "Restore joint range of motion and muscle flexibility",
      gradient: "from-indigo-600 to-violet-400",
      accent: "bg-indigo-300",
    },
  ];

  const practicalApps = [
    {
      title: "Morning stiffness prevent karna",
      img: "/sk/4.jpg",
    },
    {
      title: "Work ergonomics ko reorganize karke pain-free work ke liye",
      img: "/sk/5.jpg",
    },
    {
      title: "Sleep right, recover faster—optimize recovery with proper sleep positions",
      img: "/sk/6.jpg",
    },
    {
      title: "Simple lifestyle modifications for lasting pain relief and better mobility",
      img: "/sk/7.jpg",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
        
        {/* ===== TOP INTRO BLOCK ===== */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Pain Free Life With FM4 <span className="text-[#0047AB]">Live Workshop</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Transform Chronic Pain Into Freedom Of Movement By Discovering One Of Its Kind{" "}
              <span className="relative inline-block px-1">
                <span className="absolute inset-0 bg-[#0047AB]/10 rounded"></span>
                <span className="relative text-[#0047AB]">
                  FM4 Therapy
                </span>
              </span>
            </p>
          </div>
        </AnimatedSection>
        
        {/* ===== WORKSHOP SCHEDULE ===== */}
        <AnimatedSection>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900">
              Workshop Schedule
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <DayCard 
                day="Day 01" 
                title="Dard Ka Asli Sabab Samjhiye" 
                points={[
                  "Find out kare true origin of your pain and unlock a path to long-term recovery",
                  "Janiye body mai overactive muscles aur functional movement deficiencies",
                  "Pehle ke treatments fail hone ke reasons",
                  "Uncover kare potential risk factors for future musculoskeletal disorders."
                ]}
              />
              <DayCard 
                day="Day 02" 
                title="Unveil FM4 Therapy" 
                points={[
                  "Evidence based 4-phase therapy approach",
                  "Scientifically grounded FM4 therapy for targeted and lasting musculoskeletal relief.",
                  "30,000+ patients recovered"
                ]}
              />
            </div>
          </div>
        </AnimatedSection>

        {/* ===== CURRICULUM SECTION (COMPACT COLORFUL DESIGN) ===== */}
        <AnimatedSection>
          <div className="space-y-10 relative">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-2 tracking-tight">
                Workshop Curriculum
              </h3>
              <p className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] md:text-xs">
                The 4-Step FM4 Recovery Framework
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
              {phases.map((phase, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative group bg-gradient-to-br ${phase.gradient} rounded-[2rem] p-6 shadow-xl transition-all duration-500 overflow-hidden flex flex-col min-h-[220px]`}
                >
                  {/* GRAPHIC DECOR 1: Smaller Ghost Number */}
                  <span className="absolute -bottom-2 -left-2 text-7xl font-black text-white/10 select-none pointer-events-none italic group-hover:scale-110 transition-transform duration-700">
                    0{i + 1}
                  </span>

                  {/* GRAPHIC DECOR 2: Glass Morphism Blurred Circles */}
                  <div className="absolute top-[-15%] right-[-15%] w-24 h-24 bg-white/20 rounded-full blur-xl pointer-events-none" />

                  {/* Header Badge */}
                  <div className="relative z-10 mb-4">
                    <div className="w-9 h-9 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-xl flex items-center justify-center font-black text-base shadow-lg group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300">
                      {i + 1}
                    </div>
                  </div>

                  {/* Text Contents */}
                  <div className="relative z-10 flex-grow">
                    <h4 className="text-white font-black text-lg mb-2 leading-tight tracking-tight">
                      Phase {i + 1}: <br />
                      <span className="text-white/90 group-hover:text-white transition-colors">{phase.title}</span>
                    </h4>
                    <p className="text-white/80 text-[13px] font-bold leading-snug">
                      {phase.text}
                    </p>
                  </div>

                  {/* Minimal Status Bar at bottom */}
                  <div className="relative z-10 mt-4">
                    <div className="h-1 w-full bg-black/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full opacity-70 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_8px_white]" 
                        style={{ width: `${(i+1)*25}%` }} 
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== PRACTICAL APPLICATIONS ===== */}
        <AnimatedSection>
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-sm">
            <div className="text-center mb-12">
              <h4 className="text-[#0047AB] font-black text-2xl md:text-4xl mb-4 tracking-tight">
                Plus: Practical Applications
              </h4>
              <p className="text-slate-500 font-medium">Real-world strategies you can start using immediately</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practicalApps.map((item, i) => (
                <div key={i} className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=FM4" }}
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-600 stroke-[3px]" />
                      </div>
                    </div>
                    <span className="text-slate-700 font-bold text-sm md:text-base leading-snug">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

// Internal Helper Components
const DayCard = ({ day, title, points }) => (
  <div className="flex-1 w-full rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col bg-white">
    <div className="bg-[#0047AB] p-6 md:p-8 text-white">
      <span className="inline-block bg-amber-400 text-[#0047AB] text-xs font-black px-3 py-1 rounded-full mb-3 shadow-md uppercase tracking-wider">
        {day}
      </span>
      <h4 className="text-xl md:text-2xl font-black leading-tight">{title}</h4>
    </div>
    <div className="p-6 md:p-8 flex-grow">
      <ul className="space-y-4">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5 stroke-[3px]" />
            <span className="text-sm md:text-base text-slate-600 font-semibold leading-snug">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default WorkshopSection;