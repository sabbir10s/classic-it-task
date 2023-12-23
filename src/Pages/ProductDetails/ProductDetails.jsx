import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";

const ProductDetails = () => {
  const { productID } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const singleProduct = products.find((product) => product._id === productID);

  if (!singleProduct) {
    return <Loading />;
  }

  const { name, price, sizes, colors, image, company, description } =
    singleProduct;
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mx-auto">
          <img src={image} alt="" />
        </div>
        <div className=" space-y-4">
          <h1 className="text-xl lg:text-2xl font-bold text-secondary">
            {name}
          </h1>
          <div>
            <div className=" grid grid-cols-2 max-w-[180px] text-sm">
              Brand: <span className="text-gray-500 ">{company}</span>
            </div>
            <div className=" grid grid-cols-2 max-w-[180px] text-sm">
              Availability: <span className="text-gray-500 ">In stock</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-base font-semibold">
              <del>${200}.00</del>
            </span>
            <span className="text-xl font-semibold text-primary">
              ${price}.00
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {description.slice(0, 170)}...
          </p>
          <div>
            <p className="text-sm pb-2">
              Size<span className="text-red-600">*</span>
            </p>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-secondary hover:text-white duration-300"
                  key={size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            {colors.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`h-8 w-8 cursor-pointer focus:ring-2 focus:ring-primary active:ring-2 active:ring-primary`}
                />
              );
            })}
          </div>
          <button className="bg-primary text-white hover:bg-primary-700 hover:shadow-md hover:shadow-primary/50 duration-300 px-10 py-2 rounded">
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
