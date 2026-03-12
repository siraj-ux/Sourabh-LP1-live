import { useState, useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";
import celebrity1 from "@/assets/celebrity-1.webp";
import celebrity2 from "@/assets/celebrity-2.webp";
import celebrity3 from "@/assets/celebrity-3.webp";
import bonusImg from "@/assets/bonus.jpeg"; 
import AnimatedSection from "./AnimatedSection";

const ExpertSection = () => {
  const images = [celebrity1, celebrity2, celebrity3];
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const container = scrollRef.current;
      if (!container) return;
      const cardWidth = container.firstElementChild?.clientWidth || container.offsetWidth;
      const nextIndex = (active + 1) % images.length;
      container.scrollTo({ left: cardWidth * nextIndex, behavior: "smooth" });
      setActive(nextIndex);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, images.length]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstElementChild?.clientWidth || container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);
    setActive(index);
  };

  return (
    <section className="bg-white mt-1 md:mt-0 py-1 md:py-4 px-4">
      <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-100 rounded-2xl px-6 md:px-10 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            {/* --- TOP HEADING --- */}
            <p className="text-[#0047AB] text-center text-sm font-bold uppercase tracking-widest mb-2">
              Meet Your Expert
            </p>
            <h2 className="text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 text-slate-900">
              Hi, Main <span className="text-[#0047AB]">Sourobh Kulkorni</span>
            </h2>

            {/* --- BIO & GALLERY GRID --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
              <div className="order-1 md:order-2">
                <div
                  ref={scrollRef}
                  onScroll={handleScroll}
                  className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
                >
                  {images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border-4 border-white shadow-xl min-w-[85vw] w-[85vw] sm:min-w-[320px] sm:w-[320px] md:min-w-[380px] md:w-[380px] lg:min-w-[420px] lg:w-[420px] snap-center flex-shrink-0"
                    >
                      <img
                        src={img}
                        alt={`Sourobh Kulkarni ${i + 1}`}
                        className="w-full aspect-[7/10] object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-2 mt-2">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        active === i ? "w-6 bg-[#0047AB]" : "w-2 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="order-2 md:order-1">
                <p className="text-slate-600 mb-4 text-sm md:text-base font-medium leading-relaxed">
                  Main Sourobh Kulkorni hoon, FM4 Therapy ka founder aur India ki only government-patented, 4-phase pain relief system ka creator. Certified Health Care Professional, Nutritionist, aur Rehabilitation Specialist hoon.
                </p>
                <p className="text-slate-600 mb-6 text-sm md:text-base font-medium leading-relaxed">
                  FM4 Therapy government-patented hai, India mein scientifically validated 4-phase treatment hai jo spine, knee, aur neck pain ki root causes ko target karta hai.
                </p>
                <div className="bg-[#0047AB] rounded-xl p-4 mb-6 shadow-lg">
                  <p className="text-white font-bold text-sm md:text-base text-center md:text-left">
                    🏆 Amazing Performer in Fitness Industry 2024
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "30,000+ clients ne chronic pain overcome kiya",
                    "5,000+ surgeries avoid ki",
                    "₹100+ crores medical bills mein bachaye",
                    "Government-patented FM4 Therapy",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0 stroke-[3px]" />
                      <span className="text-sm text-slate-800 font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SEPARATE APPROACH SECTION --- */}
            <div className="border-t border-slate-200 pt-12 mt-4">
              
              {/* --- CENTERED BANNER WITH SIDE DESIGN --- */}
              <div className="flex items-center justify-center gap-6 mb-12">
                {/* Left Side Decoration */}
                <div className="hidden md:flex items-center gap-2 flex-1 justify-end">
                  <div className="h-[2px] w-24 bg-gradient-to-r from-transparent to-blue-200"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                </div>

                {/* Banner Image (Medium Size) */}
                <div className="shrink-0 px-4">
                  <img 
                    src={bonusImg} 
                    alt="Bonus" 
                    className="max-w-[300px] md:max-w-[450px] lg:max-w-[500px] w-full h-auto rounded-xl shadow-lg border border-slate-200"
                  />
                </div>

                {/* Right Side Decoration */}
                <div className="hidden md:flex items-center gap-2 flex-1 justify-start">
                  <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                  <div className="h-[2px] w-24 bg-gradient-to-l from-transparent to-blue-200"></div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-center mb-10 text-slate-900 tracking-tight px-4 leading-tight">
                Sourobh Ka Approach <span className="text-[#0047AB]">Kaam Kyun Karta Hai?</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto px-2">
                {[
                  "Aapke body mein actual mechanical breakdown identify karna",
                  "Muscle tension aur nerve pressure release karna",
                  "Weak support systems strengthen karna",
                  "Natural movement patterns restore karna",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-blue-100 p-2.5 rounded-full flex-shrink-0">
                      <ArrowRight className="text-[#0047AB] w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-bold leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;