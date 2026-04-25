import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="min-h-screen flex flex-col border border-amber-200">
      <CreatePost />
      <Tweet />
    </div>
  );
};

export default Feed;
