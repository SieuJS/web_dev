const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const calculatorRoute = require('./routes/calculator');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(calculatorRoute);

    
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
  
