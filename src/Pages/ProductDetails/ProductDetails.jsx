import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productID } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const singleProduct = products.find((product) => product._id === productID);

  // eslint-disable-next-line react/prop-types
  const { company, name, price, image, colors } = singleProduct;
  if (!singleProduct.length > 0) {
    return "Loading";
  }
  return (
    <div className="container mx-auto px-2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={image} alt="" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-secondary">{name}</h1>
          <p>{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
