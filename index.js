var express=require('express')
var app=express()
var hbs=require('express-handlebars')
var path=require('path')
var urlparser=require('url')
var http=require('http')
var request=require('request')
var fs=require('fs')
var lib=require('./js/lib.js')
var lg=lib.lg

app.engine('hbs',hbs({
    extname:"hbs"
}))


app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'public')))

var gethtml=function(url,callback){

    lg(url)
    lg(urlparser.parse(url))
    var parsed=urlparser.parse(url)
    request(url,function(err,res,body){

        callback(body)
    })
    
}



app.get('/',function(req,res){
    var url=req.query.url;
    /*
        gethtml(url,function(body){

            res.send(body)

        }) 
    */

    var data = fs.readFileSync('test.txt');

    lg(data)
    
    res.send(lib.substr(data,'<div class=sf_filter_group>','<div id=sf_price class=sf_item'));
 

    

    

})


app.get('/hello',function(req,res){


    res.render('index',{

        head:"Hello World !",
        body:{
            main_para_head:"Hello There !",
            main_para:"This is an empty NodeJS and ExpressJS app with Handlebars . You can use it to quickly start building apps on top of it ."
            
        }

    })


})


app.listen('8080',function(){
    console.log('Server Started');
})