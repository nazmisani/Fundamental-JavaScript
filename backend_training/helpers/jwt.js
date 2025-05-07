const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const signToken = (payLoad) => {
  return jwt.sign(payLoad, secretKey);
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

module.exports = { signToken, verifyToken };
