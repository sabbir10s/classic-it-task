import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../../Components/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (!products.length > 0) {
    return "Loading";
  }

  return (
    <div className=" container mx-auto px-2">
      <h2>Our Products</h2>
      <div className=" grid grid-cols-3 gap-10">
        {products.slice(6).map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
