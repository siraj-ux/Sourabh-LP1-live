import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";

const WorkshopSection = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">

        {/* ===== TOP INTRO BLOCK ===== */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              The FM4 Therapy <span className="text-[#0047AB]">Live Workshop</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Wahi therapy jisne 30,000+ logon ko naturally pain-free life di, ab aapke liye available hai is exclusive 2-day live training mein.
            </p>
          </div>
        </AnimatedSection>

        {/* ===== DAY 1 & DAY 2 BLOCK ===== */}
        <AnimatedSection>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900">
              Workshop Schedule
            </h3>

            {/* Mobile Carousel */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  setActiveDay(Math.round(scrollLeft / width));
                }}
              >
                <DayCard 
                  day="DAY 1" 
                  title="APNI ROOT CAUSE DISCOVER KARO" 
                  points={["Exact origin discover karo", "Overloaded muscles samjho", "Compensation patterns identify karo"]}
                  quote="Exactly jaano ki aapka pain kyun ho raha hai."
                />
                <DayCard 
                  day="DAY 2" 
                  title="FM4 THERAPY EXPERIENCE KARO" 
                  points={["Proven 4-phase treatment", "Immediate relief feel karo", "Recovery science samjho"]}
                  quote="Wahi therapy jisne 30,000+ logo ki help ki."
                />
              </div>
              <div className="flex justify-center gap-2 mt-2">
                {[0, 1].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all ${activeDay === i ? "w-6 bg-[#0047AB]" : "w-2 bg-slate-200"}`} />
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex gap-6">
              <DayCard 
                  day="DAY 1" 
                  title="APNI ROOT CAUSE DISCOVER KARO" 
                  points={["Exact origin discover karo", "Overloaded muscles samjho", "Compensation patterns identify karo", "Previous treatments failure reason", "Condition clarity pao"]}
                  quote="Exactly jaano ki aapka pain kyun ho raha hai, LIVE."
                />
                <DayCard 
                  day="DAY 2" 
                  title="FM4 THERAPY EXPERIENCE KARO" 
                  points={["Proven 4-phase treatment experience", "Immediate relief feel karo", "Ghar pe continue techniques", "Recovery science samjho", "30,000+ logon ne benefit liya"]}
                  quote="Wahi therapy jisne 30,000+ logo ki help ki..."
                />
            </div>
          </div>
        </AnimatedSection>

        {/* ===== PHASES GRID ===== */}
        <AnimatedSection>
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-black text-center text-slate-900">
              Workshop Curriculum
            </h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {[
                { title: "Phase 1: Identify", text: "Root cause pinpoint karo." },
                { title: "Phase 2: Release", text: "Muscle tension release." },
                { title: "Phase 3: Strengthen", text: "Weak muscles reactivate." },
                { title: "Phase 4: Restore", text: "Mobility protocols." },
              ].map((phase, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 text-center hover:shadow-md transition-shadow">
                  <h4 className="text-[#0047AB] font-bold text-sm md:text-base mb-2 uppercase tracking-tight">{phase.title}</h4>
                  <p className="text-xs md:text-sm text-slate-500 font-medium">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ===== PRACTICAL APPLICATIONS ===== */}
        <AnimatedSection>
          <div className="bg-[#0047AB]/5 border border-[#0047AB]/10 rounded-3xl p-6 md:p-10">
            <h4 className="text-[#0047AB] font-black text-xl md:text-2xl mb-8 text-center uppercase tracking-tight">
              Plus: Practical Applications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 max-w-3xl mx-auto">
              {[
                "Morning stiffness prevent karna",
                "Desk setup pain-free work ke liye",
                "Sleep positions optimal recovery",
                "Daily habits for long-term healing",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-600 stroke-[3px]" />
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

// Reusable DayCard Component
const DayCard = ({ day, title, points, quote }: any) => (
  <div className="flex-1 min-w-full md:min-w-0 snap-center rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl flex flex-col">
    <div className="bg-[#0047AB] p-6 md:p-8 text-white">
      <p className="text-[10px] font-bold tracking-widest opacity-70 mb-1 uppercase">{day}</p>
      <h4 className="text-lg md:text-xl font-black leading-tight uppercase">{title}</h4>
    </div>
    <div className="bg-white p-6 md:p-8 flex-grow space-y-4">
      <ul className="space-y-3">
        {points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-1 stroke-[3px]" />
            <span className="text-sm text-slate-600 font-medium leading-tight">{p}</span>
          </li>
        ))}
      </ul>
      <p className="pt-4 border-t border-slate-50 text-xs italic text-slate-400">"{quote}"</p>
    </div>
  </div>
);

export default WorkshopSection;