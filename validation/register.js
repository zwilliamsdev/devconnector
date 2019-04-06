const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {}; // Create empty errors object

  // Check if any user data is empty and set
  // to a true empty string if no data found
  data.name = !isEmpty(data.name) ? data.name : "";
  console.log("data.name: " + data.name);
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Validate name length is correct
  if (
    !Validator.isLength(data.name, {
      min: 2,
      max: 30
    })
  ) {
    errors.name = "Name must be between 2 and 30 characters.";
  }

  // Validate that name is not empty
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required.";
  }

  // Validate that email is not empty
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required.";
  }

  // Validate that email is valid
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid.";
  }

  // Validate that password is not empty
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required.";
  }

  // Validate that password is correct length
  if (
    !Validator.isLength(data.password, {
      min: 6,
      max: 30
    })
  ) {
    errors.password = "Password must be between 6 and 30 characters.";
  }

  // Validate that password2 is not empty
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirmation password is required.";
  }

  // Validate that password is correct length
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match.";
  }

  // Return any errors, if no errors isValid -> true
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
