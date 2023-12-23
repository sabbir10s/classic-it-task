import { useEffect, useState } from "react";
import Loading from "../../Components/Loading";
import useAuth from "../../Provider/useAuth";

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
  console.log(cartItems);
  return (
    <div className="container mx-auto px-2">
      {!cartItems.length ? (
        <div className="text-xl text-center text-gray-600 pt-10">
          Empty Cart
        </div>
      ) : (
        <>
          {cartItems.map(({ color, size, product }, idx) => (
            <div key={idx}>
              <div className="flex gap-10 items-center mb-4">
                <img
                  className="w-[70px] border rounded"
                  src={product.image}
                  alt=""
                />
                <div>
                  <h5 className="text-base text-secondary-800">
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-600">
                    Size: <span>{size}</span>
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>Color:</span>
                    <div
                      className="h-4 w-4"
                      style={{ backgroundColor: color }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Cart;
