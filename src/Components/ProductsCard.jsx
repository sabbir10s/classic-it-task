import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // eslint-disable-next-line react/prop-types
  const { _id, name, price, image } = product;
  const handleProductDetails = () => {
    navigate(`/${_id}`);
  };
  console.log(product);
  return (
    <button
      onClick={() => handleProductDetails(_id)}
      className="rounded-lg duration-300 transition ease-in  relative cursor-pointer border border-transparent hover:shadow-lg hover:shadow-primary/40 hover:border-primary-400 group text-start"
    >
      <div>
        <div>
          <img src={image} className="max-w-[230px] mx-auto p-1" alt="" />
          <div className="space-y-1 px-3 pb-3">
            <h3 className="text-secondary font-semibold text-[12px] md:text-[18px]">
              {name}
            </h3>
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
            <button className=" rounded-[5px] py-[4px] md:py-[9px] w-full text-white bg-primary duration-300 invisible group-hover:visible">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
