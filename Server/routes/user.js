const express = require("express");
const router = express.Router();
const User = require("../models/User");



router.post("/login",async (req,res)=>{
    const {username,password} = req.body;
    const userExist = await User.findOne({username:username});
    if(!userExist){
        return res.json({exist : false,matched:false});
    }else if(userExist.password != password){
        return res.json({exist : true,matched : false});
    }else{
        return res.json({exist : true,matched : true});
    }
});


router.post("/signin",async (req,res)=>{

    const {username,password} = req.body;
    const userExist =  await  User.findOne({username:username});
    if(userExist){ return res.json({exist : true}) }
    const newUser = new User({username,password});
    const savedUser = await newUser.save();
    res.json({username:savedUser.username 
    ,exist:0});
});


module.exports = router;