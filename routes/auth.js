const router = require('express').Router(); 
//after npm i express-validator 
const{body} = require("express-validator");

const authCntrl = require("../controllers/auth"); 

router.get("/auth/signup", authCntrl.auth_signup_get);
router.post("/auth/signup",[
    body('username').isLength({min: 3}).withMessage("Username must be at least 3 characters long").notEmpty().withMessage("username cannot be null"),
    body('emailAddress').isEmail(), 
    body('password').isLength({min:6})
], authCntrl.auth_signup_post);


router.get("/auth/signin", authCntrl.auth_signin_get);  
router.post("/auth/signin", authCntrl.auth_signin_post); 

router.get("/auth/logout", authCntrl.auth_logout_get);

module.exports = router;