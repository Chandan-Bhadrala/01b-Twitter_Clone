import mongoose from "mongoose";
import { User } from "../models/user.model.js";

export const bookmarks = async (req, res) => {
  const tweetId = req.params.id;
  const userId = req.user;

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
  const userId = req.user;

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
  const userId = req.user;
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

// Follow/unFollow user.
export const follow = async (req, res) => {
  const userId = req.user;
  const followingUserId = req.params.id;

  if (userId === followingUserId) {
    return res.status(400).json({ message: "Cannot follow yourself" });
  }

  // ✅ Using session to maintain DB consistency.
  const session = await mongoose.startSession();

  session.startTransaction();
  try {
    const isFollowing = await User.findOne(
      {
        _id: userId,
        following: followingUserId,
      },
      null,
      { session }, // ✅ attach session
    );

    if (isFollowing) {
      // Write 1.
      const res1 = await User.updateOne(
        { _id: userId },
        { $pull: { following: followingUserId } },
        { session }, // ✅
      );

      // Write 2.
      const res2 = await User.updateOne(
        { _id: followingUserId },
        { $pull: { followers: userId } },
        { session }, // ✅
      );

      // ✅ Validate BEFORE commit
      if (res1.matchedCount === 0 || res2.matchedCount === 0) {
        throw new Error("User not found");
      }

      await session.commitTransaction();
      session.endSession(); // ✅ required to close to avoid memory leak.

      return res
        .status(200)
        .json({ message: "User un-followed successfully.", success: true });
    } else {
      // Not already following.

      // Write 1.
      const res1 = await User.updateOne(
        { _id: userId },
        { $addToSet: { following: followingUserId } },
        { session }, // ✅
      );

      // Write 2.
      const res2 = await User.updateOne(
        { _id: followingUserId },
        { $addToSet: { followers: userId } },
        { session }, // ✅
      );

      // ✅ Validate BEFORE commit
      if (res1.matchedCount === 0 || res2.matchedCount === 0) {
        throw new Error("User not found");
      }

      await session.commitTransaction();
      session.endSession(); // ✅ required to close to avoid memory leak.

      return res
        .status(200)
        .json({ message: "User followed successfully.", success: true });
    }
  } catch (error) {
    await session.abortTransaction();
    session.endSession(); // ✅ required
    return res
      .status(500)
      .json({ message: "Follow operation failed.", success: false });
  }
};
