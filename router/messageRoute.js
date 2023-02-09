const express = require('express');

const {addMessage,getMessage,getNewMessages} = require('../controller/messageController')
const router = express.Router();

router.post('/message',addMessage)

router.get('/message',getMessage)

router.get('/message/:id',getNewMessages)




module.exports = router