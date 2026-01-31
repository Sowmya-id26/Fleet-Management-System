const express=require("express");
const router=express.Router();
const rateLimited=require("../middlewares/rateLimiter");
const{
    addVechile,
    assignDriver,
}=require("./controllers/vechile.controller");
router.post("/add",rateLimiter,addVechile)
router.patch("/assign-driver/:id",assignDriver);
module.exports=router;