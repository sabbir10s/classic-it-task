import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div className="font-SourceSans">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
