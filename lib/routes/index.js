const express = require('express')
const router = express.Router()
const notes = require('./notes/notes.controller')
router.use('/notes', notes)
// Add more routes here if you want!
module.exports = router