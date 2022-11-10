const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//library importing express ejs layouts
const expressLayouts = require('express-ejs-layouts');

//connection to db
const db = require('./config/mongoose');

app.use(express.urlencoded({extended:true})); //extended true for removing deprecateed warning
app.use(cookieParser());

app.use(express.static('./assets'));//accessing static folder -- assets
app.use(expressLayouts); // using express ejs layouts

//extract styles and scripts from subpages into the layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use express router - always after middle ware , body parser   
app.use('/',require('./routes'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');




app.listen(port,function(err){
    if(err){
        //interpolition method
        console.log(`Error running server : ${err}`);
    }
    console.log(`Running successfully on port : ${port}`);
});