import { Router } from "express";
import { bookmarks } from "../controllers/user.controller.js";


const router = Router();


 router.put("/bookmark/:id", bookmarks);

export default router;
