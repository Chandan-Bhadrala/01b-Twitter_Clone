import { Router } from "express";
import {
  allTweets,
  createTweet,
  deleteTweet,
  followingTweets,
  likeOrDislike,
} from "../controllers/tweet.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/", isAuthenticated, createTweet);
router.delete("/:id", isAuthenticated, deleteTweet);
router.put("/:id", isAuthenticated, likeOrDislike);
router.get("/", isAuthenticated, allTweets); // Fetch page from the query and not from the params.
router.get("/followingTweets/", isAuthenticated, followingTweets); // Fetch page from the query and not from the params.

export default router;
