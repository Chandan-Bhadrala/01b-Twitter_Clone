import { Router } from "express";
import { bookmarks, follow, getMyProfile, getOtherUsers } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middleware/auth.middleware.js";


const router = Router();


 router.put("/bookmark/:id", isAuthenticated,bookmarks);
 router.get("/profile/:id", isAuthenticated,getMyProfile);
 router.get("/profile", isAuthenticated,getOtherUsers);
 router.put("/follow", isAuthenticated,follow);

export default router;
