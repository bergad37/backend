import express from "express";
import blogroute from "./blogRoute.js"


const router=express.Router();
router.use("/blogs",blogroute);

export default router;
