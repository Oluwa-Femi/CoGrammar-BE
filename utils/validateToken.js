const jwt = require("jsonwebtoken");
const UserModel = require('../resources/users/users.model');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'unauthorized, please log in' });
  }

  try {
    const { id } = await jwt.verify(token, process.env.SECRET_KEY);

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return res.status(401).json({
        message: 'invalid token provided',
      });
    }

    req.userId = id;
    return next();
  } catch (error) {
    return res.status(500).json({
      error: error || 'see Something went wrong',
    });
  }
};

module.exports = { verifyToken };
