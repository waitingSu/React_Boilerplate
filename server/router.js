const Authentication = require('./controllers/authentication');
require('./services/passport'); //passportService 
const passport = require('passport');

// Middleware between request and router handler
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function (app) {
   app.get('/', requireAuth, function (req, res) {
      res.send({ hi: 'there' });
   });
   app.post('/signin',requireSignin, Authentication.signin);
   app.post('/signup', Authentication.signup);
}