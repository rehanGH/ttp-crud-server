// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require("./campus");
<<<<<<< HEAD
const settudent = require('./student')

Campus.hasMany(Student);

Student

module.exports = {
  Campus,
  Student
=======
const Student = require("./student");

Campus.hasMany(Student);

Student.belongsTo(Campus);

module.exports = {
  Campus,
  Student,
>>>>>>> 6f950aff67cd0184609841cd8a3150a2c11e72e5
};
