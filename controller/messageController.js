const Message = require('../model/messageModel');

module.exports.addMessage = async(req,res)=>{
    
    try {
        const {text} = req.body;
        const message = await Message.create({message_text:text})
        res.status(200).json({"status":"success","data":message})
    } catch (error) {
        res.status(500).json({"error":"something went worng"})
    }
}

module.exports.getMessage = async(req,res)=>{
    try {
        const messages = await Message.findAll();
        res.status(200).json({"status":"success","data":messages})
        
    } catch (error) {
        res.status(500).json({"status":"fail","error":error})
    }
}