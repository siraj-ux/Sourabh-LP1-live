import AnimatedSection from "./AnimatedSection";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { AlertCircle } from "lucide-react"; // Added for a subtle urgency icon

const urgencyItems = [
  { text: "Zyada Pain:", desc: "Untreated conditions time ke saath worse hoti hain" },
  { text: "Lost Experiences:", desc: "Activities miss ho rahi hain jo aap love karte hain" },
  { text: "Higher Costs:", desc: "Baad mein zyada expensive treatments" },
  { text: "Surgery Ka Risk:", desc: "Irreversible procedures jo aap avoid kar sakte the" },
  { text: "Quality of Life:", desc: "Pain mein guzra har din woh din hai jo wapas nahi aa sakta" },
];

const UrgencySection = () => {
  const { config } = useWorkshopConfig();

  // ✅ Safe fallback - Unchanged
  const paymentLink =
    config?.payment_link || "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  return (
    <section className="bg-white py-6 md:py-12 px-4">
      {/* Container - Changed from secondary/30 to slate-50 */}
      <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-100 rounded-[2rem] px-6 md:px-10 py-10 md:py-14 text-center shadow-sm">
        <AnimatedSection>

          {/* Heading - Updated to Red for Urgency but kept the font style of the workshop */}
          <h2 className="text-red-600 text-2xl md:text-4xl font-black mb-6 leading-tight">
            Bohot Der Hone Ka Wait <span className="underline decoration-red-200">Mat Karo</span>
          </h2>

          <p className="text-slate-900 text-xl font-bold md:text-2xl mb-8">
            Har din delay karne se aap yeh kho rahe hain:
          </p>

          {/* List - Cleaned up typography and colors */}
          <div className="space-y-4 text-center mb-10">
            {urgencyItems.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-2">
                <p className="text-base md:text-lg text-slate-600 font-medium">
                  <strong className="text-slate-900 font-black uppercase text-sm md:text-base mr-1">
                    {item.text}
                  </strong> 
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Scarcity Note */}
          <div className="flex items-center justify-center gap-2 text-[#0047AB] font-bold mb-8 bg-[#0047AB]/5 w-fit mx-auto px-6 py-2 rounded-full border border-[#0047AB]/10">
            <AlertCircle className="w-5 h-5" />
            <span>41 Seats Bachi Hain | Pain-Free Life Yahan Se Start Hoti Hai</span>
          </div>

          {/* Button - Styled to match the Workshop CTA but kept the width as requested */}
          <button
            onClick={() => {
              if (window.fbq) {
                window.fbq("track", "AddToCart");
                window.fbq("track", "Subscribe");
              }

              setTimeout(() => {
                window.location.href = paymentLink;
              }, 150);
            }}
            className="w-full md:w-auto relative px-12 md:px-24 py-5 rounded-2xl 
            bg-[#0047AB] text-white font-black text-lg
            shadow-[0_10px_25px_rgba(0,71,171,0.3)]
            transition-all duration-300
            hover:scale-105 hover:-translate-y-1
            hover:shadow-[0_15px_35px_rgba(0,71,171,0.4)]
            active:scale-95 uppercase tracking-tight"
          >
            APNI SEAT ABHI CLAIM KAREIN
          </button>

        </AnimatedSection>
      </div>
    </section>
  );
};

export default UrgencySection;