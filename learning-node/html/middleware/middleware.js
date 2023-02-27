module.exports=appFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide Age");
    }
    else if(req.query.age<18){
        res.send("sorry you are below! 18");
    }
    else{
        next();
    }
}
