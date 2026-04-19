import { Router } from "express";
import { bookmarks, getMyProfile, getOtherUsers } from "../controllers/user.controller.js";


const router = Router();


 router.put("/bookmark/:id", bookmarks);
 router.get("/profile/:id", getMyProfile);
 router.get("/profile", getOtherUsers);

export default router;
