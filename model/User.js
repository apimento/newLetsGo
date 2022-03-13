const mongoose = require("mongoose");  

const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({ 

    username: { 
        type: String, 
        required: true,
        mainlength: [2, "Must be at least 2 characters long"]
    },
    emailAddress: { 
        type: String, 
        required: true, 
        lowercase: true, 
        unique: true
    },
    password:{
        type: String, 
        required: true, 
        minlength: [6, "Must be at least 6 characters long"]

    } 

}
, 
    {
    timestamps: true
})  

    //verifyPassword 
    userSchema.methods.verifyPassword = function(password){ 
        //method to compare(verify)password.. pass entered and pass in db
        return bcrypt.compareSync(password, this.password)
    }

const User = mongoose.model("User", userSchema); 

module.exports = User; 