
const User = require('../model/userModel');

const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');

const generateAccessToken = (user)=> {
    return jwt.sign({userId:user.dataValues.id}, process.env.JWT_SECRET);
  }

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


    module.exports.loginUser = async(req,res)=>{
        try {
            const {email,password} = req.body
        
            const user = await User.findOne({where:{email:email}});
          
            if(!user) return res.status(404).json({"status":"fail", "message":"Invalid Email"})
            
               const validPssword = await bcrypt.compare(password,user.dataValues.password);
              
               if(!validPssword) return res.status(401).json({message :"Invalid password."});
            
             const token = generateAccessToken(user)
             return res.status(200).json({'status':"success","message":"user login sucssessful","token":token})
            
         
            
        } catch (error) {
            res.status(500).json({"status":"fail","message":"something went wrong"})
        }

    }