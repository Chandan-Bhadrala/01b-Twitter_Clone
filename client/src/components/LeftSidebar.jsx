import { FiHome } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";


const LeftSidebar = () => {
  return (
    <div>
      {/* Logo Div. */}
      <div className="my-4 ml-4 ">
        <FaXTwitter size="32px" />
      </div>

      {/* Menu Div */}
      <div>
        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <FiHome size="32px" />
          <h1 className="ml-2 text-xl">Home</h1>
        </div>

        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <IoMdSearch size="32px" />
          <h1 className="ml-2 text-xl">Explore</h1>
        </div>

        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <IoNotificationsOutline size="32px" />
          <h1 className="ml-2 text-xl">Notifications</h1>
        </div>

        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <IoPersonOutline size="32px" />
          <h1 className="ml-2 text-xl">Profile</h1>
        </div>

        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <FaRegBookmark size="32px" />
          <h1 className="ml-2 text-xl">Bookmarks</h1>
        </div>
        <div className="flex items-center font-semibold hover:bg-amber-200 p-4 rounded-4xl hover:cursor-pointer">
          <IoLogOutOutline size="32px" />
          <h1 className="ml-2 text-xl">Logout</h1>
        </div>
      </div>

      {/* Post Button */}
      <div className="bg-black text-white flex justify-center py-4 rounded-4xl font-semibold text-xl hover:cursor-pointer mt-4">
        <button>Post</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
