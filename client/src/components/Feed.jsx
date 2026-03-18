import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="h-screen border border-amber-200">
      <CreatePost />
      <Tweet />
    </div>
  );
};

export default Feed;
