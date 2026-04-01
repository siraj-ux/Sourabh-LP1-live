import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
// import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { Lock, CreditCard, ShieldCheck } from "lucide-react"; // Using Lucide for cleaner look

const RAZORPAY_PAYMENT_LINK = "https://pages.razorpay.com/pl_SIpsxh7hbcrVQR/view";

const RegisterSection = () => {
  // useFacebookPixel({ eventName: "PageView" });
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [shake, setShake] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.age.trim()) newErrors.age = true;
    if (!formData.city.trim()) newErrors.city = true;
    if (!formData.email.trim()) newErrors.email = true;
    if (!formData.phone.trim() || !/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = true;

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    localStorage.setItem("lastRegistration", JSON.stringify(formData));

    fetch("https://sourabh-lp-1.onrender.com/api/pre-register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch(console.error);

    // if (window.fbq) {
    //   window.fbq("track", "InitiateCheckout");
    // }

    const params = new URLSearchParams({
      full_name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      age: formData.age,
    });

    setTimeout(() => {
      window.location.href = `${RAZORPAY_PAYMENT_LINK}?${params.toString()}`;
    }, 300);
  };

  const inputClass = (field: string) =>
    `w-full bg-slate-50 border-2 rounded-2xl px-4 py-4 text-slate-900 text-sm font-semibold
     transition-all duration-300
     focus:outline-none focus:ring-4 focus:ring-blue-100
     focus:border-[#0047AB]
     ${errors[field] ? "border-red-500 bg-red-50" : "border-slate-100"}`;

  return (
    <section id="register" className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,71,171,0.08)] border border-slate-100 overflow-hidden">
            
            {/* Header / Pricing Banner */}
            <div className="bg-[#0047AB] p-8 md:p-10 text-center text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white,transparent)]" />
                
                <h2 className="text-2xl md:text-4xl font-black mb-4 relative z-10">
                    Workshop Mein Apni <span className="text-yellow-400">Seat Book</span> Karein
                </h2>
                
                <div className="flex items-center justify-center gap-4 relative z-10 bg-white/10 w-fit mx-auto px-6 py-2 rounded-full backdrop-blur-md border border-white/20">
                    <span className="text-sm font-bold uppercase tracking-wider opacity-80">Special Price</span>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl font-black text-yellow-400">₹99</span>
                        <span className="text-sm line-through opacity-50 font-bold">₹499</span>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-12">
              {/* Trust Badge */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                  <Lock size={14} className="text-[#0047AB]" />
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-tight">Secure Checkout by Razorpay</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-100">
                  <ShieldCheck size={14} className="text-[#0047AB]" />
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-tight">SSL Encrypted</span>
                </div>
              </div>

              <form
                className={`space-y-5 max-w-lg mx-auto ${shake ? "animate-shake" : ""}`}
                onSubmit={handleSubmit}
              >
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    placeholder="Enter your name"
                    className={inputClass("name")}
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Age & City */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Age</label>
                    <input
                      type="number"
                      placeholder="Years"
                      className={inputClass("age")}
                      value={formData.age}
                      onChange={e => setFormData({ ...formData, age: e.target.value.replace(/\D/g, "") })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">City</label>
                    <input
                      placeholder="Your City"
                      className={inputClass("city")}
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className={inputClass("email")}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">WhatsApp Phone Number</label>
                  <input
                    type="tel"
                    maxLength={10}
                    placeholder="10 digit number"
                    className={inputClass("phone")}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "") })}
                  />
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-lg md:text-xl font-black py-5 rounded-2xl shadow-xl shadow-orange-100 transition-all active:scale-95 uppercase tracking-tight flex items-center justify-center gap-3"
                  >
                    ABHI REGISTER KAREIN — ₹99
                  </button>
                  
                  <div className="flex items-center justify-center gap-4 mt-6">
                     <div className="h-px bg-slate-100 flex-1"></div>
                     <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">All Payment Modes Supported</span>
                     <div className="h-px bg-slate-100 flex-1"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          <p className="text-center mt-8 text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">
             India's Most Trusted Pain Relief Therapy
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegisterSection;