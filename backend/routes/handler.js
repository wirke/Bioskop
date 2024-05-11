const express = require('express')
const router = express.Router()

router.get('api/data', (req, res) =>{
    res.json({message:'Express.js'})
})

module.exports = router