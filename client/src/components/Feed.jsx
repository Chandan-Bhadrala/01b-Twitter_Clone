import CreatePost from "./CreatePost";
import Tweet from "./Tweet";

const Feed = () => {
  return (
    <div className="border border-amber-200 h-screen ">
      <CreatePost />
      <Tweet/>
    </div>
  );
};

export default Feed;
