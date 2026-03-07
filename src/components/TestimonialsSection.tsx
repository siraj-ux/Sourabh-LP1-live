import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react"; // Import for the verified badge icon

const testimonials = [
  { quote: "Maine knee replacement surgery avoid ki. FM4 Therapy ne meri life badal di!", name: "Mrs. Sharma", info: "62 years, Delhi" },
  { quote: "5 saal mein pehli baar pain-free hoon. Business pe focus kar pa raha hoon ab.", name: "Rajesh K.", info: "Business Owner, Mumbai" },
  { quote: "Ab main apne bacchon ke saath khel sakti hoon bina kisi pain ke.", name: "Priya M.", info: "Working Mom, Pune" },
  { quote: "Doctors ne surgery bola tha, FM4 se naturally pain khatam hua. Unbelievable!", name: "Ankit S.", info: "IT Professional, Bangalore" },
  { quote: "20 saal purana back pain 3 months mein gone. Worth every penny.", name: "Suresh P.", info: "Retired, Hyderabad" },
  { quote: "Mere father 72 saal ke hain, ab daily walk karte hain pain-free.", name: "Meera D.", info: "Daughter of patient, Chennai" },
];

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-10 md:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>

          {/* Main Container - Slate background to match other sections */}
          <div className="bg-slate-50 border border-slate-100 rounded-[2rem] px-6 md:px-10 py-12 shadow-sm">

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-black text-center mb-4 text-slate-900 leading-tight">
             Padhiye Firsthand From Our Clients About Their Journey <span className="text-[#0047AB]">To A Pain-Free Life</span> 
            </h2>

            {/* Google Rating - Clean white style */}
            <div className="flex items-center justify-center gap-2 mb-10 bg-white w-fit mx-auto px-4 py-2 rounded-full shadow-sm border border-slate-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="w-4 h-4"
              />
              <span className="text-slate-600 font-bold text-xs md:text-sm">
                ⭐⭐⭐⭐⭐ Rated <span className="text-[#0047AB]">4.6</span> | 1000+ Google Reviews
              </span>
            </div>

            {/* MOBILE SCROLL - Exact same logic and alignment */}
            <div className="md:hidden">
              <div
                className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory hide-scrollbar"
                onScroll={(e) => {
                  const scrollLeft = e.currentTarget.scrollLeft;
                  const width = e.currentTarget.offsetWidth;
                  const index = Math.round(scrollLeft / width);
                  setActive(index);
                }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl w-full min-w-full snap-center flex-shrink-0"
                  >
                    <p className="text-slate-600 italic text-sm mb-6 leading-relaxed font-medium">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#0047AB] font-black text-sm uppercase tracking-tight">{t.name}</p>
                        <p className="text-slate-400 text-[11px] mt-0.5 font-semibold">
                          {t.info}
                        </p>
                      </div>

                      {/* Verified Badge - Green style like Workshop Section */}
                      <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-lg font-bold flex items-center gap-1">
                        <Check className="w-3 h-3 stroke-[4px]" /> Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Dots */}
              <div className="flex justify-center gap-2 mt-2">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === i
                        ? "w-6 bg-[#0047AB]"
                        : "w-2 bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* DESKTOP GRID - Exact same logic and alignment */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-50 rounded-2xl p-6 shadow-sm 
                             hover:-translate-y-2 hover:shadow-xl 
                             transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="text-slate-600 italic text-sm mb-6 leading-relaxed font-medium">
                    "{t.quote}"
                  </p>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[#0047AB] font-black text-sm uppercase tracking-tight">{t.name}</p>
                      <span className="bg-green-50 text-green-600 text-[9px] px-2 py-0.5 rounded-md font-bold flex items-center gap-1 border border-green-100">
                        <Check className="w-2.5 h-2.5 stroke-[4px]" /> Verified
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] font-semibold">
                      {t.info}
                    </p>
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

export default TestimonialsSection;