const mongoose = require('mongoose');
// create schema
const todoschema = new mongoose.Schema({

    description:{
    type:String,
    required:true
    
},

category:{
    type:String,
    required:true
},

date:{
    type:String,
    required:true
}
});

const todoAppDB = mongoose.model('todoAppDB', todoschema);
 module.exports = todoAppDB;