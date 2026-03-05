import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";
import { Play } from "lucide-react"; 
import AnimatedSection from "./AnimatedSection";

const HeroSection = () => {
  const { config } = useWorkshopConfig();
  const [isPlaying, setIsPlaying] = useState(false); 
  
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
    /* Reduced padding and removed min-h-screen */
    <section className="relative min-h-0 flex flex-col items-center bg-[#0047AB] overflow-hidden px-4 py-8 md:py-12">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380] opacity-100" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
        
        {/* Top Badge - reduced mb */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-[10px] md:text-sm font-semibold mb-4">
          2-Day Live Workshop • 30,000+ Cases Reversed • <span className="text-yellow-400">⭐ 4.6</span>
        </div>

        {/* Headlines - reduced mb */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.15] mb-4 px-2">
          Dard ko bolo <span className="text-yellow-400">bye</span>, <br className="hidden md:block" />
          aaram ko bolo <span className="text-yellow-400">hi</span>
        </h1>

        <div className="space-y-1 mb-6 md:mb-8 px-4">
          <p className="text-base md:text-xl font-medium opacity-95">
            without ever stepping into a Clinic
          </p>
          <p className="text-xs md:text-base opacity-80 max-w-xl mx-auto leading-relaxed">
            Non-Invasive therapy for busy professionals & entrepreneurs to feel like your best self again.
          </p>
        </div>

        {/* Reduced gap from 12 to 8 */}
        <div className="flex flex-col items-center gap-8 md:gap-10">
          
          {/* CTA Card - reduced internal padding slightly */}
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-[2rem] p-5 md:p-8 border border-white/10 shadow-2xl">
            <div className="mb-4">
              <h3 className="text-lg md:text-2xl font-bold mb-1">
                {formatDateWithSuffix(day1)} & {formatDateWithSuffix(day2)}
              </h3>
              <p className="text-[11px] md:text-sm opacity-90 uppercase tracking-wider">
                {formatTime(day1)} & {formatTime(day2)} | Hindi & English
              </p>
            </div>

            <Button 
              onClick={handleBooking}
              className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-base md:text-xl font-black py-5 md:py-7 rounded-2xl shadow-lg transition-all active:scale-95 mb-3 uppercase tracking-tight"
            >
              BOOK NOW — Sirf 41 Seats!
            </Button>
            
            <p className="text-[10px] font-bold tracking-[0.1em] uppercase opacity-70 mb-5">
              Full Hone Par Booking Band!
            </p>

            {/* Timer - reduced pt */}
            <div className="flex justify-center items-center gap-4 md:gap-8 border-t border-white/10 pt-4">
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

          {/* Video Section */}
          <AnimatedSection>
            <div className="w-full max-w-4xl mx-auto px-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative bg-transparent rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 aspect-video">
                  
                  {!isPlaying ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group/thumb"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img 
                        src="/1.webp" 
                        alt="Video Preview" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/thumb:scale-105"
                      />
                      
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/thumb:bg-black/30 transition-colors duration-300">
                        <div className="bg-yellow-400 text-black p-4 md:p-6 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.5)] group-hover/thumb:scale-110 transition-transform duration-300">
                          <Play size={32} fill="currentColor" className="ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://player.vimeo.com/video/1109262583?h=9b74413547&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479"
                      allow="autoplay; fullscreen; picture-in-picture"
                      className="absolute top-0 left-0 w-full h-full border-0 outline-none"
                      title="Workshop Intro Video"
                      frameBorder="0"
                    ></iframe>
                  )}

                </div>
              </div>
              <p className="mt-3 text-[10px] md:text-xs font-medium opacity-60 italic">
                Click above to watch the recovery demo.
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;