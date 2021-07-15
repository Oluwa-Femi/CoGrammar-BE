const jwt = require('jsonwebtoken');

const Auth = {
  toAuthJSON(user) {
    return {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: this.generateToken(user),
    };
  },

  generateToken(user) {
    const payload = {
      id: user._id,
    };

    const options = {
      expiresIn: '24h',
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, options);
    return token;
  },
};

module.exports = { Auth };
