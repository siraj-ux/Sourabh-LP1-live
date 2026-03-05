import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 30000,
    suffix: "+",
    text: "Cases Successfully Reversed", // Shortened for mobile fit
  },
  {
    value: 5000,
    suffix: "+",
    text: "Surgeries Avoided",
  },
  {
    value: 100,
    prefix: "₹",
    suffix: " Cr+",
    text: "Medical Bills Saved",
  },
  {
    value: 1000,
    suffix: "+",
    text: "5-Star Google Reviews",
  },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} className="bg-white py-10 md:py-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* TOP SECTION: STATS */}
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 text-center mb-8 tracking-tight">
         Successful Pain Relief<span className="text-[#0047AB]"> Successful Numbers</span>
        </h2>

        {/* Grid: 2 columns on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`bg-slate-50 border border-slate-100 rounded-2xl p-4 md:p-6 text-center shadow-sm 
              transition-all duration-500 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xl md:text-3xl font-black text-[#0047AB] mb-1">
                <AnimatedCounter
                  end={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                  start={isVisible}
                />
              </div>
              <p className="text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-wide">
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: HEADLINE */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Head, Shoulders, Knees  <br className="md:hidden" /> ya Heels me <span className="text-[#0047AB]">dard?</span>
          </h2>
          <p className="text-sm md:text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Agar haan, toh aap akele nahi hain. Thousands of patients ne same challenges face kiye hain.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;