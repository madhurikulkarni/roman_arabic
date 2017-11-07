var express=require('express');
var arabicController=require('./controllers/arabicController')
var app=express();

//set up template engine
app.set('view engine','ejs');

//static files
app.use(express.static(__dirname + '/assets'));
 
//fire controller
arabicController(app);

//listen to port
app.listen(3000);
console.log('You are listening to port 3000');