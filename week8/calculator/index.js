const express = require ('express')
const bodyParser = require('body-parser')
const HttpError = require('./models/http-error')
const userRoute = require ('./routes/person.r');
const app = express();
const Home = require('./views/pages/home')


app.use(bodyParser.json());


app.use(userRoute);
app.use ('/', (req,res,next) => {
    res.send(Home());
})
app.use ("/", (res,req, next) => {
    throw new HttpError("Your route cannot be found", 404);
})
app.use((error, req, res, next) => {
    // Check that Have the res been sent ?
    if(req.headerSent) {
        return next(error);
    }
    // Check the status and set it 
    res.status(error.code || 500);
    // Leave the message 
    res.json({message : error.message || "There some errors occured "});
})
app.listen(5000, () => {console.log ('Server started')});