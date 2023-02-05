const express = require('express');

const {addMessage} = require('../controller/messageController')
const router = express.Router();

router.post('/message',addMessage)

module.exports = router