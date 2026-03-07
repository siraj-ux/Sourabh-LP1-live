import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const painPoints = [
  "Aapne painkillers try kiye, kuch ghanton ke liye kaam karte hain, phir pain wapas aa jata hai",
  "Aapne physiotherapy karwayi, temporarily help karti hai, lekin last nahi karti",
  "Aapne massage karwaye, us waqt achha lagta hai, pain wapas aa jata hai",
  // CHANGED BELOW
  "Apne lakhon rupiya kharch kiya treatments par, phir bhi pain barkarar hai?", 
  'Doctors kehte hain "it\'s age" ya "iske saath jeena seekho"',
  // CHANGED BELOW (Surgery point replaced with the requested text)
  "Apne lakhon rupiya kharch kiya treatments par, phir bhi pain barkarar hai?",
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
    <section className="py-12 md:py-8 px-4">
      <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl px-6 md:px-10 py-8 md:py-10">
        <AnimatedSection>
          <h2 className="font-black text-center text-2xl md:text-4xl mb-4">
            Kya Aap Apni Spine, Knee, Ya Neck Pain Ko Reverse Karne Mein Struggle Kar Rahe Hain?
          </h2>
          <p className="font-bold text-blue-100 text-center text-lg md:text-xl mb-1">
            Agar haan, toh aap akele nahi hain. Thousands of patients ne same challenges face kiye hain.
          </p>
          
          <span className="block text-primary font-bold text-center text-lg md:text-xl mb-6 mt-10">
            Neeche click karke batao aap kya experience kar rahe ho:
          </span>

          <div className="space-y-3">
            {painPoints.map((p, i) => (
              <button 
                key={i} 
                onClick={() => toggle(i)}
                className={`w-full flex items-start gap-3 bg-white/5 border rounded-xl p-4 shadow-sm text-left transition-all ${checked[i] ? "border-primary ring-1 ring-primary" : "border-slate-700"}`}
              >
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${checked[i] ? "bg-primary border-primary" : "border-slate-500"}`}>
                  {checked[i] && (
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <p className={`text-sm md:text-base ${checked[i] ? "text-white font-bold" : "text-slate-300"}`}>
                  {p}
                </p>
              </button>
            ))}
          </div>

          {count >= 2 && (
            <div className="mt-10 bg-primary/10 border border-primary/30 rounded-xl p-6 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-white text-lg">
                Agar aapne 2 se zyada boxes check kiye hain... <strong className="text-yellow-400">Congratulations...</strong>
              </p>
              <p className="text-slate-300 mt-2">
                Aap officially pain ke saath hamesha jeene waale hain...{" "}
                <strong className="text-primary underline decoration-2 underline-offset-4">
                  jab tak aap kuch naya try nahi karte.
                </strong>
              </p>
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainPointsSection;