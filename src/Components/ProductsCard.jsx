import { useState } from "react";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { _id, name, price, discount, image, rating, stock } = product;
  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };
  console.log(product);
  return (
    <div className="rounded-lg duration-300 transition ease-in border relative cursor-pointer border-gray-200 hover:shadow-lg hover:shadow-primary/40 hover:border-primary-400">
      <div>
        <div>
          <div className="bg-orange-400 mt-[2px] text-white text-[8px] md:text-[14px] font-semibold inline-block p-[4px] lg:px-[12px] lg:py-[6px] rounded-tl-[8px] lg:rounded-tl-[10px] rounded-br-[8px] lg:rounded-br-[10px] absolute top-3 left-3">
            <p>{discount}% OFF</p>
          </div>

          <img
            src={image}
            className="w-full h-full object-center object-fill rounded-t"
            alt=""
          />
          <div
            onClick={() => handleProductDetails(_id)}
            className="space-y-3 p-3"
          >
            <h3 className="text-black font-semibold text-[12px] md:text-[18px]">
              {name}
            </h3>
            <div className="flex justify-between items-center">
              <p className="flex items-center gap-1 md:gap-3">
                <span className="text-primary text-[12px] md:text-[18px] font-semibold">
                  ${price}
                </span>
                <span className="text-gray-500 text-[10px] md:text-[18px]">
                  <del>${200}</del>
                </span>
              </p>
            </div>
            <button className="rounded-[5px] py-[4px] md:py-[9px] w-full border border-primary text-primary hover:text-white hover:bg-primary duration-300">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
