import { useEffect, useState } from "react";
import { FaCalendarAlt, FaClock, FaGlobe, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { useWorkshopConfig } from "@/hooks/useWorkshopConfig";
import { formatDateWithSuffix, formatTime } from "@/utils/dateHelpers";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const ThankYouFB = () => {
  const { config } = useWorkshopConfig();
  const [confetti, setConfetti] = useState(true);

  // useEffect(() => {
  //   if (window.fbq) {
  //     window.fbq("init", "945210531500711");
  //     window.fbq("track", "PageView");
  //   }
  //   localStorage.removeItem("lastRegistration");
  // }, []);

  const day1 = config?.day1_datetime || "2026-02-21T20:00:00";
  const day2 = config?.day2_datetime || "2026-02-22T10:00:00";
  const whatsappLink =
    config?.whatsapp_link || "https://chat.whatsapp.com/EYhPWBybzoO2xP35GbKKJ0";

  useEffect(() => {
    const t = setTimeout(() => setConfetti(false), 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,71,171,0.1)] border border-slate-100 overflow-hidden">
          
          {/* Top Blue Header Section */}
          <div className="bg-[#0047AB] p-8 md:p-12 text-center text-white relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,transparent)]" />
            
            {confetti && (
              <div className="flex justify-center mb-4 relative z-10 animate-bounce">
                <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                  <GiPartyPopper className="text-5xl text-yellow-400" />
                </div>
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 relative z-10">
              Thank <span className="text-yellow-400">You!</span>
            </h1>
            <p className="text-blue-100 font-bold uppercase tracking-widest text-[10px] md:text-xs relative z-10">
              Registration Confirmed
            </p>
          </div>

          <div className="p-8 md:p-10 text-center">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight">
                Aapki Seat Successfully Book Ho Gayi Hai!
              </h2>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                FM4 Therapy Live Workshop ke liye aapka registration confirm ho gaya hai. 
                Workshop details aapke email pe bhej diye jayenge.
              </p>
            </div>

            {/* Workshop Details Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 mb-8 text-left space-y-5">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <FaCalendarAlt className="text-[#0047AB] text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date</p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">
                    {formatDateWithSuffix(day1)} & {formatDateWithSuffix(day2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <FaClock className="text-[#0047AB] text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Timing</p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">
                    Day 1: {formatTime(day1)} | Day 2: {formatTime(day2)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
                  <FaGlobe className="text-[#0047AB] text-xl" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="font-bold text-slate-800 text-sm md:text-base">
                    Online Live Workshop (Hindi & English)
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Section */}
            <div className="space-y-4">
              <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
                Most Important Step
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1eb956] text-white font-black text-lg py-5 px-8 rounded-2xl shadow-lg shadow-green-100 transition-all active:scale-95 uppercase tracking-tight"
              >
                <FaWhatsapp className="text-2xl" />
                Join WhatsApp Group →
              </a>
              <div className="flex items-center justify-center gap-2 text-[11px] font-bold text-[#0047AB] opacity-80 italic">
                <span>Join karna zaroori hai for all meeting links!</span>
              </div>
            </div>

          </div>
        </div>

        {/* Branding Footer */}
        <p className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          India's Leading FM4 Pain Relief Workshop
        </p>

      </div>
    </div>
  );
};

export default ThankYouFB;