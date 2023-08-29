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

const TodoAppDB = mongoose.model('TodoAppDB', todoschema);
 module.exports = TodoAppDB;