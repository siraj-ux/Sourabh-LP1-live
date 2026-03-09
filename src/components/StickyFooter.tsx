import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { ArrowRight, Zap, Clock } from "lucide-react"; 

const StickyFooter = () => {
  const { config } = useWorkshopConfig();

  // ✅ Safe fallback - Unchanged
  const paymentLink =
    config?.payment_link || "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] 
                 bg-white/95 backdrop-blur-md 
                 border-t border-slate-200/60 shadow-[0_-10px_25px_rgba(0,0,0,0.05)]"
    >
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Left Side: Pricing & Scarcity (Unchanged) */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xl md:text-2xl font-black text-slate-900 leading-none">
              ₹99
            </span>
            <span className="bg-orange-50 text-orange-600 text-[9px] font-black px-1.5 py-0.5 rounded uppercase border border-orange-100 hidden sm:block">
              80% OFF
            </span>
          </div>
          <p className="text-[10px] md:text-xs text-slate-500 font-bold flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            Sirf 41 seats bachi hain
          </p>
        </div>

        {/* Right Side: The Button & Urgency Text Below */}
        <div className="flex flex-col items-center gap-1.5">
          <button
            onClick={() => {
              // @ts-ignore
              if (window.fbq) {
                // window.fbq("track", "AddToCart");
                window.fbq("track", "Subscribe");
              }
              // small delay for tracking
              setTimeout(() => {
                window.location.href = paymentLink;
              }, 150);
            }}
            className="group flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full 
            bg-[#0047AB] text-white font-black text-xs md:text-sm uppercase tracking-tight
            shadow-lg shadow-[#0047AB]/20 transition-all duration-300
            hover:scale-[1.03] active:scale-95 hover:bg-[#003580]"
          >
            <span>Book My Seat</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          
          {/* Urgency Text specifically below the button */}
          <p className="text-[8px] md:text-[10px] text-red-600 font-black uppercase tracking-widest flex items-center gap-1 animate-pulse">
            <Clock size={10} className="mb-0.5" /> Bookings Close Today!
          </p>
        </div>

      </div>
    </div>
  );
};

export default StickyFooter;