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
