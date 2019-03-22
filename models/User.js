const mongoose = require("mongoose");
const schema = mongoose.Schema;

// Create schema
const UserSchema = new schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Export module for use outside of this file,
// set a variable named User, set the name and pass the schema in
module.exports = User = mongoose.model("users", UserSchema);
