import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "./Loading";
import useAuth from "../Provider/useAuth";

const Navbar = () => {
  const { user, loading, logout } = useAuth();

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
              <Link className="text-4xl  text-yellow-500" to="/cart">
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
            <button
              onClick={logout}
              className="bg-primary hover:bg-primary-700 hover:shadow-md hover:shadow-primary/50 duration-300 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
