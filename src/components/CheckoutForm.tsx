import React from 'react'
import { useState } from "react";
import { Shield, Lock } from "lucide-react";
import { trackAddToCart, trackFormError, trackFormSubmit, getUTMParams } from "@/utils/gtm";
import { CURRENCY_SYMBOL, DISCOUNTED_PRICE, OG_PRICE, PRODUCT, RAZORPAY_DESCRIPTION, RAZORPAY_PRODUCT_NAME, WEBINAR_NAME } from "@/utils/product-info";
import { toast } from 'sonner';
import { useRazorpay } from '@/hooks/useRazorpay';
import { cn } from '@/lib/utils';

const CheckoutForm = () => {
    const [form, setForm] = useState({
                        fullName: "",
                        email: "",
                        city: "",
                        phone: "",
                        age: "",
                });
  
    const [errors, setErrors] = useState<Record<string, string>>({});
    const { initiatePayment, loading, error } = useRazorpay();
    
    const utmParams = getUTMParams();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setForm({ ...form, [e.target.name]: e.target.value });
            if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
            }
    } 

    const handleSuccess = (paymentId: string, orderId: string) => {
      const razorpay_params = new URLSearchParams({
        razorpay_payment_id: paymentId,
        razorpay_order_id : orderId,
        ...utmParams
      }) 

      window.location.href = `/thank-you?${razorpay_params.toString()}`;
    };
  
    const handleFailure = (error: string) => {
      toast.error("Payment Failed")
    };
    
    const validateForm = () => {
        const newErrors: Record<string, string> = {};
    
        if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!form.city.trim()) newErrors.city = "City is required";
        if (!form.age.trim()) {
            newErrors.age = "Age is required";
            } else if (!/^\d{2}$/.test(form.age) || parseInt(form.age) < 18 || parseInt(form.age) > 99) {
            newErrors.age = "Please enter a valid age (18-99)";
            }
        if (!form.phone.trim()) {
            newErrors.phone = "WhatsApp number is required";
            } else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) {
            newErrors.phone = "Please enter a valid 10-digit WhatsApp number";
            }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!validateForm()) return;

      trackFormSubmit({formName: "Checkout Form", formData: form})
      trackAddToCart(PRODUCT)

      const amount = DISCOUNTED_PRICE
      const productName = RAZORPAY_PRODUCT_NAME
      const description = RAZORPAY_DESCRIPTION

      const utmParams = getUTMParams()
  
      try {
        const result = await initiatePayment({
            amount,
            productName,
            description,
            prefill: {
                name: form.fullName.trim(),
                email: form.email,
                contact: `+91${form.phone.replace(/\D/g, '')}`,
                
            },
            notes: {
                ...utmParams,
                webinar_name: WEBINAR_NAME,
                page_url: window.location.href
                
            }
            
            
            });

          

            if (result.status === "success") {
                
                handleSuccess?.(result.paymentId!, result.orderId!);
            } else if (result.error !== "Payment cancelled by user") {
                handleFailure?.(result.error || "Unknown error");
            }
    
    }
      catch (error) {
        trackFormError({formName: "CheckoutForm",
             errorMessage: `${error?.message || 'Unknown error during form submission'}`});
      }
      
    };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <div className="md:col-span-2">
          <label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-2 block ml-1 leading-none">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-blue-50/30 border-blue-100 px-5 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 ${errors.fullName ? 'border-red-500/50 bg-red-50' : ''}`}
          />
          {errors.fullName && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-2 block ml-1 leading-none">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@example.com"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-blue-50/30 border-blue-100 px-5 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 ${errors.email ? 'border-red-500/50 bg-red-50' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-2 block ml-1 leading-none">WhatsApp Number *</label>
          <div className="flex gap-3">
            <div className="flex items-center bg-blue-50 border border-blue-100 rounded-xl px-4 text-sm font-black text-blue-600">+91</div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit number"
              value={form.phone}
              onChange={handleChange}
              className={`w-full rounded-xl border bg-blue-50/30 border-blue-100 px-5 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 ${errors.phone ? 'border-red-500/50 bg-red-50' : ''}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="city" className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-2 block ml-1 leading-none">Town / City *</label>
          <input
            id="city"
            name="city"
            placeholder="Your City"
            value={form.city}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-blue-50/30 border-blue-100 px-5 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 ${errors.city ? 'border-red-500/50 bg-red-50' : ''}`}
          />
          {errors.city && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="age" className="text-[10px] font-black uppercase tracking-wider text-blue-600 mb-2 block ml-1 leading-none">Age *</label>
          <input
            id="age"
            name="age"
            type="number"
            placeholder="e.g. 25"
            value={form.age}
            onChange={handleChange}
            className={`w-full rounded-xl border bg-blue-50/30 border-blue-100 px-5 py-4 text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300 ${errors.age ? 'border-red-500/50 bg-red-50' : ''}`}
          />
          {errors.age && <p className="text-red-500 text-[10px] mt-1 ml-1 font-bold">{errors.age}</p>}
        </div>
      </div>

      {/* Workshop Pass Summary */}
      <div className="bg-blue-50/50 border-2 border-dashed border-blue-200 rounded-2xl p-6 md:p-8 mt-6 relative overflow-visible">
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-blue-100" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full border border-blue-100" />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="space-y-1">
             <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600/70">Workshop Enrollment PASS</span>
             </div>
             <h4 className="font-bold text-lg md:text-xl leading-tight text-slate-800">{RAZORPAY_PRODUCT_NAME}</h4>
          </div>
          <div className="flex flex-col items-start sm:items-end">
            <span className="text-slate-400 line-through text-base font-bold mb-1">{CURRENCY_SYMBOL}{OG_PRICE.toFixed(0)}</span>
            <div className="flex items-center gap-1">
              <span className="text-3xl md:text-4xl font-black text-blue-600">{CURRENCY_SYMBOL}{DISCOUNTED_PRICE.toFixed(0)}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-100 pt-6 flex justify-between items-center px-4 -mx-4">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500">Total Payable</span>
          <span className="font-black text-2xl text-blue-700">{CURRENCY_SYMBOL}{DISCOUNTED_PRICE.toFixed(0)}</span>
        </div>
      </div>

      <div className="pt-2">
        <button
          disabled={loading}
          type="submit"
          className={cn(
            "w-full relative group overflow-hidden rounded-xl py-4 md:py-5 font-bold text-lg md:text-xl tracking-tight transition-all duration-300",
            "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700",
            "text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.4)]",
            "hover:-translate-y-1 active:scale-[0.98]",
            "disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? "AUTHENTICATING..." : "BOOK YOUR SEAT NOW"}
          </span>
        </button>
        
        {error && error !== "Payment cancelled by user" && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-500 text-center text-sm font-bold animate-shake">
            {error}
          </div>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-2 border-t border-slate-100">
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-wide">
          <Lock size={12} className="text-blue-500" />
          <span>256-BIT SECURE</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-wide">
          <Shield size={12} className="text-blue-500" />
          <span>PAYMENT PROTECTED</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-wide">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>LIVE SERVER</span>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;