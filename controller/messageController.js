const Message = require('../model/messageModel');

module.exports.addMessage = async(req,res)=>{
    
    try {
        const {text} = req.body;
        const message = Message.create({message_text:text})
        res.status(200).json({"status":"success","data":message})
    } catch (error) {
        res.status(500).json({"error":"something went worng"})
    }
}