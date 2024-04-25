const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://antaraarifa:Antifa906@cluster0.girbauh.mongodb.net/mern-burger'

mongoose.connect(mongoURL , {useUnifiedTopology : true , useNewUrlParser : true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('MongoDB connection successful');
})

db.on('error' , ()=>{
    console.log('MongoDB connection failed');
})

module.exports = mongoose
