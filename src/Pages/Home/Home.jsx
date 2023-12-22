import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../../Components/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/public/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (!products.length > 0) {
    return "Loading";
  }

  return (
    <div className=" container mx-auto px-2">
      <h2>Our Products</h2>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
