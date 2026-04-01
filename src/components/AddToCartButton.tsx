import { trackAddToCart } from "@/utils/gtm";
import { CURRENCY_SYMBOL, OG_PRICE, DISCOUNTED_PRICE, PRODUCT } from "@/utils/product-info";

interface AddToCartButtonProps {
  ogPrice?: string;
  price?: string;
  label?: string;
  ctaLocation?: string;
  href?: string;
  onClick?: () => void;
  className?: string; // ✅ ADD THIS
}

const AddToCartButton = ({
  ogPrice = `${CURRENCY_SYMBOL}${OG_PRICE}`,
  price = `${CURRENCY_SYMBOL}${DISCOUNTED_PRICE.toFixed(2)}`,
  label = "Book Your Seat - ",
  ctaLocation = "AddToCart",
  onClick,
  className = "", // ✅ DEFAULT EMPTY
}: AddToCartButtonProps) => {

  const handleClick = () => {
    // trackAddToCart(PRODUCT);
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        flex items-center justify-center gap-2
        font-heading font-bold transition-all
        ${className}  // ✅ CUSTOM STYLE FROM PARENT
      `}
    >
      {label}
    </button>
  );
};

export default AddToCartButton;