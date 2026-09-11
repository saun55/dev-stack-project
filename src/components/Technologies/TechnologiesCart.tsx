import { FcRating } from "react-icons/fc";
import type { TechnologiesType } from "./TechnologiesType";
import { type Dispatch, type SetStateAction } from "react";
import { toast, Zoom, } from "react-toastify";
import { GrCheckmark } from "react-icons/gr";

interface CartType {
  cart: TechnologiesType;
  selectedCart: TechnologiesType[];
  setSelectedCart: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const TechnologiesCart = ({
  cart,
  selectedCart,
  setSelectedCart,
}: CartType) => {
  const stackButton = selectedCart.some(
    (tachnology) => tachnology.name === cart.name,
  );

  const hendelStackButton = () => {
    if (stackButton) {
      return;
    }
    setSelectedCart((prev) => [...prev, cart]);

    // toast
    toast.success("Success Added to Stack!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });
  };

  return (
    <div>
      <div
        className={`rounded-3xl border  bg-white ${stackButton ? "border-[#D91B7E]" : "border-gray-100"} p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
      >
        {/* Icon + Badge */}
        <div className="flex items-start justify-between">
          <div className="flex h-14 w-14 items-center justify-center">
            <img
              src={cart.icon}
              alt={cart.name}
              className="h-12 w-12 object-contain"
            />
          </div>

          <span className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-500">
            {cart.badge}
          </span>
        </div>

        {/* Name + Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">{cart.name}</h2>

          <p className="mt-3 line-clamp-3 text-[15px] leading-7 text-gray-400">
            {cart.description}
          </p>
        </div>

        {/* Category + Difficulty + Rating */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="rounded-md bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-500">
            {cart.category}
          </span>

          <span className="text-sm font-medium text-gray-500">
            {cart.difficulty}
          </span>

          <div className="flex items-center gap-1">
            <FcRating />
            <span className="text-sm font-semibold text-gray-600">
              {cart.rating}
            </span>
          </div>
        </div>

        {/* Button */}

        <button
          onClick={hendelStackButton}
          disabled={stackButton}
          className={`mt-5 w-full rounded-xl 
        ${stackButton ? "bg-white " : "bg-gray-950"} 

         ${stackButton ? "text-[#D91B7E]" : "text-white"} 
         py-3 text-sm cursor-pointer  font-semibold 
         transition-all duration-300  active:scale-[0.98]`}
        >
          <span className="flex items-center justify-center gap-1.5 text-[15px]">
            {stackButton && <GrCheckmark />}
            {stackButton ? "Added to Stack" : "Add to Stack"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TechnologiesCart;
