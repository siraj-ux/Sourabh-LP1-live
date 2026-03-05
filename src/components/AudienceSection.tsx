import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  { emoji: "💼", title: "Busy Business Owners", text: "Jo frustrating back, neck, ya knee pain ki wajah se business manage karne mein struggle kar rahe hain" },
  { emoji: "🖥️", title: "Desk Job Employees", text: "Jo long hours baith kar kaam karte hain aur back-induced pain eliminate karna chahte hain" },
  { emoji: "🧓", title: "Older Adults (55+)", text: "Jo gentle yet effective techniques se pain relieve karna aur mobility improve karna chahte hain" },
  { emoji: "👩‍👧", title: "Working Moms", text: "Jo chronic body pain ki wajah se daily activities manage karne mein difficulties face kar rahi hain" },
  { emoji: "🏃", title: "Athletes & Active Individuals", text: "Jinki pain unki performance aur favorite activities ko limit kar rahi hai" },
  { emoji: "🏥", title: "Surgery Soch Rahe Hain Jo Log", text: "Jo irreversible decisions lene se pehle natural alternatives explore karna chahte hain" },
];

const AudienceSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
             Yeh Workshop   <span className="text-[#0047AB]">Kis Ke Liye Hai? </span> 
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-medium">
              Aapka profession jo bhi ho, agar dard aapki progress rok raha hai, toh yeh workshop aapke liye hai.
            </p>
          </div>

          {/* Mobile Scroll View */}
          <div className="md:hidden">
            <div
              className="flex gap-5 overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
              onScroll={(e) => {
                const scrollLeft = e.currentTarget.scrollLeft;
                const width = e.currentTarget.offsetWidth - 40; // Approx card width
                const index = Math.round(scrollLeft / width);
                setActive(index);
              }}
            >
              {audiences.map((a, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl w-[280px] min-w-[280px] snap-center flex-shrink-0 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-[#0047AB]/5 rounded-2xl flex items-center justify-center text-4xl mb-6">
                    {a.emoji}
                  </div>
                  <h3 className="text-slate-900 font-black text-lg mb-3 leading-tight">
                    {a.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {a.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Scroll Dots */}
            <div className="flex justify-center gap-2 -mt-2">
              {audiences.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active === i ? "w-6 bg-[#0047AB]" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {audiences.map((a, i) => (
              <div
                key={i}
                className="group bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-slate-50 group-hover:bg-[#0047AB]/10 rounded-2xl flex items-center justify-center text-4xl mb-6 transition-colors">
                  {a.emoji}
                </div>
                <h3 className="text-slate-900 font-black text-xl mb-4 leading-tight">
                  {a.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                  {a.text}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Accent Block (Optional, matching the reference style) */}
          <div className="mt-16 bg-[#0047AB]/5 border border-[#0047AB]/10 rounded-3xl p-6 text-center">
            <p className="text-[#0047AB] font-bold text-lg">
              Health is the foundation of every successful career.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AudienceSection;