import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-start justify-around">
      <div className="sticky top-0 mr-8 ml-28 flex-2">
        <LeftSidebar />
      </div>

      {/* Rendering different children using Outlet. */}
      <div className="flex-6 border border-gray-200">
        <Outlet />
      </div>

      <div className="sticky top-0 max-h-screen mr-28 ml-4 flex-3 overflow-y-auto scrollbar-hide">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
