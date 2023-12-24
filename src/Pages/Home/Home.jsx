import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../../Components/ProductsCard";
import Loading from "../../Components/Loading";
import HeroBanner from "../../Components/HeroBanner";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://classic-backend-optb.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  if (!products.length > 0) {
    return <Loading />;
  }

  return (
    <div className=" container mx-auto px-2">
      <HeroBanner />
      <h2 className="text-xl lg:text-2xl text-secondary font-semibold pb-6 mt-20">
        Our Products
      </h2>
      <div
        id="products"
        className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {products.slice(0, 4).map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
