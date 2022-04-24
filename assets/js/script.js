// Assignment Code
var generateBtn = document.querySelector("#generate");

// main function to generate the password
var generatePassword = () => {};
// need to validate this convert string to integer

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Functions:
// 1.getpasswordlength:
// get string
// convert to integer
// check rule
// If ok produce number

// \\ Converts string to number
// \\ Need an if statement
// \\ Create an alert
// \\ If rule is true produce number
// \\ if false then produce another alert

// 2.getpasswordcriteria:
// Lowercase,uppercase,number and characters
// Return generates an array of all the criteria they wanted for example yes to lc then an array of lc leters shoudl be generated
// If for all criteria if true push array if no then move to next box
// check length if it doesnt meet the rule then alert

// 3.generatenewpassword
// IN password length and password criteria
// OUT new password as a string

// // Array:
// 1. PasswordArray
// criteria must be pushed into an array
