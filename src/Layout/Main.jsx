import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-SourceSans">
      <Outlet />
    </div>
  );
};

export default Main;
