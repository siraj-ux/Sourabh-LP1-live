import { useNavigate } from "react-router-dom";
import { FaExclamationCircle } from "react-icons/fa";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <div className="max-w-md w-full">
        
        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
          
          {/* Warning Icon Section */}
          <div className="flex justify-center mb-6">
            <div className="bg-red-50 p-6 rounded-full border border-red-100">
              <FaExclamationCircle className="text-5xl text-red-500" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Payment <span className="text-red-600">Failed</span>
          </h1>

          {/* Error Message */}
          <p className="text-slate-600 mb-10 font-medium leading-relaxed">
            Aapki transaction complete nahi ho payi. Kripya ek baar phir se koshish karein ya apna payment method check karein.
          </p>

          {/* Action Button - Styled like Hero "BOOK NOW" */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/register-section-fb")}
              className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white font-black text-lg py-5 rounded-2xl shadow-lg shadow-orange-100 transition-all active:scale-95 uppercase tracking-tight"
            >
              TRY AGAIN →
            </button>
            
            <button
              onClick={() => navigate("/")}
              className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-[#0047AB] transition-colors"
            >
              Back to Homepage
            </button>
          </div>

          {/* Secure Badge Info */}
          <div className="mt-10 pt-6 border-t border-slate-50">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">
              100% Secure Payment Gateway
            </p>
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