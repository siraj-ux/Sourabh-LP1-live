const FooterSection = () => (
  // Removed mt-12 (margin-top) to close the gap
  // Added pt-16 (padding-top) to keep the space inside the white area
  <footer className="bg-white py-12 px-4 border-t border-slate-100 pb-24">
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <h3 className="text-slate-900 font-black text-xl mb-8 text-center uppercase tracking-tight">
        Important Information
      </h3>

      <div className="space-y-6">
        {/* Disclaimer Block */}
        <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#0047AB]">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-900 font-bold block mb-1 uppercase text-xs tracking-wider">
              Disclaimer:
            </strong> 
            FM4 Therapy ek lifestyle aur movement-based pain management approach hai. Yeh professional medical advice, diagnosis, ya treatment ki jagah nahi le sakti. Individual results vary ho sakte hain. Kisi bhi physical program start karne se pehle hamesha apne physician se consult karein.
          </p>
        </div>

        {/* Note 1 */}
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
          <strong className="text-slate-800 font-bold">Magic Pill Nahi Hai:</strong> Hum "raat bhar mein pain-free ho jao" programs nahi bechte. FM4 Therapy mein aapki participation, consistency, aur commitment chahiye.
        </p>

        {/* Note 2 */}
        <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed italic border-t border-slate-50 pt-4">
          <strong className="text-slate-700 font-bold not-italic">Results Statement:</strong> Un clients ke voluntary surveys ke basis pe jo poora FM4 Therapy program complete kiya. Results individual effort pe vary karte hain.
        </p>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            Copyright © 2025 FM4 Therapy. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;