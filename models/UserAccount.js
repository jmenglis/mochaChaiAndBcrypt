// require our ORM
var mongoose = require('mongoose'); // our handy dandy ORM

// define what types our values should be
// using a Schema - this is similar declaring
// table columns etc using Migration

var UserAccountSchema = new mongoose.Schema({
  name: String,
  email: String,
  passwordHash: String,
  birthDate: String
});

// we export a Mongoose Model with the Schema
module.exports = mongoose.model("UserAccount", UserAccountSchema);
