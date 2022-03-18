exports.index_get= (req,res) => { 
    console.log(req.user); 
    res.render("home/index");
} 
