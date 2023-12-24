import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../Provider/useAuth";
import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const { user, loading } = useAuth();
  const email = user ? user.email : null;
  // eslint-disable-next-line react/prop-types
  const { _id, name, price, image, colors, sizes } = product;
  const quantity = 1;
  const color = colors[0];
  const size = sizes[0];

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
      .then(() => {
        toast.success("Successfully Added");
      });
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="rounded-lg duration-300 transition ease-in  relative border border-transparent hover:shadow-lg hover:shadow-primary/40 hover:border-primary-400 group text-start">
      <div>
        <div>
          <Link to={`/${_id}`}>
            <img src={image} className="lg:max-w-[230px] mx-auto p-1" alt="" />
          </Link>
          <div className="space-y-1 px-3 pb-3">
            <Link
              to={`/${_id}`}
              className="text-secondary font-semibold text-[12px] md:text-[18px]"
            >
              {name}
            </Link>
            <div className="flex justify-between items-center pb-4">
              <p className="flex items-center gap-2">
                <span className="text-primary text-lg font-semibold">
                  ${price}
                </span>
                <span className="text-gray-500 text-base">
                  <del>${200}</del>
                </span>
              </p>
            </div>
            <button
              onClick={handleAddToCart}
              className=" rounded-[5px] py-[4px] md:py-[9px] w-full text-white bg-primary duration-300 invisible group-hover:visible"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default ProductCard;
