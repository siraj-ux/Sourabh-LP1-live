import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzpttKDUxieudBnZV1NwfQFtAaBvLvIU5zpip5NKfhzlVqQrDO7tR2VIi8e-j1cgVXjkA/exec";

const CACHE_KEY = "workshopConfig";

// Converts Google Sheets date "3/7/2026 20:00:00" → "2026-03-07T20:00:00"
function normalizeDate(value: string): string {
  if (/^\d{1,2}\/\d{1,2}\/\d{4}/.test(value)) {
    const [datePart, timePart = "00:00:00"] = value.split(" ");
    const [month, day, year] = datePart.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${timePart}`;
  }
  return value;
}

const HeroSection = () => {
  const [config, setConfig] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const day1 = config?.day1_datetime || "2026-03-07T20:00:00";
  const paymentLink =
    config?.payment_link ||
    "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  const [timeLeft, setTimeLeft] = useState({
    hours: "05",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    const loadConfig = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);

        if (cached) {
          setConfig(JSON.parse(cached));
          return;
        }

        const res = await fetch(SHEETS_URL);
        const data = await res.json();

        const formatted = {
          ...data,
          day1_datetime: normalizeDate(data.day1_datetime),
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify(formatted));
        setConfig(formatted);
      } catch (err) {
        console.error("Config fetch failed", err);
      }
    };

    loadConfig();
  }, []);

  useEffect(() => {
    let totalSecondsRemaining = 5 * 60 * 60;

    const updateTimer = () => {
      if (totalSecondsRemaining <= 0) {
        clearInterval(timerInterval);
        return;
      }

      totalSecondsRemaining -= 1;

      const hrs = Math.floor(totalSecondsRemaining / 3600);
      const mins = Math.floor((totalSecondsRemaining % 3600) / 60);
      const secs = totalSecondsRemaining % 60;

      setTimeLeft({
        hours: hrs.toString().padStart(2, "0"),
        min: mins.toString().padStart(2, "0"),
        sec: secs.toString().padStart(2, "0"),
      });
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleBooking = () => {
    if ((window as any).fbq) {
      (window as any).fbq("track", "AddToCart");
      (window as any).fbq("track", "Subscribe");
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
          30,000+ Musculoskeletal Cases Recovered. Restoring Movement. Rebuilding Lives.{" "}
          <span className="text-yellow-400">⭐ 4.6</span>
        </div>

        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] mb-1.5 md:mb-4 px-2">
          Spine, Knee Aur Neck Pain Se{" "}
          <span className="text-yellow-400">Lasting Relief</span> Kaise Paayein?
        </h1>

        <div className="mb-2 md:mb-6 px-4">
          <p className="text-[11px] md:text-xl font-medium opacity-95 max-w-3xl mx-auto leading-tight md:leading-relaxed">
            Achieve kare lasting relief from spine, knee and neck pain bina kisi medicines, surgeries, physiotherapy, chiropractic care ya oil massages.
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
          <div className="w-full max-w-lg bg-white/10 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-7 border border-white/10 shadow-2xl">

            <div className="grid grid-cols-2 gap-1.5 md:gap-4 mb-3 md:mb-5">

              <div className="bg-white rounded-lg md:rounded-2xl p-1.5 md:p-4 border border-gray-200 shadow-sm flex items-center gap-1.5 md:gap-3">
                <div className="bg-gray-100 p-1 md:p-2 rounded-full shrink-0">
                  <Calendar className="w-3.5 h-3.5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="text-left">
                  <p className="text-[7px] md:text-[13px] font-bold text-gray-500 uppercase tracking-tighter md:tracking-normal">
                    Date
                  </p>
                  <p className="text-[8.5px] md:text-[17px] font-black text-gray-900 leading-[1.1] md:leading-tight">
                    7th March &<br />
                    8th March
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg md:rounded-2xl p-1.5 md:p-4 border border-gray-200 shadow-sm flex items-center gap-1.5 md:gap-3">
                <div className="bg-gray-100 p-1 md:p-2 rounded-full shrink-0">
                  <Clock className="w-3.5 h-3.5 md:w-6 md:h-6 text-gray-700" />
                </div>
                <div className="text-left">
                  <p className="text-[7px] md:text-[13px] font-bold text-gray-500 uppercase tracking-tighter md:tracking-normal">
                    Time
                  </p>
                  <p className="text-[8.5px] md:text-[17px] font-black text-gray-900 leading-[1.1] md:leading-tight">
                    Day 1: 8:00 PM<br />
                    Day 2: 10:00 AM
                  </p>
                </div>
              </div>

            </div>

            <Button
              onClick={handleBooking}
              className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-sm md:text-xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 mb-1 uppercase"
            >
              BOOK NOW — Sirf 41 Seats!
            </Button>

            <p className="text-[8px] md:text-[10px] font-bold tracking-widest uppercase opacity-70 mb-2 md:mb-3">
              Full Hone Par Booking Band!
            </p>

            {/* TIMER */}
            <div className="flex justify-center items-center gap-3 md:gap-8 border-t border-white/10 pt-2 md:pt-3">
              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400">
                  {timeLeft.hours}
                </div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase">
                  Hours
                </div>
              </div>

              <div className="text-md opacity-30">:</div>

              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400">
                  {timeLeft.min}
                </div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase">
                  Mins
                </div>
              </div>

              <div className="text-md opacity-30">:</div>

              <div className="text-center">
                <div className="text-lg md:text-3xl font-black text-yellow-400">
                  {timeLeft.sec}
                </div>
                <div className="text-[7px] md:text-[8px] opacity-60 font-bold uppercase">
                  Secs
                </div>
              </div>
            </div>

            {/* Smaller Highlight Text */}
            <p className="mt-2 md:mt-3 text-[9px] md:text-sm font-semibold text-yellow-300">
              Are you also struggling from <span className="font-bold text-white">spine, knees & neck pain?</span>
            </p>

          </div>

          <AnimatedSection className="w-full">
            <div className="w-full md:max-w-3xl mx-auto px-0">
              <div className="relative group">
                <div className="relative w-full aspect-video rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white/15">
                  {!isPlaying ? (
                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => setIsPlaying(true)}
                    >
                      <img
                        src="/new-click-bite.png"
                        alt="Video Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <iframe
                      src="https://player.vimeo.com/video/1109262583?h=9b74413547&autoplay=1"
                      allow="autoplay; fullscreen"
                      className="absolute inset-0 w-full h-full border-0"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;