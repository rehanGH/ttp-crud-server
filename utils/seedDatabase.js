const { Campus, Student } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Campus.create({
      name: "Brooklyn College",
      address: "Brooklyn",
      description: "A college in Brooklyn",
    }),
    Campus.create({
      name: "College of Staten Island",
      address: "Staten Island",
      description: "A college on Staten Island",
    }),
    Campus.create({
      name: "John Jay College",
      address: "Manhattan",
      description: "A college in Manhattan",
    }),
    Student.create({ 
      firstName: "Micheal", 
      lastName: "Jordan", 
      email: "mjbike@gmail.com", 
      gpa: 3.5, 
      campusId: 2
    }),
    Student.create({ 
      firstName: "Jessica", 
      lastName: "Robinson", 
      email: "jbrk@hotmail.com.com", 
      gpa: 4.0, 
      campusId: 1 
    }),
    Student.create({ 
      firstName: "rehan", 
      lastName: "khan", 
      email: "rk0@jjay.com", 
      gpa: 3.8, 
      campusId: 3
    }),
  ]);
};

module.exports = seedDatabase;
