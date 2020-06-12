// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Campus = require("./campus");
const settudent = require('./student')

Campus.hasMany(Student);

Student

module.exports = {
  Campus,
  Student
};
