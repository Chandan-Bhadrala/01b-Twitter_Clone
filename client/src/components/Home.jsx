import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Home = () => {
  return (
    <div className="flex justify-around items-start h-screen ">
      <div className="flex-2 mx-8">
        <LeftSidebar />
      </div>

      <div className="flex-6">
        <Feed />
      </div>

      <div className="flex-2 mr-8">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
