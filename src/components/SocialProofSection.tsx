import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    value: 10000,
    suffix: "+",
    text: "Spine, Knee & Neck Pain Reversed Successfully!",
    img: "/back.webp",
  },
  {
    value: 5000,
    suffix: "+",
    text: "Surgeries Avoided!",
    img: "/surgery.webp",
  },
  {
    value: 100,
    prefix: "₹",
    suffix: " Crores+",
    text: "Medical Bills Saved for Patients in 10 years!",
    img: "/bill.webp",
  },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    // Reduced section padding from py-20 to py-8/12
    <section ref={ref} className="bg-[#F8FAFC] py-8 md:py-12 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER - Smaller font sizes */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
            Proven Results,<span className="text-[#0047AB]">From Pain To Complete Recovery</span>
          </h2>
        </div>

        {/* STATS GRID - Reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col overflow-hidden rounded-2xl md:rounded-[1.5rem] shadow-lg transition-all duration-700 ease-out transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* TOP PART: IMAGE - Reduced height from h-64 to h-32/44 */}
              <div className="h-32 md:h-44 overflow-hidden bg-white">
                <img 
                  src={s.img} 
                  alt={s.text}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BOTTOM PART: DARK SLATE BOX - Reduced padding and min-height */}
              <div className="bg-[#3F5161] p-5 md:p-6 flex flex-col items-center text-center flex-grow min-h-[160px] justify-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter">
                  <AnimatedCounter
                    end={s.value}
                    prefix={s.prefix || ""}
                    suffix={s.suffix || ""}
                    start={isVisible}
                  />
                </div>

                {/* THE HORIZONTAL SEPARATOR LINE - Thinner and smaller margin */}
                <div className="w-8 h-[1.5px] bg-slate-400/40 mb-3"></div>

                <p className="text-[13px] md:text-sm text-white font-bold leading-snug">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;