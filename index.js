const express = require('express');
const port = 8000;
const path =require('path');
const db = require('./config/mongoose');
const todoAppDB = require('./modal/todoDB');

const app = express();

// set view engine ejs

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded());

app.use(express.static('asset'));

// handel get request
app.get('/', function(request, response){
todoAppDB.find({}).then((data)=>{
   
     response.render('home', {
todoData:data
    })
}).catch((err)=>console.log("err in creating todo"))


});


// create todo by post request 
app.post('/create-todo', function(request, response){
todoAppDB.create({
    description:request.body.description,
    category:request.body.category,
    date:request.body.date
}).then(()=>console.log("todo created succesfully"))
.catch((err)=>console.log(err));

return response.redirect('back');
});

// delete todo by post request 

app.post("/delete-todo", (req, res) => {
    const dataArray = req.body.checkedIds;
  async function itrate (){
    for(let i of dataArray){

        await todoAppDB.findByIdAndDelete(i);
       }
    }
 itrate();
   res.send({status:'200'});
   return;

   
  });



// setup port

app.listen(port, (err)=>{
    if(err){
        console.log('Error in port number :', port);
        return;
    }

    console.log("server is up !!");
})
