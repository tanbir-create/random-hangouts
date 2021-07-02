const mongoose = require('mongoose');

//connect to database
const connectDB = async () =>{
    
    try {
        await mongoose.connect('mongodb://localhost:27017/hangouts', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    } catch (error) {
        console.log('Error in connecting to database', error);
    }
}

connectDB();
const db = mongoose.connection;
//error
db.on('error', console.error.bind(console, 'error connecting to db'));

//up and running 
db.once('open', function(){
    console.log('Successfully connected to the database');
});