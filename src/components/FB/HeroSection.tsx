import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";

const HeroSection = () => {
  const navigate = useNavigate();
  const { config } = useWorkshopConfig();
  
  // Dynamic dates from hook with reliable fallbacks
  const day1 = config.day1_datetime;
  const day2 = config.day2_datetime;

  const [timeLeft, setTimeLeft] = useState({ hours: 0, min: 0, sec: 0 });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync Timer with config dates
  useEffect(() => {
    const target = new Date(day1).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      setTimeLeft({
        hours: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [day1]); // Resets whenever day1 is fetched or updated

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE CONTENT */}
          <div className="text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6 text-sm">
              {[
                "30,000+ Musculoskeletal Cases Recovered.",
                " Restoring Movement. Rebuilding Lives.",
                "4.6 Rating",
              ].map((item, i) => (
                <span key={i} className="bg-secondary px-4 py-1.5 rounded-full font-medium shadow-[0_0_15px_rgba(255,165,0,0.6)] animate-pulse">
                  {item}
                </span>
              ))}
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-4">
              <span className="text-gradient">Spine, Knee & Neck Pain</span> Ko Hamesha Ke Liye Reverse Karne Ke Untold Secrets Jaaniye
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-black leading-tight mb-4">
              Bina Kisi <span className="text-gradient">Medicine, Surgery, Physio, ya Oil Massage Ke</span>
            </p>

            {/* EVENT DETAILS (Using dynamic formatDate helpers) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-sm font-semibold text-primary mb-6">
              <span className="shadow-[0_0_10px_rgba(255,165,0,0.7)] rounded-2xl px-3 py-1">
                <span className="flex items-center gap-3">
                  <span>{formatDateWithSuffix(day1)}</span>
                  <span>&</span>
                  <span>{formatDateWithSuffix(day2)}</span>
                </span>
              </span>
              <span>|</span>
              <span className="shadow-[0_0_10px_rgba(255,165,0,0.7)] rounded-2xl px-3 py-1">
                <span className="flex items-center gap-3">
                  <span>Day 1: {formatTime(day1)}</span>
                  <span>&</span>
                  <span>Day 2: {formatTime(day2)}</span>
                </span>
              </span>
            </div>

            {/* CTA + DYNAMIC TIMER */}
            <div className="flex flex-col items-center md:items-start">
              <div className="relative inline-block group mt-2">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                <button
                  onClick={() => {
                    // if ((window as any).fbq) {
                    //   (window as any).fbq("track", "AddToCart");
                    //   (window as any).fbq("track", "Subscribe");
                    // }
                    navigate("/register-section-fb");
                  }}
                  className="relative px-10 py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FFA000] to-[#FF6A00] text-black font-bold text-sm shadow-[0_0_15px_rgba(255,140,0,0.35)] transition-all hover:scale-105"
                >
                  BOOK NOW — Sirf <span className="relative font-black">41 Seats</span> Bachi Hain!
                </button>
              </div>

              {/* TIMER BLOCKS */}
              <div className="flex gap-4 mt-8 justify-center md:justify-start">
                {[
                  { val: timeLeft.hours, label: "HOURS" },
                  { val: timeLeft.min, label: "MIN" },
                  { val: timeLeft.sec, label: "SEC" },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="relative w-[70px] h-[70px] md:w-[80px] md:h-[80px]">
                      <div className="absolute inset-0 bg-secondary rounded-lg flex items-center justify-center text-3xl font-bold text-orange-400 shadow-[0_0_12px_rgba(255,165,0,0.2)]">
                        {String(t.val).padStart(2, "0")}
                      </div>
                    </div>
                    <span className="text-[10px] mt-2 text-muted-foreground font-bold">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE VIDEO */}
          <div className="flex justify-center order-first md:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-glow border border-border bg-card w-full max-w-[360px] md:max-w-[400px]">
              <video
                ref={videoRef}
                className="w-full aspect-[9/16] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
              >
                <source src="/videos/saurabh-intro.mp4" type="video/mp4" />
              </video>
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-full hover:bg-black/80 transition"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;