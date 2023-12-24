import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading";
import AddToCard from "../../Components/AddToCard";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => {
        console.error("Error fetching product:", error);
        setProduct({});
      });
  }, [productID]);

  if (!product) {
    return <Loading />;
  }

  const { name, price, image, company, description } = product;
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
          <AddToCard product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
