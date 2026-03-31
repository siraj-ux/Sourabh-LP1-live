import CheckoutForm from "./CheckoutForm";

const CheckoutSection = () => {
  return (
    <section className="bg-white py-2 md:py-8 relative overflow-hidden">
      {/* Background Glows - Changed to a soft blue */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-50 rounded-full blur-[120px] -z-10" />

      <div className="container max-w-2xl px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-black mb-3">
            {/* Changed from text-gradient to text-blue-600 */}
            <span className="text-blue-600 uppercase tracking-tight">Book Your VIP Seat</span>
          </h2>
          <p className="text-slate-600 font-medium text-sm md:text-base max-w-lg mx-auto">
            Secure your spot in the Fitness Master Workshop now.
          </p>
        </div>

        {/* Card set to white with a soft blue border and shadow */}
        <div id="checkout" className="bg-white shadow-xl shadow-blue-500/10 border border-blue-100 rounded-3xl p-5 md:p-8 relative overflow-hidden">
          <CheckoutForm />
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;