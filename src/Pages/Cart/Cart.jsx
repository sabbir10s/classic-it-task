import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import useAuth from "../../Provider/useAuth";
import CartItems from "../../Components/CartItems";
import { Link } from "react-router-dom";

const Cart = () => {
  const { user, loading } = useAuth();
  const email = user ? user.email : null;

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/cart/${email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data.cart));
    }
  }, [email]); // Trigger the effect when email changes

  if (loading) {
    return <Loading />;
  }

  const reversedCartItems = [...cartItems].reverse();

  console.log(cartItems);
  return (
    <div className="container mx-auto px-2">
      {cartItems.length ? (
        <>
          <div className="mt-4">
            <div className=" bg-gray-100 p-1 sm:p-2 rounded-[10px] shadow-custom">
              <div className="hidden md:block">
                <div className="grid grid-cols-6 px-4 font-semibold py-4 uppercase text-[12px] ">
                  <h4 className="col-span-3">Product</h4>
                  <h4 className="text-center">Unite Price</h4>
                  <h4 className=" text-center">Quantity</h4>
                  <h4 className="text-center">Total</h4>
                </div>
              </div>
              <div>
                {reversedCartItems.map(
                  ({ color, size, product, quantity }, idx) => (
                    <CartItems
                      key={idx}
                      color={color}
                      size={size}
                      item={product}
                      quantity={quantity}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          {/* shipping button */}
          <div className="mt-10 text-left">
            <Link to="/" className="bg-primary text-white px-8 py-3 rounded">
              Continue Shopping
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center gap-8 py-10">
            <img
              className="w-[200px]"
              src="https://static.vecteezy.com/system/resources/thumbnails/005/006/007/small/no-item-in-the-shopping-cart-click-to-go-shopping-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
              alt=""
            />
            <div className="text-center flex items-center gap-2 text-xl">
              <h2 className=" text-gray-500">Your cart is empty!</h2>
              <Link
                className="text-primary hover:text-primary-700 hover:underline duration-300"
                to="/"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
