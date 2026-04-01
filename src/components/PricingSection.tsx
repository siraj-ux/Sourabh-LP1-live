import { Check } from "lucide-react"; // Import for professional checkmarks
import AnimatedSection from "./AnimatedSection";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import AddToCartButton from "./AddToCartButton";

const PricingSection = () => {
  const { config } = useWorkshopConfig();

  // Handle Scroll to Form
  const handleScrollToForm = () => {
    // if (window.fbq) {
    //   window.fbq("track", "AddToCart");
    //   window.fbq("track", "Subscribe");
    // }

    // Target the checkout section ID
    const checkoutElement = document.getElementById("checkout");
    if (checkoutElement) {
      checkoutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-1 md:py-12 px-4">
      {/* Outer Container */}
      <div className="max-w-lg mx-auto bg-slate-50 border border-slate-100 rounded-3xl px-6 md:px-8 py-8 md:py-10 shadow-sm">
        <AnimatedSection>

          <h2 className="text-2xl md:text-3xl font-black text-center mb-8 text-slate-900 leading-tight">
            Limited Seats Available—<span className="text-[#0047AB]">Abhi Register Karein</span>
          </h2>

          {/* Card */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 text-center shadow-xl">

            {/* PRICE */}
            <div className="mb-6 flex items-center justify-center">
              <span className="text-slate-400 line-through text-lg font-bold">
                ₹499
              </span>
              <span className="text-5xl md:text-6xl font-black text-[#0047AB] ml-4">
                ₹99
              </span>
            </div>

            <div className="inline-block bg-orange-50 text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-8">
              80% OFF — Special Launch Price
            </div>

            {/* FEATURES */}
            <div className="space-y-4 text-left mb-10">
              {[
                "2-Day Live Workshop",
                "Personalized Pain Assessment",
                "FM4 Therapy Live Demo",
                "Lifetime Access to Resources",
                "Sourobh Kulkorni Ke Saath Q&A",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600 stroke-[4px]" />
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-bold">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTON - Now points to form */}
            <AddToCartButton
              label="APNI SEAT ABHI BOOK KAREIN"
              showPrice={false} 
              onClick={handleScrollToForm}
              className="w-full relative px-6 py-5 rounded-2xl 
              bg-[#0047AB] text-white font-black text-lg
              shadow-[0_10px_20px_rgba(0,71,171,0.3)]
              transition-all duration-300
              hover:scale-[1.02] hover:-translate-y-1
              hover:shadow-[0_15px_30px_rgba(0,71,171,0.4)]
              active:scale-95 uppercase tracking-tight"
            />

            {/* Scarcity Text */}
            <p className="text-slate-500 font-bold text-xs mt-6 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Sirf 41 Seats Bachi Hain | Full Hone Par Booking Band
            </p>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PricingSection;