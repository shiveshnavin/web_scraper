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

    substr:function(str,search_from,start,end ){


        str=""+str

        
        var start_index=str.indexOf(start,search_from)
        var end_index=str.indexOf(end,start_index)

        //lg(""+start_index+" <--> "+end_index)

        var sub=str.slice(start_index,end_index).replace(start,"")
        if(start_index==-1)
        {
            return start_index;
        }
        return {
            start:start_index,
            end:end_index,
            sub:sub
        }


    }
}