exports.index_get= (req,res) => { 
    console.log(req.user); 
    // console.log(currentUser);
    res.render("home/index");
} 
