import { Tweet } from "../models/tweet.model.js";
import { User } from "../models/user.model.js";

export const createTweet = async (req, res) => {
  try {
    const { description } = req.body;
    const id = req.user;
    if (!description) {
      return res
        .status(401)
        .json({ success: false, message: "description required." });
    }

    const newTweet = await Tweet.create({ description, userId: id });
    return res.status(201).json({
      message: "Tweet created successfully.",
      success: true,
      tweet: newTweet,
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
    const addLike = await Tweet.findByIdAndUpdate(tweetId, {
      $push: { like: userId },
    });

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

// Get user + Following user tweets.
export const allTweets = async (req, res) => {
  const userId = req.user;
  const page = Math.max(1, parseInt(req.query.page) || 1); // Math. max to avoid checking for negative page query.
  const limit = 10;

  try {
    const user = await User.findById(userId); // Fetching user detail to fetch following-user ids.

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // $in operator -> find tweets based on userId to be -> mine, person1, person2 or person3 and so on...
    const tweets = await Tweet.find({
      userId: { $in: [userId, ...(user.following || [])] }, // [] -> Safety provision if user has no following.
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit) // For page = 3. Skip 2*limit = 20 (Skip first 20 tweets).
      .limit(limit)
      .populate("userId", "name");

    return res
      .status(200)
      .json({ message: "Tweets fetched", success: true, tweets });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to get all tweets", success: false });
  }
};

// Get only Following user tweets.
export const followingTweets = async (req, res) => {
  const userId = req.user;
  const page = Math.max(1, parseInt(req.query.page) || 1); // Math. max to avoid checking for negative page query.

  const limit = 10;

  try {
    const user = await User.findById(userId); // Fetching user detail to fetch following-user ids.

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    if (!user.following || user.following.length === 0) {
      return res.status(200).json({
        message: "No following users",
        success: true,
        tweets: [],
      });
    }

    // $in operator -> find tweets based on following userIds-> person1, person2 or person3 and so on...
    const tweets = await Tweet.find({
      userId: { $in: user.following },
    })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit) // For page = 3. Skip 2*limit = 20 (Skip first 20 tweets).
      .limit(limit);

    return res
      .status(200)
      .json({ message: "Tweets fetched", success: true, tweets });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to get all tweets", success: false });
  }
};
