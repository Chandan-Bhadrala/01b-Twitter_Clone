import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-screen items-start justify-around">
      <div className="mx-8 flex-2">
        <LeftSidebar />
      </div>

 {/* Rendering different children using Outlet. */}
      <div className="flex-6">
        <Outlet />
      </div>

      <div className="mr-8 ml-4 h-screen flex-3">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
