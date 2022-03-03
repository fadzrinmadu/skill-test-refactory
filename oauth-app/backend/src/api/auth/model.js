const mongoose = require('mongoose');

const schema = mongoose.Schema({
  oauthId: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});

module.exports = mongoose.model('Auth', schema);
