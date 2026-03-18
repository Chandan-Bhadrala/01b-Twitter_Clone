import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import { IoFlagOutline } from "react-icons/io5";

const CreatePost = () => {
  return (
    <div className="border-b border-amber-200 pb-4">
      {/* Top-section */}
      <div className="flex items-center justify-around font-semibold text-xl border-b border-amber-200">
        <div className="hover:cursor-pointer hover:bg-amber-200 w-full text-center py-4 ">
          For you
        </div>

        <div className="hover:cursor-pointer hover:bg-amber-200 w-full text-center py-4">
          Following
        </div>
      </div>

      {/* Post-section */}
      <div className="flex  p-4 items-start ">
        <div className="flex items-center space-x-3">
          <img
            src="https://i.pravatar.cc/150"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="ml-4 flex-1 ">
          <textarea
            placeholder="What's happening"
            className="border-b border-amber-200 outline-none w-full  resize-none h-30"
          />
        </div>
      </div>

      {/* Post-Button-section */}
      <div className="flex justify-between px-8 items-center">
        <div className="flex justify-around gap-x-4 ml-8">
          <CiImageOn size="24px"/>
          <MdOutlineGifBox size="24px"/>
          <VscSmiley size="24px"/>
          <IoFlagOutline size="24px"/>
        </div>

        <button className="bg-black text-lg text-white font-semibold py-2 rounded-4xl px-8 cursor-pointer">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
