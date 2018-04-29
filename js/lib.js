var lg=function(str){
    console.log(str);
}
module.exports={
    lg:lg,
    sendjson:function(res,json){

        res.set('Content-type','application/json')
        res.send(json)
        res.end()
    },

    substr:function(str,start,end ){


        str=""+str
        lg(str)
        
        var start_index=str.indexOf(start)
        var end_index=str.indexOf(end,start_index)

        lg(""+start_index+" : "+end_index)
        var sub=str.slice(start_index,(end_index+1)).replace(start,"")
        return (sub)


    }
}