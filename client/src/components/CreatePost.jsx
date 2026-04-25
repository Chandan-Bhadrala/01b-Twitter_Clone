import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import { IoFlagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { TWEET_API_END_POINT } from "../utils/constants";
import axios from "axios";
import { addTweet } from "../redux/tweetSlice";

const CreatePost = () => {
  const { image } = useSelector((store) => store.user.user);
  const [tweet, setTweet] = useState("");
  const dispatch = useDispatch();

  const handlePost = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_END_POINT}`,
        { description: tweet },
        { withCredentials: true },
      );
      setTweet("");
      console.log(res);
      dispatch(addTweet(res.data.tweet));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b border-gray-200 pb-4">
      {/* Top-section For you & Following */}
      <div className="flex items-center justify-around border-b border-gray-200 text-xl font-semibold">
        <div className="w-full py-4 text-center hover:cursor-pointer hover:bg-gray-200">
          For you
        </div>

        <div className="w-full py-4 text-center hover:cursor-pointer hover:bg-gray-200">
          Following
        </div>
      </div>

      {/* Post-Input-section */}
      <div className="flex items-start p-4">
        <img
          src={image || "https://i.pravatar.cc/150"}
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />

        <textarea
          placeholder="What's happening?"
          className="ml-4 h-30 w-full flex-1 resize-none border-b border-gray-200 text-xl outline-none"
          onChange={(e) => {
            setTweet(e.target.value);
          }}
          value={tweet}
        />
      </div>

      {/* Post-Button-section */}
      <div className="flex items-center justify-between px-8">
        <div className="ml-8 flex justify-around gap-x-4">
          <CiImageOn size="24px" />
          <MdOutlineGifBox size="24px" />
          <VscSmiley size="24px" />
          <IoFlagOutline size="24px" />
        </div>

        <button
          className="cursor-pointer rounded-4xl bg-black px-8 py-2 text-lg font-semibold text-white"
          onClick={handlePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
