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

    const tweet = await Tweet.findByIdAndUpdate({tweetId},$pull)
};

// # Simple toggling Controller
/**
import Tweet from "../models/Tweet.js";

export const likeOrDislike = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const userId = req.user.id; // assuming auth middleware sets this

    const tweet = await Tweet.findById(tweetId);

    if (!tweet) {
      return res.status(404).json({
        success: false,
        message: "Tweet not found",
      });
    }

    const isLiked = tweet.like.includes(userId);

    if (isLiked) {
      // Dislike (remove userId)
      await tweet.updateOne({
        $pull: { like: userId },
      });

      return res.status(200).json({
        success: true,
        message: "Tweet disliked",
      });
    } else {
      // Like (add userId)
      await tweet.updateOne({
        $push: { like: userId },
      });

      return res.status(200).json({
        success: true,
        message: "Tweet liked",
      });
    }

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}; 
*/

// # Atomic toggling Controller
/**
import Tweet from "../models/Tweet.js";

export const likeOrDislike = async (req, res) => {
  try {
    const tweetId = req.params.id;
    const userId = req.user.id;

    // Try removing first (dislike case)
    const removed = await Tweet.findOneAndUpdate(
      { _id: tweetId, like: userId },
      { $pull: { like: userId } },
      { new: true }
    );

    if (removed) {
      return res.status(200).json({
        success: true,
        message: "Tweet disliked",
      });
    }

    // If not removed, then add (like case)
    const added = await Tweet.findOneAndUpdate(
      { _id: tweetId },
      { $addToSet: { like: userId } }, // prevents duplicates
      { new: true }
    );

    if (!added) {
      return res.status(404).json({
        success: false,
        message: "Tweet not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Tweet liked",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
 */