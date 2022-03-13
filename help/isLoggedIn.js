//middleware for user to check(if logged in or not)
module.exports = (req,res,next) => { 
    if(!req.user) 
    { 
        res.redirect("/auth/signin")
    } 
    else{
        next();
     }
}