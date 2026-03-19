import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";

const Tweet = () => {
  return (
    <div className="p-4 flex gap-4 border-b border-gray-200">
      <img
        src="https://i.pravatar.cc/150"
        alt="avatar"
        className="w-10 h-10 rounded-full "
      />

      <div>
        <h1 className="font-semibold">
          Chandan Bhadrala{" "}
          <span className="text-gray-400 font-normal">@ChandanBhadrala 1m</span>
        </h1>
        <h2 className="text-gray-400 font-normal">Replying to @Kirat_tw</h2>
        <p>
          I'm onto the learning phase so, I'm all hands on the keyboard with VS
          code old school type.
        </p>

        {/* Bottom Action Images */}
        <div className="flex justify-between pt-4 items-center">
          <div className="flex flex-8 justify-around">
            <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <IoChatbubbleOutline size="20" />
              <span>248</span>
            </div>
            <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <AiOutlineRetweet size="20" />
              <span>248</span>
            </div>

            <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <FaRegHeart size="20" />
              <span>250</span>
            </div>

            <div className="flex gap-1 items-center cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <IoStatsChartOutline size="20" />
              <span>72</span>
            </div>
          </div>

          <div className="flex justify-around flex-1">
            <div className="cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <CiBookmark size="20" />
            </div>
            <div className="cursor-pointer hover:bg-gray-200 rounded-4xl p-2">
              <MdOutlineFileUpload size="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
