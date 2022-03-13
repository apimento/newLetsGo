//after npm i passport passport-local
const passport = require("passport"); 

const LocalStrategy = require('passport-local').Strategy;  

const User = require("../model/User"); 

// serializedUser  - 
//store user id / data to the session
passport.serializeUser(function(user, done){ 
    done(null,user.id);
})

//DeserializedUser 
//reading info from db according to user id (session)
passport.deserializeUser(function(id, done){ 
    User.findById(id, function(err,user){ 
        done(err,user);
    })
})

passport.use(new LocalStrategy(
    {
       usernameField: "username", 
       passwordField: "password"
    },
    function(username, password, done) {
      User.findOne({ username: username}, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
  


module.exports = passport; 