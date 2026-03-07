import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Check } from "lucide-react";

const painPoints = [
  "Aapne painkillers try kiye, kuch ghanton ke liye kaam karte hain, phir pain wapas aa jata hai",
  "Aapne physiotherapy karwayi, temporarily help karti hai, lekin last nahi karti",
  "Aapne massage karwaye, us waqt achha lagta hai, pain wapas aa jata hai",
  "Aapne lakhs kharch kiye treatments pe, phir bhi pain hai",
  'Doctors kehte hain "it\'s age" ya "iske saath jeena seekho"',
  "Doctors kehte hain surgery ka time aa gaya hai...",
];

const PainPointsSection = () => {
  const [checked, setChecked] = useState<boolean[]>(new Array(painPoints.length).fill(false));
  
  const toggle = (i: number) => {
    setChecked(prev => { 
      const next = [...prev]; 
      next[i] = !next[i]; 
      return next; 
    });
  };

  const count = checked.filter(Boolean).length;

  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto">
        
        <AnimatedSection>
          {/* Headline */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
              Kya Aap Bhi Head, Shoulders, Knees Ya Heels Pain Se Jujha <span className="text-[#0047AB]">Rahe Hai ?</span>
            </h2>

            {/* NEW HIGHLIGHTED TEXT */}
            <div className="bg-yellow-100 border border-yellow-200 px-4 py-2 rounded-lg inline-block shadow-sm">
              <p className="text-sm md:text-base text-slate-900 font-black">
                Neeche Click Karke Share Karein Ki Aap Kis Type Ka Pain Face Kar Rahe Hain:
              </p>
            </div>
          </div>

          {/* Checklist Area */}
          <div className="space-y-3">
            {painPoints.map((p, i) => (
              <button 
                key={i} 
                onClick={() => toggle(i)}
                className={`group w-full flex items-center gap-4 bg-white border rounded-xl p-4 text-left transition-all duration-200
                ${checked[i] 
                  ? "border-[#0047AB] bg-blue-50/40 shadow-sm" 
                  : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                {/* Square Checkbox UI */}
                <div className={`
                  flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200
                  ${checked[i] 
                    ? "bg-[#0047AB] border-[#0047AB]" 
                    : "bg-white border-slate-300 group-hover:border-[#0047AB]/50"
                  }
                `}>
                  {checked[i] && (
                    <Check className="w-4 h-4 text-white stroke-[3px]" />
                  )}
                </div>

                {/* Text Content */}
                <p className={`text-sm md:text-base leading-snug transition-colors ${
                  checked[i] ? "text-[#0047AB] font-semibold" : "text-slate-700 font-medium"
                }`}>
                  {p}
                </p>
              </button>
            ))}
          </div>

          {/* Result Feedback: Shows only if users interact */}
          {count >= 2 && (
            <div className="mt-10 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center animate-in fade-in zoom-in duration-300">
              <p className="text-base md:text-lg font-bold text-slate-900">
                Aapne {count} boxes check kiye hain...
              </p>
              <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                Pain ke saath jeena normal nahi hai. <br />
                <span className="text-[#0047AB] font-bold underline decoration-2 underline-offset-4">
                  Aapko is therapy ki zarurat hai.
                </span>
              </p>
            </div>
          )}
        </AnimatedSection>

      </div>
    </section>
  );
};

export default PainPointsSection;