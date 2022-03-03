const Auth = require('./model');

exports.findOrCreate = async (profile) => {
  const auth = await Auth.findOne({ oauthId: profile.id });

  if (!auth) {
    const newAuth = new Auth({
      oauthId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
    });

    await newAuth.save();

    return newAuth;
  }

  return auth;
};

exports.getUsers = async () => {
  const users = await Auth.find();
  return users;
}
