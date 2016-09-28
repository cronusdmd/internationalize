const Router = require('express').Router;
const controllers = require('../controllers');
const status = require('http-status');

let app = Router();

const authenticateUser = (req, res, next) =>
  req.isAuthenticated() ? next() : res.status(status.UNAUTHORIZED).json({ error: 'Unauthorized request.' });

/* API routes ('/api') */
app.use('/api', Router()
  .post('/users', controllers.users.create)
);

/* Authentication routes ('/auth') */
app.use('/auth', Router()
  .post('/signin', controllers.auth.signIn)
  .delete('/signout', authenticateUser, controllers.auth.signOut)
  .get('/me', authenticateUser, controllers.auth.me)
);

/* Application routes ('/') */

/* Serve Angular on '/' or when nothing else matches. */
app.get('*', (req, res) => {
  res.sendFile(require('path').join(__dirname + '/../../client/index.html'));
});

module.exports = app;
