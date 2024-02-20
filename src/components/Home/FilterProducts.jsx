import React, { useState } from "react";

const FilterProducts = ({ onPriceRangeChange }) => {
  const [price, setPrice] = useState(0);

  const handlePriceRangeChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onPriceRangeChange(newPrice);
  };

  return (
    <div className="flex w-auto mt-10 m-auto items-center justify-center">
      <h1 className="text-gray-700 w-full">Filter By Price:</h1>
      <div className="relative flex flex-1 mx-4 items-center">
        <input
          value={price}
          onChange={handlePriceRangeChange}
          className="w-auto py-2 px-4 rounded-full outline-none focus:outline-none bg-gray-200 text-gray-700"
          inputMode="numeric"
          pattern="\d*"
        />
        <div className="absolute pl-7 inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <span className="text-gray-700">$</span>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
