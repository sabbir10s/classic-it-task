/* eslint-disable react/prop-types */
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import useAuth from "../Provider/useAuth";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const AddToCard = ({ product }) => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const email = user ? user.email : null;

  const { sizes, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const [quantity, setCartQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setCartQuantity(quantity - 1) : setCartQuantity(1);
  };

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please log in to add to cart");
      navigate("/login");
      return;
    }
    const url = `https://classic-backend-optb.onrender.com/cart/${email}`;
    const cartInfo = { size, color, quantity, product };
    fetch(url, {
      method: "POST",
      body: JSON.stringify(cartInfo),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully Added");
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" space-y-4">
      <div>
        <p className="text-sm pb-2">
          Size<span className="text-red-600">*</span>
        </p>
        <div className="flex gap-4">
          {sizes.map((currentSize) => (
            <button
              onClick={() => setSize(currentSize)}
              className={`w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-500 hover:text-white duration-300 text-sm ${
                size === currentSize ? " bg-gray-500 text-white" : ""
              }`}
              key={currentSize}
            >
              {currentSize}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-4">
        {colors.map((currentColor, index) => {
          return (
            <button
              key={index}
              onClick={() => setColor(currentColor)}
              style={{ backgroundColor: currentColor }}
              className={`h-8 w-8 cursor-pointer text-primary-500 flex items-center justify-center ${
                color === currentColor
                  ? "border-2 border-primary"
                  : "border-2 border-transparent"
              }`}
            >
              {color == currentColor ? <FaCheck /> : null}
            </button>
          );
        })}
      </div>

      <div>
        <div className="inline-flex items-center border">
          <button
            onClick={setDecrease}
            type="button"
            className="w-8 h-8 text-xl font-medium bg-gray-100 border hover:text-primary duration-300"
          >
            &minus;
          </button>

          <span className="px-2 sm:px-4 sm:text-base font-medium">
            {quantity}
          </span>

          <button
            onClick={() => setCartQuantity(quantity + 1)}
            type="button"
            className="w-8 h-8 text-xl font-medium bg-gray-100 border hover:text-primary duration-300"
          >
            &#43;
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-primary text-white hover:bg-primary-700 hover:shadow-md hover:shadow-primary/50 duration-300 px-10 py-2 rounded"
      >
        Add to card
      </button>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddToCard;
