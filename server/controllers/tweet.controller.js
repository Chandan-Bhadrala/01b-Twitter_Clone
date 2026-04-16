import { Tweet } from "../models/tweet.model.js";

export const createTweet = async (req, res) => {
  try {
    const { description, id } = req.body;
    if (!description) {
      return res
        .status(401)
        .json({ success: false, message: "description required." });
    }

    await Tweet.create({ description, userId: id });
    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = async (req, res) => {
  const tweetId = req.params.id;
  if (!tweetId) {
    return res
      .status(400)
      .json({ status: false, message: "Tweet doesn't exist" });
  }

  try {
    await Tweet.findByIdAndDelete(tweetId);

    return res.status(201).json({
      message: "Tweet deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeOrDislike = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user.id;

  try {
    const removed = await Tweet.findOneAndUpdate(
      { _id: tweetId, like: userId }, // Find tweet based on this condition.
      { $pull: { like: userId } }, // If found pull it out.
      { new: true }, // return the whole tweet document (Huge Payload).
    );

    // If removed
    if (removed) {
      return res
        .status(200)
        .json({ success: true, message: "Tweet un-liked." });
    }

    // If not removed. Then like it.
    const addLike = await Tweet.findByIdAndUpdate(
       tweetId ,
      { $push: { like: userId } },
    );

    // If tweet was never found.
    if (!addLike) {
      return res
        .status(404)
        .json({ message: "Tweet not found", success: false });
    }

    // If all went nice.
    return res.status(201).json({ message: "Tweet Liked", success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
