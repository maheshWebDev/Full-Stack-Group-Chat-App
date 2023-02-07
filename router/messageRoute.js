const express = require('express');

const {addMessage,getMessage} = require('../controller/messageController')
const router = express.Router();

router.post('/message',addMessage)

router.get('/message',getMessage)

module.exports = router