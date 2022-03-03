require('dotenv').config();

const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const database = require('./database');

require('./api/auth/passport');

const authRouter = require('./api/auth/router');

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieSession({
  name: 'session',
  keys: ['supersecretkey'],
  maxAge: 24 * 60 * 60 * 100, // 1 day
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }),
);

app.use('/auth', authRouter);

database.on('open', () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

database.on('error', (error) => {
  console.log(`Cannot connect to mongodb: ${error}`);
});
