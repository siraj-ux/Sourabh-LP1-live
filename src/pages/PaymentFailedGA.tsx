import { useNavigate } from "react-router-dom";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full">
        
        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          
          {/* Top Status Header */}
          <div className="bg-red-500 p-8 md:p-10 text-center text-white relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,transparent)]" />
            
            <div className="flex justify-center mb-4 relative z-10">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/20">
                <AlertCircle className="w-10 h-10 text-white" />
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-1 relative z-10">
              Payment <span className="text-yellow-400">Failed</span>
            </h1>
            <p className="text-red-100 font-bold uppercase tracking-widest text-[10px] relative z-10">
              Transaction Unsuccessful
            </p>
          </div>

          <div className="p-8 md:p-10 text-center">
            {/* Error Message */}
            <div className="mb-10">
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Oh no! Kuch gadbad ho gayi.
              </h2>
              <p className="text-slate-500 font-medium text-sm md:text-base leading-relaxed">
                Aapki transaction complete nahi ho payi. Kripya apna internet connection aur payment method check karke phir se koshish karein.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => navigate("/register-section-fb")}
                className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white font-black text-lg py-5 rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-95 uppercase tracking-tight flex items-center justify-center gap-3 group"
              >
                <RefreshCcw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                TRY AGAIN
              </button>
              
              <button
                onClick={() => navigate("/")}
                className="w-full flex items-center justify-center gap-2 py-3 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-[#0047AB] transition-colors"
              >
                <Home size={14} />
                Back to Homepage
              </button>
            </div>

            {/* Support Info */}
            <div className="mt-10 pt-6 border-t border-slate-50">
              <div className="flex items-center justify-center gap-2 bg-blue-50/50 py-2 px-4 rounded-full inline-flex">
                 <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                 <p className="text-[10px] font-black text-[#0047AB] uppercase tracking-wider">
                   100% Secure Payment Support
                 </p>
              </div>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <p className="mt-8 text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
          FM4 Therapy Pain Relief Workshop
        </p>

      </div>
    </div>
  );
};

export default PaymentFailed;