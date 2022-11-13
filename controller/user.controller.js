const { sequelize } = require("../models");

const User = sequelize.models.users;

const createUser = async () => {
  try {
    const user = await User.create({
      name: "user",
      email: "user@example.com",
      password: "password",
      phone: "12344",
      type: "admin",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
