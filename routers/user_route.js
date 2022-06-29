const bodyParser = require("body-parser");
const express = require("express");
const User = require("../models/user_model");
const router = express.Router();

router.post("/register",async(req,res)=>{
    try {

        console.log(req.body);
        const {name,email,password} = req.body;
        
        if(!email || !password || !name){
            return res.status(400).json({errorMessage : "Plese enter all required field"});
        }

        if(password.length < 5){
            return res.status(400).json({errorMessage: "Plese enter password more the 6 character"});
        }

        const existingUser = await User.findOne({email: email});

        if(existingUser){
            return res.status(400).json({message : "With this user all ready exist"});
        }

        const newUser = new User({
            name,
            email,
            password,
        })

        await newUser.save();

        return res.status(200).json({message: "Saved user"});

    } catch (error) {
        console.log(error);
    }
});

router.post('/login',async(req,res)=>{
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({message : "Plese enter all required field"});
        }

        const findUser = await User.findOne({email: email});

        if(!findUser){
            return res.status(400).json({message : "Check email or password "});
        }

        if(findUser['password'] != password){
            return res.status(400).json({message : "Check email or password "});
        }
        return res.status(200).send(findUser);

    } catch (error) {
        console.log(error);
    }
})
module.exports = router;