import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import Tweet from "./Tweet";

const Profile = () => {
  return (
    <div>
      {/* Top div */}
      <div className="flex items-center gap-4 py-2 sticky top-0 bg-white z-10">
        <Link to="/">
          <IoIosArrowRoundBack size="32" />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">Chandan Bhadrala</h1>
          <p className="text-sm">18 posts</p>
        </div>
      </div>

      {/* Profile Image div */}
      <div className="relative">
        <img src="https://pbs.twimg.com/profile_banners/1439516145304805377/1749637880/1080x360" />

        <img
          src="https://i.pravatar.cc/150"
          alt="avatar"
          className="absolute -bottom-4 left-6 h-40 w-40 rounded-full border-4 border-white"
        />

        <div className="mt-2 mr-4 text-right">
          <button className="rounded-4xl border border-amber-200 p-4 font-semibold">
            Edit profile
          </button>
        </div>
      </div>

      {/* Profile detail div */}
      <div className="mx-4 mt-4">
        <h1 className="text-2xl font-bold">Chandan Bhadrala</h1>
        <p className="text-gray-600">@ChandanBhadrala</p>
        <p className="mt-2 whitespace-pre-line">
          {`Sharing the clarity I gain along the way.
          Learning. Breaking. Understanding.
          -- Web Dev • JS • DSA. --
          Engineer by profession, developer by curiosity.`}
        </p>

        <div className="flex gap-4">
          <p className="flex items-center gap-1">
            <PiSuitcaseSimpleLight /> Professional Services
          </p>
          <p className="flex items-center gap-1">
            <CiLocationOn />
            Jammu
          </p>
          <p className="flex items-center gap-1">
            <IoCalendarOutline />
            Joined September 2021
          </p>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <p>
            <span className="font-bold">9</span> Following
          </p>
          <p>
            <span className="font-bold">0</span> Followers
          </p>
        </div>
      </div>

      {/* Post Section*/}
      <div className="mt-4">
        <div>
          <h1 className="ml-8 text-xl font-bold">Posts</h1>
        </div>
        <div className="border-b border-gray-200"></div>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  );
};

export default Profile;
