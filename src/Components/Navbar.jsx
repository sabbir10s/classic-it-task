import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto px-2 py-8">
      <ul className="flex items-center gap-4 justify-between">
        <Link className="text-secondary hover:text-primary duration-300" to="/">
          Home
        </Link>
        <ul className="flex items-center gap-6">
          <Link
            to="/login"
            className="border border-primary text-primary hover:shadow-md hover:shadow-primary/50 duration-300 px-6 py-2 rounded"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-primary hover:shadow-md hover:shadow-primary/50 duration-300 text-white px-4 py-2 rounded"
          >
            Register
          </Link>
        </ul>
      </ul>
    </nav>
  );
};

export default Navbar;
