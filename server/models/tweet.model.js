import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  },
);

// ✅ Indexing based on the tweet creation time.
/**
With index:
It directly jumps to relevant users' tweets
Already sorted → faster
*/
TweetSchema.index({ userId: 1, createdAt: -1 });

// To create a model to interact w/ the mongoose.
// We've called a mongoose.model function with two arguments.
// One is the name of the collection "users" and other is the schema that goes into that collection.
// And we receive back a model, which we store in the User variable.
export const Tweet = mongoose.model("Tweet", TweetSchema);

/**
A version for the NextJS.
// Use "mongoose.models.User" to check if the model exists before creating a new one.
// This prevents the "Cannot overwrite model once compiled" error.
const User = mongoose.models.User || mongoose.model("User", UserSchema);
*/
