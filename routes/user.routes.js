const express = required("express");
const router=express.Router();
const {registerUser}=require("../controllers/user.controller");
router.post("/register", registerUser);
module.export=router;