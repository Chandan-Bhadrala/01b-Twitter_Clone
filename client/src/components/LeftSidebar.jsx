import { FiHome } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <div>
      {/* Logo Div. */}
      <div className="my-4 ml-4">
        <FaXTwitter size="32px" />
      </div>

      {/* Menu Div */}
      <div>
        <Link
          to="/"
          className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          <FiHome size="32px" />
          <h1 className="ml-2 text-xl">Home</h1>
        </Link>

        <div className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200">
          <IoMdSearch size="32px" />
          <h1 className="ml-2 text-xl">Explore</h1>
        </div>

        <div className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200">
          <IoNotificationsOutline size="32px" />
          <h1 className="ml-2 text-xl">Notifications</h1>
        </div>

        <Link
          to="/profile"
          className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200"
        >
          <IoPersonOutline size="32px" />
          <h1 className="ml-2 text-xl">Profile</h1>
        </Link>

        <div className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200">
          <FaRegBookmark size="32px" />
          <h1 className="ml-2 text-xl">Bookmarks</h1>
        </div>
        <div className="flex items-center rounded-4xl p-4 font-semibold hover:cursor-pointer hover:bg-gray-200">
          <IoLogOutOutline size="32px" />
          <Link to="/login" className="ml-2 text-xl">
            Logout
          </Link>
        </div>
      </div>

      {/* Post Button */}
      <div className="mt-4 flex justify-center rounded-4xl bg-black py-4 text-xl font-semibold text-white hover:cursor-pointer">
        <button>Post</button>
      </div>
    </div>
  );
};

export default LeftSidebar;
