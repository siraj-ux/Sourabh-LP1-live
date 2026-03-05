import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";

const HeroSection = () => {
  const { config } = useWorkshopConfig();
  
  const day1 = config?.day1_datetime || "2026-03-07T20:00:00";
  const day2 = config?.day2_datetime || "2026-03-08T10:00:00";
  const paymentLink = config?.payment_link || "#";

  const [timeLeft, setTimeLeft] = useState({ hours: "00", min: "00", sec: "00" });

  useEffect(() => {
    const target = new Date(day1).getTime();
    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff > 0) {
        const totalHours = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({
          hours: totalHours.toString().padStart(2, "0"),
          min: mins.toString().padStart(2, "0"),
          sec: secs.toString().padStart(2, "0"),
        });
      }
    };
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval);
  }, [day1]);

  const handleBooking = () => {
    // @ts-ignore
    if (window.fbq) {
      window.fbq("track", "AddToCart");
      window.fbq("track", "Subscribe");
    }
    window.location.href = paymentLink;
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0047AB] overflow-hidden px-4 py-12 md:py-16">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380] opacity-100" />

      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        
        {/* Top Badge: Smaller on mobile */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-[10px] md:text-sm font-semibold mb-6">
          2-Day Live Workshop • 30,000+ Cases Reversed • <span className="text-yellow-400">⭐ 4.6</span>
        </div>

        {/* Main Headline: Scaled down for mobile responsiveness */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.15] mb-6 px-2">
          Dard ko bolo <span className="text-yellow-400">bye</span>, <br className="hidden md:block" />
          aaram ko bolo <span className="text-yellow-400">hi</span>
        </h1>

        {/* Sub-headlines: Merged and compact */}
        <div className="space-y-2 mb-8 md:mb-10 px-4">
          <p className="text-base md:text-xl font-medium opacity-95">
            without ever stepping into a Clinic
          </p>
          <p className="text-xs md:text-base opacity-80 max-w-xl mx-auto leading-relaxed">
            Non-Invasive therapy for busy professionals & entrepreneurs to feel like your best self again.
          </p>
        </div>

        {/* CTA Card: Tighter padding and more compact */}
        <div className="max-w-lg mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-5 md:p-8 border border-white/10 shadow-2xl">
          <div className="mb-5">
            <h3 className="text-lg md:text-2xl font-bold mb-1">
              {formatDateWithSuffix(day1)} & {formatDateWithSuffix(day2)}
            </h3>
            <p className="text-[11px] md:text-sm opacity-90 uppercase tracking-wider">
              {formatTime(day1)} & {formatTime(day2)} | Hindi & English
            </p>
          </div>

          <Button 
            onClick={handleBooking}
            className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-base md:text-xl font-black py-6 md:py-7 rounded-xl shadow-lg transition-all active:scale-95 mb-4"
          >
            BOOK NOW — Sirf 41 Seats!
          </Button>
          
          <p className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-70 mb-6">
            Full Hone Par Booking Band!
          </p>

          {/* Compact Timer */}
          <div className="flex justify-center items-center gap-4 md:gap-8 border-t border-white/10 pt-5">
             <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-400">{timeLeft.hours}</div>
                <div className="text-[9px] opacity-60 font-bold uppercase">Hours</div>
             </div>
             <div className="text-xl opacity-30">:</div>
             <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-400">{timeLeft.min}</div>
                <div className="text-[9px] opacity-60 font-bold uppercase">Mins</div>
             </div>
             <div className="text-xl opacity-30">:</div>
             <div className="text-center">
                <div className="text-2xl md:text-3xl font-black text-yellow-400">{timeLeft.sec}</div>
                <div className="text-[9px] opacity-60 font-bold uppercase">Secs</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;