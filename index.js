var express=require('express')
var app=express()
var hbs=require('express-handlebars')
var path=require('path')

app.engine('hbs',hbs({
    extname:"hbs"
}))


app.set('view engine','hbs')
app.use(express.static(path.join(__dirname,'public')))

app.get('/',function(req,res){


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