import { Router } from "express";
import { createTweet, deleteTweet, likeOrDislike } from "../controllers/tweet.controller.js";

const router = Router();

router.post("/", createTweet);
router.delete("/:id", deleteTweet);
router.put("/:id", likeOrDislike);

export default router;
