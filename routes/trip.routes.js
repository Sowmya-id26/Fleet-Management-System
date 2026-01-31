const express = require("express");
const router=express.Router();
const{
    createTrip,
    endTrip}
    =require("../controllers/trip.controller");
    router.post("/create",createTrip);
    router.post("/end/:id",endTrip);


module.exports=router;