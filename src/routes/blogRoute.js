import express from "express";
import blogController from "../controllers/blogController.js";

//create an instance of route
const router=express.Router();

//controller is the same as a function,a logic

router.get("/",blogController.getBlogs);
router.post("/",blogController.createBlog);
router.put("/:id",blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);
export default router ;