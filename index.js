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
    //lg(urlparser.parse(url))
    var parsed=urlparser.parse(url)
    request(url,function(err,res,body){

        callback(body)
    })
    
}
var start=function(url,ondone)
{
    gethtml(url,function(body){

                    
        var data = body//fs.readFileSync('./public/test.txt');

        //lg(data)
        
    

        var  lasi=data.lastIndexOf("<div class=showcard__description>");
        var end=0;
        var search_from=0;
        //lg(lasi)
        var ress=""

        while(end<lasi){
        
            //lg("Searching from : "+search_from +" End was "+end)
            var r=lib.substr(data,search_from,'<div class=showcard__thumbnail>','<div class=showcard__description>') 
            if(r==-1)
            {
                break;
            }
            end=r.end
            search_from=end;
            ress=ress+r.sub;
            
            
            
        }
        
        ondone(ress)


    }) 


}
app.get('/all',function(req,res){
    var url="https://www.bookyogaretreats.com/all/d/asia-and-oceania/india?page=1";
     
        gethtml(url,function(body){

            res.send(body)

        }) 
     
})



app.get('/',function(req,res){
     var url="https://www.bookyogaretreats.com/all/d/asia-and-oceania/india?page="

    var i=0;
    var tosend=""
    var callback=function(data){
        tosend=tosend+data
        if(i<12){
            i=i+1
            var url2=url+i
            start(url2,callback)  
        }
        else
            res.send(tosend)
    };


    start(url+i,callback)   
      
    

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