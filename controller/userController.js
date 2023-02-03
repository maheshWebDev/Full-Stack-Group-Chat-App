
const User = require('../model/userModel');

const bcrypt = require('bcrypt')

module.exports.registerUser = async(req,res)=>{
    try {
        const {name,email,password} = req.body

        const isAlreadyExist =await User.findOne({where:{email:email}})
    
        if(isAlreadyExist) return res.status(201).json({"message":"User already exists"})

        const roundSalt = 10
       const hashPassword = await bcrypt.hash(password,roundSalt)
  

       if(hashPassword){
        const user = await User.create({name:name,email:email,password:hashPassword})
       res.status(200).json({"status":"success","message":"user register successfully","data":user})
       }
       
    } catch (error) {
        res.status(500).json({message:"something went wrong"})
    }
    }