module.exports={
    lg:function(str){
        console.log(str);
    },
    sendjson:function(res,json){

        res.set('Content-type','application/json')
        res.send(json)
        res.end()
    },

    getsubstr:function(start,end,callback){


        


    }
}