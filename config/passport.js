const passport = require('passport');


const GoogleStrategy = require('passport-google-oauth2').Strategy;


// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile)
    
    }

  
));

passport.serializeUser(function(student, done) {
    
});

passport.deserializeUser(function(id, done) {
   
  })