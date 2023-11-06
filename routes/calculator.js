const express = require('express');
const calculatorTemplate = require('../views/calculator_template');
const calculateHandler = require('../handlers/calculator')
const router = express.Router();

router.get('/', (req,res)=>{
    res.send(calculatorTemplate({}));
})
router.post('/' , (req, res) => {
    console.log(req.body);
    const data = req.body;
    data.resultAjax = calculateHandler(data);
    
    res.send(calculatorTemplate({data}));
})

module.exports = router;