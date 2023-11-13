const express = require ('express')
const HttpError = require ('../models/http-error')

const userModel = require('../models/user-model')



const router = express.Router();

router.get('/', async (req,res,next) => {
    let userData ;
    try{
        userData =await userModel.run();
        console.log(userData)
    }
    catch (err) {
        return next (new HttpError(err.message, err.code || 404))
    }
    res.json({userData})
})

router.get('/users/page', async (req,res,next) => {
    const curPage = req.body.page;
    console.log(curPage);
    res.json({abc : "helo"})
})

module.exports = router;