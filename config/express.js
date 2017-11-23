var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy
    //Other strategies go here
;
 
var verifyHandler = function(token, tokenSecret, profile, done) {

  process.nextTick(function() {
    User.find( { email : profile.emails[0].value } ).exec(function (err, user){
    
        if (err) {
          return done(err, user[0]);
        }
        if ( Object.keys(user).length != 0 ) {
          
          return done(null, user[0]);
        }else{
          
          var data = {
              name: profile.displayName,
              email: profile.id,
              photo: profile.photos
          };

          if (profile.emails && profile.emails[0] && profile.emails[0].value) {
            data.email = profile.emails[0].value;
          }
          if (profile.name && profile.name.givenName) {
            data.name = profile.name.givenName;
          }
          if (profile.photos) {
            console.log(profile.photos)
            data.photo = profile.photos[0].value;
          }
          
          User.create(data, function(err, user) {
              //if (err) {return done(err, user);;}

             
              return done(null, user);
          });

        }
    });
  });
};

 	
    


 
passport.serializeUser(function(user, done) {
  
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  
  User.find({ id:id}, function(err, user) {
    done(err, user);
  });
  
});
 
module.exports.http = {

 
  customMiddleware: function(app) {

    //console.log(process.env);
    //console.log(sails.config);
 
    passport.use(new FacebookStrategy({
      clientID: sails.config.FACEBOOK_KEY , // Use your Facebook App Id
      clientSecret: sails.config.FACEBOOK_SECRET , // Use your Facebook App Secret
      callbackURL: "/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    }, verifyHandler));
 
    app.use(passport.initialize());
    app.use(passport.session());
  }

};