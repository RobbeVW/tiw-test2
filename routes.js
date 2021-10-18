const express = require('express');
const router = express.Router();

// Provide an /add endpoint followed by 2 values that will be added. Result is returned
// in JSON format
router.get('/add/:num1/:num2', function (req, res) {
    var num1 = parseInt(req.params.num1)
    var num2 = parseInt(req.params.num2)
    var sum = (num1 + num2).toString()
    res.json(sum)
})

// Provide an /subtract endpoint followed by 2 values that will be added. Result is returned
// in JSON format
router.get('/subtract/:num1/:num2', function (req, res) {
  // TODO
  
})


module.exports = router