import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { Play, Clock, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
// Import the helpers to format the Google Sheet dates
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";

const HeroSection = () => {
  const { config } = useWorkshopConfig();
  const [isPlaying, setIsPlaying] = useState(false);

  const day1 = config?.day1_datetime || "2025-03-07T20:00:00";
  const day2 = config?.day2_datetime || "2025-03-08T10:00:00";
  const paymentLink = config?.payment_link || "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

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
    if (window.fbq) {
      window.fbq("track", "AddToCart");
      window.fbq("track", "Subscribe");
    }
    setTimeout(() => {
      window.location.href = paymentLink;
    }, 150);
  };

  return (
    <section className="relative min-h-0 flex flex-col items-center bg-[#0047AB] overflow-hidden px-4 py-2 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380] opacity-100" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white w-full">
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-0.5 text-[9px] md:text-sm font-semibold mb-2 md:mb-4">
          2-Day Live Workshop • 30,000+ Cases Reversed • <span className="text-yellow-400">⭐ 4.6</span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] mb-1.5 md:mb-4 px-2">
          Spine, Knee Aur Neck Pain Se <span className="text-yellow-400">Natural Relief</span> Kaise Paayein?
        </h1>

        <div className="mb-2 md:mb-6 px-4">
          <p className="text-[11px] md:text-xl font-medium opacity-95 max-w-3xl mx-auto leading-tight md:leading-relaxed">
            Long-Term Relief Ke Liye, Bina Medicines, Surgery, Physio, Chiro Ya Oil Massages Ke.
          </p>
        </div>

        <div className="flex justify-center mb-3 md:mb-8 px-4">
          <div className="overflow-hidden rounded-lg md:rounded-2xl shadow-lg border border-white/10">
            <img
              src="/2.png"
              alt="4.6 Rating | 1000+ Reviews On Google"
              className="h-7 md:h-10 w-auto object-contain brightness-110"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 md:gap-10 w-full">
          {/* Main Booking Box */}
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-7 border border-white/10 shadow-2xl">
            
            {/* COMPACT DATE/TIME SECTION - UPDATED TO BE DYNAMIC */}
            <div className="grid grid-cols-2 gap-1.5 md:gap-4 mb-3 md:mb-5">
              
              {/* Date Card - Dynamic */}
              <div className="bg-white rounded-lg md:rounded-2xl p-1.5 md:p-4 border border-gray-200 shadow-sm flex items-center gap-1.5 md:gap-3">
                <div className="bg-gray-100 p-1 md:p-2 rounded-full shrink-0">
                  <Calendar className="w-3.5 h-3.5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="text-left">
                  <p className="text-[7px] md:text-xs font-bold text-gray-500 uppercase tracking-tight md:tracking-wide">
                    Date
                  </p>
                  <p className="text-[8.5px] md:text-sm font-black text-gray-900 leading-[1.1] md:leading-tight">
                    {formatDateWithSuffix(day1)} &<br />
                    {formatDateWithSuffix(day2)}
                  </p>
                </div>
              </div>

              {/* Time Card - Dynamic */}
              <div className="bg-white rounded-lg md:rounded-2xl p-1.5 md:p-4 border border-gray-200 shadow-sm flex items-center gap-1.5 md:gap-3">
                <div className="bg-gray-100 p-1 md:p-2 rounded-full shrink-0">
                  <Clock className="w-3.5 h-3.5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="text-left">
                  <p className="text-[7px] md:text-xs font-bold text-gray-500 uppercase tracking-tight md:tracking-wide">
                    Time
                  </p>
                  <p className="text-[8.5px] md:text-sm font-black text-gray-900 leading-[1.1] md:leading-tight">
                    Day 1: {formatTime(day1)}<br />
                    Day 2: {formatTime(day2)}
                  </p>
                </div>
              </div>

            </div>
            {/* END OF DATE/TIME SECTION */}

            <Button
              onClick={handleBooking}
              className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-sm md:text-xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 mb-1 uppercase"
            >
              BOOK NOW — Sirf 41 Seats!
            </Button>

            <p className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2 md:mb-3">
              Full Hone Par Booking Band!
            </p>

            <div className="flex justify-center items-center gap-3 md:gap-8 border-t border-white/10 pt-2 md:pt-3">
              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400 leading-none">{timeLeft.hours}</div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase mt-0.5">Hours</div>
              </div>
              <div className="text-md opacity-30 mb-1">:</div>
              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400 leading-none">{timeLeft.min}</div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase mt-0.5">Mins</div>
              </div>
              <div className="text-md opacity-30 mb-1">:</div>
              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400 leading-none">{timeLeft.sec}</div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase mt-0.5">Secs</div>
              </div>
            </div>
          </div>

          <AnimatedSection className="w-full">
            <div className="w-full md:max-w-3xl mx-auto px-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-[1.2rem] md:rounded-[2rem] blur opacity-25"></div>
                <div className="relative w-full aspect-video bg-transparent rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white/15">
                  {!isPlaying ? (
                    <div
                      className="absolute inset-0 w-full h-full cursor-pointer group/thumb"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img
                        src="/1.webp"
                        alt="Video Preview"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/thumb:bg-black/30 transition-colors duration-300">
                        <div className="bg-yellow-400 text-black p-2.5 md:p-6 rounded-full shadow-xl">
                          <Play size={20} fill="currentColor" className="md:w-8 md:h-8 ml-0.5 md:ml-1" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://player.vimeo.com/video/1109262583?h=9b74413547&autoplay=1"
                      allow="autoplay; fullscreen"
                      className="absolute inset-0 w-full h-full border-0"
                      title="Workshop Intro Video"
                    ></iframe>
                  )}
                </div>
              </div>
              <p className="mt-2 md:mt-4 text-[9px] md:text-xs font-bold opacity-70 uppercase tracking-widest text-yellow-400">
                Dekhiye FM4 Therapy Live Action Mein
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;