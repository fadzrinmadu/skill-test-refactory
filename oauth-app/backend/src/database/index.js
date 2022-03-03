const mongoose = require('mongoose');

const databaseURI = process.env.DATABASE_URI;

mongoose.connect(databaseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
