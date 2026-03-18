const CreatePost = () => {
  return (
    <div>
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
            className="border border-amber-200 outline-none w-full  resize-none h-40"
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
