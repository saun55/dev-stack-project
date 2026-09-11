import type { Dispatch, SetStateAction } from "react";


import { GrClose } from "react-icons/gr";

import { Bounce, toast } from "react-toastify";
import type { TechnologiesType } from "./TechnologiesType";

interface StackCartType {
  selectedCart: TechnologiesType[];
  setSelectedCart: Dispatch<SetStateAction<TechnologiesType[]>>;
}

const StackTechnologiesCart = ({
  selectedCart,
  setSelectedCart,
}: StackCartType) => {
  const hendelRemoveCart = (catr: TechnologiesType) => {
    const resCart = selectedCart.filter((carts) => carts.name !== catr.name);
    setSelectedCart(resCart);

    toast.info("Stack Clear", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  if (selectedCart.length === 0) {
    return (
      <div className="rounded-3xl border  bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h1 className="font-bold text-2xl">Your Stack</h1>
        <p className="py-2">No technologies selected yet.</p>

        <div className="border border-dashed rounded-3xl bg-white mt-4 p-7 ">
          <p className="text-center">Your stack is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl   bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1  hover:shadow-lg">
      <div className="">
        <h1 className="text-2xl font-bold ">Your Stack</h1>
        <p>{selectedCart.length} Technology Selected</p>
      </div>

      {selectedCart.map((technologiesCart) => {
        return (
          <div>
            <div className="card container mx-auto ">
              <div className=" py-5">
                <div className="container mx-auto border-dotted flex justify-between shadow-white rounded-[10px] ">
                  <div className="flex text-center gap-1.5  mx-1.5">
                    <img
                      src={technologiesCart.icon}
                      alt=""
                      height={40}
                      width={40}
                    />

                    <div className="py-1.5">
                      <h2 className="card-title">{technologiesCart.name}</h2>
                      <p>{technologiesCart.category}</p>
                    </div>
                  </div>

                  <div
                    onClick={() => {
                      hendelRemoveCart(technologiesCart);
                    }}
                    className=" text-2xl flex items-center mr-1.5 "
                  >
                    <button className="cursor-pointer">
                      <GrClose />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        onClick={() => {
          setSelectedCart([]);

          toast.info("Stack All Clear", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }}
        className="mt-5 w-full rounded-xl border text-[15px]  py-3 text-sm font-semibold text-[#D91B7E] bg-white border-[#D91B7E] transition-all duration-300  active:scale-[0.98]"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackTechnologiesCart;
