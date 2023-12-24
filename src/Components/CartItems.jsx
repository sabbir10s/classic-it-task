/* eslint-disable react/prop-types */
import { useState } from "react";

const CartItems = ({ color, size, quantity, item }) => {
  const [cartQuantity, setCartQuantity] = useState(quantity);
  const { name, image, price } = item;

  const setDecrease = () => {
    cartQuantity > 1 ? setCartQuantity(cartQuantity - 1) : setCartQuantity(1);
  };

  const total = price * cartQuantity;
  return (
    <div>
      <div className="flex justify-between sm:grid  grid-cols-6 sm:gap-2 items-center px-2 m-1 sm:m-4 bg-white">
        <div className="flex items-center sm:gap-6 sm:col-span-3">
          <div className="p-2">
            <div className="w-[50px] sm:w-[100px] h-[50px] sm:h-[100px] bg-gray-50  rounded-2xl">
              <img
                src={image}
                className="w-full h-full object-center object-fill"
                alt="product-img"
              />
            </div>
          </div>
          <div className="hidden sm:block w-2/3">
            <h3>{name}</h3>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-600">
                Size: <span>{size}</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Color:</span>
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[1px] text-[12px] md:text-base">
          <span className="font-semibold text-primary-600 hidden sm:block mx-auto">
            ${price}
          </span>

          <h3 className="sm:hidden font-semibold">{name.slice(0, 10)}</h3>
          <div className="sm:hidden flex items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-600">
              Size: <span>{size}</span>
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <span>Color:</span>
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>
          <span className="font-semibold text-primary-600 text-start block sm:hidden">
            ${total}
          </span>
        </div>

        <div>
          <div className="flex items-center justify-center">
            <button
              onClick={setDecrease}
              type="button"
              className=" w-5 md:w-6 sm:w-8 h-5 md:h-6 sm:h-8 text-xs md:text-base sm:text-xl font-medium border border-primary-600 sm:border-0 bg-gray-50 rounded-[50%] text-primary-600 sm:text-black transition hover:opacity-75"
            >
              &minus;
            </button>

            <span className="px-2 sm:px-4 sm:text-base font-medium">
              {cartQuantity}
            </span>

            <button
              onClick={() => setCartQuantity(cartQuantity + 1)}
              type="button"
              className=" w-5 md:w-6 sm:w-8 h-5 md:h-6 sm:h-8 text-xs md:text-base sm:text-xl font-medium border border-primary-600 sm:border-0 bg-gray-50 rounded-[50%] text-primary-600 sm:text-black transition hover:opacity-75"
            >
              &#43;
            </button>
          </div>
        </div>
        <span className=" font-semibold text-primary-600 hidden sm:block mx-auto">
          ${total}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
