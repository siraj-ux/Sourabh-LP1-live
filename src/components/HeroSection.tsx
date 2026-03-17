import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Clock, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";
// import CheckoutButton from "./CheckoutButton";
import AddToCartButton from "./AddToCartButton";

const SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbzpttKDUxieudBnZV1NwfQFtAaBvLvIU5zpip5NKfhzlVqQrDO7tR2VIi8e-j1cgVXjkA/exec";

const CACHE_KEY = "workshopConfig";

// Converts Google Sheets date "3/7/2026 20:00:00" → "2026-03-07T20:00:00"
function normalizeDate(value) {
  if (/^\d{1,2}\/\d{1,2}\/\d{4}/.test(value)) {
    const [datePart, timePart = "00:00:00"] = value.split(" ");
    const [month, day, year] = datePart.split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T${timePart}`;
  }
  return value;
}

const HeroSection = () => {
  const [config, setConfig] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const day1 = config?.day1_datetime || "2026-03-07T20:00:00";
  const day2 = config?.day2_datetime || "2026-03-08T10:00:00";
  const paymentLink =
    config?.payment_link ||
    "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

  const [timeLeft, setTimeLeft] = useState({
    hours: "05",
    min: "00",
    sec: "00",
  });

  // FETCH CONFIG
  useEffect(() => {
    const loadConfig = async () => {
      try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
          setConfig(JSON.parse(cached));
        }

        const res = await fetch(SHEETS_URL);
        const data = await res.json();

        const formatted = {
          ...data,
          day1_datetime: normalizeDate(data.day1_datetime),
          day2_datetime: normalizeDate(data.day2_datetime),
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify(formatted));
        setConfig(formatted);
      } catch (err) {
        console.error("Config fetch failed", err);
      }
    };

    loadConfig();
  }, []);

  // 5 HOUR COUNTDOWN
  useEffect(() => {
    let totalSecondsRemaining = 5 * 60 * 60;

    const updateTimer = () => {
      if (totalSecondsRemaining <= 0) return;

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
    // Track Add to Cart event
    if (window.fbq) {
      window.fbq("track", "AddToCart", {
        content_name: "Pain Relief Workshop",
        content_category: "Workshop",
        content_ids: ["workshop_2026"],
        content_type: "product",
        value: 41.00, // Adjust this to your actual workshop price
        currency: "INR"
      });
      
      // Also track Subscribe event
      window.fbq("track", "Subscribe");
    }

    setTimeout(() => {
      window.location.href = paymentLink;
    }, 150);
  };

  return (
    <section className="relative min-h-0 flex flex-col items-center bg-[#0047AB] overflow-hidden px-4 py-2 md:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white w-full">

        {/* BADGE */}
        <div className="inline-block bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-0.5 text-[9px] md:text-sm font-semibold mb-2 md:mb-4">
          30,000+ Musculoskeletal Cases Recovered. Restoring Movement. Rebuilding Lives.
          <span className="text-yellow-400"> ⭐ 4.6</span>
        </div>

        {/* HEADLINE */}
        <h1 className="text-2xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.2] mb-1.5 md:mb-4 px-2">
          Spine, Knee Aur Neck Pain Se{" "}
          <span className="text-yellow-400">Lasting Relief</span> Kaise Paayein?
        </h1>

        <div className="mb-2 md:mb-6 px-4">
          <p className="text-[11px] md:text-xl font-medium opacity-95 max-w-3xl mx-auto leading-tight md:leading-relaxed">
            Achieve kare lasting relief from spine, knee and neck pain bina kisi medicines, surgeries, physiotherapy, chiropractic care ya oil massages.
          </p>
        </div>

        {/* GOOGLE REVIEW IMAGE */}
        <div className="flex justify-center mb-3 md:mb-8 px-4">
          <img
            src="/2.png"
            alt="Google Reviews"
            className="h-7 md:h-10 w-auto rounded-lg"
          />
        </div>

        {/* BOOKING CARD */}
        <div className="w-full max-w-lg mx-auto bg-white/10 backdrop-blur-xl rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-7 border border-white/10 shadow-2xl">

          <div className="grid grid-cols-2 gap-2 md:gap-4 mb-3 md:mb-5">

            {/* DATE */}
            <div className="bg-white rounded-lg md:rounded-2xl p-2 md:p-4 border shadow-sm flex items-center gap-2">
              <Calendar className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
              <div className="text-left">
                <p className="text-[9px] md:text-sm font-bold text-gray-500 uppercase">
                  Date
                </p>
                <p className="text-[11px] md:text-lg font-black text-gray-900">
                  {formatDateWithSuffix(day1)} <br />
                  {formatDateWithSuffix(day2)}
                </p>
              </div>
            </div>

            {/* TIME */}
            <div className="bg-white rounded-lg md:rounded-2xl p-2 md:p-4 border shadow-sm flex items-center gap-2">
              <Clock className="w-4 h-4 md:w-6 md:h-6 text-gray-700" />
              <div className="text-left">
                <p className="text-[9px] md:text-sm font-bold text-gray-500 uppercase">
                  Time
                </p>
                <p className="text-[11px] md:text-lg font-black text-gray-900">
                  Day 1: {formatTime(day1)} <br />
                  Day 2: {formatTime(day2)}
                </p>
              </div>
            </div>
          </div>

          {/* BOOK BUTTON */}
          {/* <Button
            onClick={handleBooking}
            className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-sm md:text-xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 mb-1 uppercase"
          >
            BOOK NOW — Sirf 41 Seats!
          </Button> */}
          {/* <CheckoutButton
             onClick={handleBooking}
             label="BOOK NOW — Sirf 41 Seats!"
             className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-sm md:text-xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 mb-1 uppercase"
           /> */}
           <AddToCartButton
  onClick={handleBooking}
  label="BOOK NOW — Sirf 41 Seats! "
  className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-sm md:text-xl py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg active:scale-95 uppercase"
/>
          {/* COUNTDOWN */}
          <div className="flex justify-center items-center gap-4 border-t border-white/10 pt-3">
            <div className="text-center">
              <div className="text-lg md:text-3xl font-black text-yellow-400">
                {timeLeft.hours}
              </div>
              <div className="text-[8px] uppercase">Hours</div>
            </div>

            <div className="text-lg">:</div>

            <div className="text-center">
              <div className="text-lg md:text-3xl font-black text-yellow-400">
                {timeLeft.min}
              </div>
              <div className="text-[8px] uppercase">Mins</div>
            </div>

            <div className="text-lg">:</div>

            <div className="text-center">
              <div className="text-lg md:text-3xl font-black text-yellow-400">
                {timeLeft.sec}
              </div>
              <div className="text-[8px] uppercase">Secs</div>
            </div>
          </div>
        </div>

        {/* VIDEO SECTION */}
        <AnimatedSection className="w-full mt-6">
          <div className="w-full md:max-w-3xl mx-auto">
            <div className="relative aspect-video rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white/15">

              {!isPlaying ? (
                <div
                  className="absolute inset-0 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src="/1.webp"
                    alt="Video Preview"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-yellow-400 text-blue-900 rounded-full p-4 md:p-6 shadow-2xl hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 md:w-10 md:h-10 fill-current" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/9VoVN6gfhxg?autoplay=1"
                  title="Workshop Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default HeroSection;