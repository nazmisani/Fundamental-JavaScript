const bcrypt = require("bcryptjs");
const salt = 10;

const hash_password = (password) => {
  bcrypt.hashSync(password, salt);
};

const compare_password = (password, hashed_password) => {
  bcrypt.compareSync(password, hashed_password);
};

module.exports = { hash_password, compare_password };
