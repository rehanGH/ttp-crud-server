const Sequelize = require("sequelize");
const db = require("../db");

const Student = db.define("student", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  address: { type: Sequelize.STRING, allowNull: false },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
    },
    description: { type: Sequelize.TEXT, defaultValue: "", allowNull: false },
});

module.exports = Student;
