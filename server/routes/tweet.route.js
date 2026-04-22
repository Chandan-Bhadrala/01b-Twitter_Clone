import { Router } from "express";
import {
  allTweets,
  createTweet,
  deleteTweet,
  followingTweets,
  likeOrDislike,
} from "../controllers/tweet.controller.js";

const router = Router();

router.post("/", createTweet);
router.delete("/:id", deleteTweet);
router.put("/:id", likeOrDislike);
router.get("/tweets/", allTweets); // Fetch page from the query and not from the params.
router.get("/followingTweets/", followingTweets); // Fetch page from the query and not from the params.

export default router;
