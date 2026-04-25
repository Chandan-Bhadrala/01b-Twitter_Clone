import { IoChatbubbleOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useAllTweets } from "../hooks/useTweets";

const Tweet = () => {
  const page = 1;
  useAllTweets(page);
  const tweets = useSelector((store) => store.tweet.allTweets);
  console.log(tweets);
  return (
    <div>
      {tweets.map((tweet) => (
        <div className="flex gap-4 border-b border-gray-200 p-4">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="h-10 w-10 rounded-full"
          />

          <div>
            <h1 className="font-semibold">
              Chandan Bhadrala{" "}
              <span className="font-normal text-gray-400">
                @ChandanBhadrala 1m
              </span>
            </h1>
            <h2 className="font-normal text-gray-400">Replying to @Kirat_tw</h2>
            <p>
              I'm onto the learning phase so, I'm all hands on the keyboard with
              VS code old school type.
            </p>

            {/* Bottom Action Images */}
            <div className="flex items-center justify-between pt-4">
              <div className="flex flex-8 justify-around">
                <div className="flex cursor-pointer items-center gap-1 rounded-4xl p-2 hover:bg-gray-200">
                  <IoChatbubbleOutline size="20" />
                  <span>248</span>
                </div>
                <div className="flex cursor-pointer items-center gap-1 rounded-4xl p-2 hover:bg-gray-200">
                  <AiOutlineRetweet size="20" />
                  <span>248</span>
                </div>

                <div className="flex cursor-pointer items-center gap-1 rounded-4xl p-2 hover:bg-gray-200">
                  <FaRegHeart size="20" />
                  <span>250</span>
                </div>

                <div className="flex cursor-pointer items-center gap-1 rounded-4xl p-2 hover:bg-gray-200">
                  <IoStatsChartOutline size="20" />
                  <span>72</span>
                </div>
              </div>

              <div className="flex flex-1 justify-around">
                <div className="cursor-pointer rounded-4xl p-2 hover:bg-gray-200">
                  <CiBookmark size="20" />
                </div>
                <div className="cursor-pointer rounded-4xl p-2 hover:bg-gray-200">
                  <MdOutlineFileUpload size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tweet;
