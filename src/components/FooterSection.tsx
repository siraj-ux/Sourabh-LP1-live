const FooterSection = () => (
  <footer className="relative bg-[#0047AB] overflow-hidden py-12 px-4 border-t border-white/10 pb-24">
    {/* Background Radial Glow - Matching Hero Section */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-[#0047AB] to-[#003380] opacity-100" />

    <div className="relative z-10 max-w-4xl mx-auto">
      {/* Heading - White and Bold like Hero */}
      <h3 className="text-white font-black text-xl mb-8 text-center uppercase tracking-tight">
        Important <span className="text-yellow-400">Information</span>
      </h3>

      <div className="space-y-6">
        {/* Disclaimer Block - Glassmorphism style */}
        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border-l-4 border-yellow-400 border-y border-r border-white/10 shadow-2xl">
          <p className="text-white/90 text-sm leading-relaxed">
            <strong className="text-yellow-400 font-bold block mb-1 uppercase text-xs tracking-wider">
              Disclaimer:
            </strong> 
            FM4 Therapy ek lifestyle aur movement-based pain management approach hai. Yeh professional medical advice, diagnosis, ya treatment ki jagah nahi le sakti. Individual results vary ho sakte hain. Kisi bhi physical program start karne se pehle hamesha apne physician se consult karein.
          </p>
        </div>

        {/* Note 1 */}
        <p className="text-white/70 text-xs md:text-sm leading-relaxed">
          <strong className="text-white font-bold">Magic Pill Nahi Hai:</strong> Hum "raat bhar mein pain-free ho jao" programs nahi bechte. FM4 Therapy mein aapki participation, consistency, aur commitment chahiye.
        </p>

        {/* Note 2 */}
        <p className="text-white/50 text-[10px] md:text-xs leading-relaxed italic border-t border-white/10 pt-4">
          <strong className="text-white/70 font-bold not-italic">Results Statement:</strong> Un clients ke voluntary surveys ke basis pe jo poora FM4 Therapy program complete kiya. Results individual effort pe vary karte hain.
        </p>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
            Copyright © 2025 FM4 Therapy. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;