import { use, useState } from "react";

import type { TechnologiesType } from "./components/Technologies/TechnologiesType";
import TechnologiesCart from "./components/Technologies/TechnologiesCart";
import StackTechnologiesCart from "./components/Technologies/YourStack";

interface PromiseDataType {
  promiseData: Promise<TechnologiesType[]>;
}

const Technologies = ({ promiseData }: PromiseDataType) => {
  const promiseUse = use(promiseData);

  const [selectedCart, setSelectedCart] = useState<TechnologiesType[]>([]);

  return (
    <div className="container mx-auto ">
      <h1 className="text-4xl font-bold pb-2 ">
        Explore the{" "}
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h1>
      <p className="pb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className=" grid grid-cols-12 gap-6">
        {/* Technology Cards */}
        <div className=" grid col-span-12  gap-7 sm:grid-cols-2 md:col-span-9 md:grid-cols-3">
          {promiseUse.map((cart) => (
            <TechnologiesCart
              key={cart.id}
              cart={cart}
              selectedCart={selectedCart}
              setSelectedCart={setSelectedCart}
            />
          ))}
        </div>

        {/* Stack */}
        <div className="col-span-12 md:col-span-3">
          <StackTechnologiesCart
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
