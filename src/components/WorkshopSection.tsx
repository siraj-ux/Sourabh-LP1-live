import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";

const WorkshopSection = () => {
  const phases = [
    { 
      title: "Identify", 
      text: "Ascertain the Root cause.", 
      color: "bg-blue-500"
    },
    { 
      title: "Release", 
      text: "Release trigger points, restore movement aur eliminate muscle pain.", 
      color: "bg-amber-500"
    },
    { 
      title: "Strengthen", 
      text: "Regain functional strength in weak muscles.", 
      color: "bg-emerald-500"
    },
    { 
      title: "Restore", 
      text: "Restore joint range of motion and muscle flexibility", 
      color: "bg-indigo-500"
    },
  ];

  const practicalApps = [
    {
      title: "Morning stiffness prevent karna",
      img: "/sk/4.jpg"
    },
    {
      title: "Work ergonomics ko reorganize karke pain-free work ke liye",
      img: "/sk/5.jpg"
    },
    {
      title: "Sleep right, recover faster—optimize recovery with proper sleep positions",
      img: "/sk/6.jpg"
    },
    {
      title: "Simple lifestyle modifications for lasting pain relief and better mobility",
      img: "/sk/7.jpg"
    }
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
                <span className="absolute inset-0 bg-[#0047AB]/10 rounded animate-pulse"></span>
                <span className="relative text-[#0047AB] animate-[pulse_2s_infinite]">
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

        {/* ===== CURRICULUM SECTION ===== */}
        <AnimatedSection>
          <div className="space-y-12 relative">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">
                Workshop Curriculum
              </h3>
              <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">The 4-Step FM4 Recovery Framework</p>
            </div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -z-0 transform -translate-y-10" />
              {phases.map((phase, i) => (
                <div key={i} className="relative group bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 z-10">
                  <div className={`absolute -top-3 -right-3 w-10 h-10 ${phase.color} text-white rounded-full flex items-center justify-center font-bold shadow-lg`}>
                    {i + 1}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-slate-900 font-black text-lg mb-3 tracking-tight">
                      Phase {i + 1}: <br/> {phase.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">{phase.text}</p>
                  </div>
                  <div className={`mt-6 w-8 group-hover:w-full h-1.5 ${phase.color} rounded-full transition-all duration-500`} />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== PRACTICAL APPLICATIONS (REDESIGNED WITH IMAGES) ===== */}
        <AnimatedSection>
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
            <div className="text-center mb-12">
              <h4 className="text-[#0047AB] font-black text-2xl md:text-4xl mb-4 tracking-tight">
                Practical Applications
              </h4>
              <p className="text-slate-500 font-medium">Real-world strategies you can start using immediately</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practicalApps.map((item, i) => (
                <div key={i} className="group flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-slate-100">
                  {/* Image Container */}
                  <div className="w-full sm:w-32 h-32 flex-shrink-0 overflow-hidden rounded-2xl">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=FM4" }} // Fallback if image not found
                    />
                  </div>
                  
                  {/* Text Container */}
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

const DayCard = ({ day, title, points }: { day: string, title: string, points: string[] }) => (
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