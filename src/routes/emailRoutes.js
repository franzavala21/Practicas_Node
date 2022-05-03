const express = require('express')
const mailRoutes = express.Router()

const sendAnEmail = require('../controllers/emailControllers')

mailRoutes.post('/', sendAnEmail); 

module.exports = mailRoutes