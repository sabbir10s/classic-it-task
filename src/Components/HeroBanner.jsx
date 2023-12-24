import shoe from "../assets/shoe.png";
const HeroBanner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center py-14">
        <div className=" order-2 md:order-2">
          <h2 className="mb-4 font-bold text-primary text-2xl sm:text-3xl md:text-4xl md:leading-snug	">
            Your Ultimate Destination <br /> for Stylish Shoes.
          </h2>
          <p className=" text-gray-600 text-sm md:text-base mb-4">
            Unleash the Power of Comfort and Fashion with Our Exclusive
            Collection of Trendsetting Shoes. Step Into a World Where Every Pair
            Tells a Story – Your Story of Style, Confidence, and Unmatched
            Quality.
          </p>
          <a
            href="#products"
            className="bg-primary hover:bg-primary-500 duration-300 text-white px-8 py-3 rounded inline-block"
          >
            Shop Now
          </a>
        </div>
        <div className="flex justify-center order-1 md:order-2">
          <img
            className="md:max-w-[300px] object-cover object-center"
            src={shoe}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
