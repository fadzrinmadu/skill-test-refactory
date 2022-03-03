const router = require('express').Router();
const res = require('express/lib/response');
const passport = require('passport');
const authService = require('./service');

const clientURL = process.env.CLIENT_URL;

router.get('/users', async (request, response) => {
  const users = await authService.getUsers();
  console.log(users);

  return response.status(200).json({
    status: 'success',
    users,
  });
});

router.get('/login/success', (request, response) => {
  console.log(request.user);

  if (request.user) {
    return response.status(200).json({
      status: 'success',
      user: request.user,
    });
  }

  return response.end();
});

router.get('/login/failed', (request, response) => {
  return response.status(401).json({
    success: false,
    message: 'failure',
  });
});

router.get("/logout", (request, response) => {
  request.logout();
  return response.redirect(clientURL);
});

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/google/callback', passport.authenticate('google', {
  successRedirect: clientURL,
  failureRedirect: '/login/failed',
}))

router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile'],
}));

router.get('/facebook/callback', passport.authenticate('facebook', {
  successRedirect: clientURL,
  failureRedirect: '/login/failed',
}));

module.exports = router;
