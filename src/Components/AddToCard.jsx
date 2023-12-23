import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCheck } from "react-icons/fa6";
import useAuth from "../Provider/useAuth";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const AddToCard = ({ product }) => {
  const { user, loading } = useAuth();
  const email = user ? user.email : null;
  // eslint-disable-next-line react/prop-types
  const { sizes, colors } = product;
  const [color, setColor] = useState(colors[0]);
  const [size, setSize] = useState(sizes[0]);
  const quantity = 1;
  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please log in to add to cart");
      return;
    }
    const url = `http://localhost:5000/cart/${email}`;
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
      .then((data) => {
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
