import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "./Loading";
import useAuth from "../Provider/useAuth";

const Navbar = () => {
  const { user, loading, logout } = useAuth();
  const name = user ? user.name : null;
  console.log(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <nav className="container mx-auto px-2 py-8">
      <div className="flex items-center gap-4 justify-between">
        <Link className="text-secondary hover:text-primary duration-300" to="/">
          Home
        </Link>
        <div className="flex items-center gap-6">
          <div>
            {user && (
              <Link
                className="text-xl md:text-2xl lg:text-3xl  text-yellow-500"
                to="/cart"
              >
                <FaShoppingCart />
              </Link>
            )}
          </div>
          {!user && (
            <div className="flex gap-6 items-center">
              {" "}
              <Link
                to="/login"
                className="border border-primary text-primary hover:shadow-md hover:shadow-primary/50 duration-300 px-6 py-2 rounded"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-primary hover:bg-primary-700 hover:shadow-md hover:shadow-primary/50 duration-300 text-white px-4 py-2 rounded"
              >
                Register
              </Link>
            </div>
          )}
          {user && (
            <div className="relative group">
              <button className="text-white h-8 w-8 flex items-center justify-center bg-primary-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-600 uppercase">
                {name.slice(0, 1)}
              </button>
              <div className="absolute left-[-90px] top-4 hidden bg-transparent text-gray-700 group-hover:block mt-0 py-4 rounded-md  z-50">
                <button
                  onClick={logout}
                  className="text-primary hover:text-primary-700 duration-300 font-semibold bg-white shadow-lg px-10 py-4"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
