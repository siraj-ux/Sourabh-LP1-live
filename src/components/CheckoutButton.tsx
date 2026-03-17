import { CURRENCY_SYMBOL, OG_PRICE, DISCOUNTED_PRICE } from "@/utils/product-info";

interface CheckoutButtonProps {
  ogPrice?: string;
  price?: string;
  label?: React.ReactNode;
  ctaLocation?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CheckoutButton = ({
  ogPrice = `${CURRENCY_SYMBOL}${OG_PRICE}`,
  price = `${CURRENCY_SYMBOL}${DISCOUNTED_PRICE.toFixed(2)}`,
  label = "BOOK NOW — Sirf 41 Seats!",
  onClick,
  className,
}: CheckoutButtonProps) => {

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        className
          ? className
          : "w-full bg-[#FF8C00] hover:bg-[#e67e00] text-white text-sm md:text-xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl shadow-lg transition-all active:scale-95 mb-1 uppercase"
      }
    >
      {label}
    </button>
  );
};

export default CheckoutButton;