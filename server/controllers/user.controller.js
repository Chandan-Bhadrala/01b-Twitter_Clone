import { User } from "../models/user.model.js";

export const bookmarks = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  try {
    const removed = await User.findOneAndUpdate(
      { _id: userId, bookmarks: tweetId }, // Find userId AND bookmarks.
      { $pull: { bookmarks: tweetId } }, // If found pull it out.
      { new: true }, // return the whole tweet document (Huge Payload).
    );

    // If removed
    if (removed) {
      return res
        .status(200)
        .json({ success: true, message: "Tweet bookmarked removed." });
    }

    // If not removed. Then like it.
    const addBookmark = await User.findByIdAndUpdate(userId, {
      $addToSet: { bookmarks: tweetId },
    });

    // If tweet was never found.
    if (!addBookmark) {
      return res
        .status(404)
        .json({ message: "Tweet not found", success: false });
    }

    // If all went nice.
    return res.status(201).json({ message: "Tweet bookmarked", success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getMyProfile = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("-password");
    return res.status(200).json({
      user,
      message: "User details fetched successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Failed to fetch user details.");
  }
};

export const getOtherUsers = async (req, res) => {
  const userId = req.body.id;
  try {
    const otherUsers = await User.find({ _id: { $ne: userId } }).select(
      "-password",
    );

    if (!otherUsers) {
      return res
        .status(200)
        .json({ message: "No other users in the DB", status: true });
    }
    return res.status(200).json({
      otherUsers,
      message: "Other users details fetched successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json("Failed to fetch other users details.");
  }
};

export const follow = async(req,res)=>{
  const userId = req.body.id;
  try {
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"Failed to add follow"})
  }
}