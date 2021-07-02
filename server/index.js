const express = require('express');
const app = express();
const port = 5000;
const db = require('./config/mongoose');

const passportJWT = require('./config/passport-jwt-strategy');


app.use(express.urlencoded({extended: true})); //support URL-encoded bodies

app.use('/', require('./routes'));

app.listen(5000, function(err){
    
    if(err){
        console.log("Error in starting server", err);
    }
    console.log("Server up and running on PORT: ", port); 
});