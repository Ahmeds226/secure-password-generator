// Assignment Code
const generateBtn = document.querySelector("#generate");

//User story:
//User selects whether they want numbers or not:
function CheckNumbers() {
  if (
    confirm("Would you like to include numbers in your new password?") == true
  ) {
    return true;
  } else {
    return false;
  }
}

//User selects whether they want special characters or not:
function CheckSpecialCharacters() {
  if (
    confirm(
      "Would you like to include special characters such as !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~ in your new password?"
    ) == true
  ) {
    return true;
  } else {
    return false;
  }
}

//User selects whether they want lowercase letters  or not:
function CheckLowercaseLetters() {
  if (
    confirm(
      "Would you like to include lowercase letters in your new password?"
    ) == true
  ) {
    return true;
  } else {
    return false;
  }
}

//User selects whether they want uppercase or not:
function CheckUppercaseLetters() {
  if (
    confirm(
      "Would you like to include uppercase letters in your new password?"
    ) == true
  ) {
    return true;
  } else {
    return false;
  }
}

//Checks the user has selected atleast one option:
function checksSomethingsBeenChosen() {}

//Function below gathers the users desired criteria and confines it into a single string:
function addUserCriteria() {
  let addNumbers = CheckNumbers();
  let UsersCharacters = "";
  if (addNumbers === true) {
    const passwordNumbers = "1234567890";
    UsersCharacters = UsersCharacters.concat(passwordNumbers);
  }
  let addSpecialCharacters = CheckSpecialCharacters();
  if (addSpecialCharacters === true) {
    const passwordSpecialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    // \ Escape characters to treat special characters as just string.
    UsersCharacters = UsersCharacters.concat(passwordSpecialCharacters);
  }
  let addLowercaseLetters = CheckLowercaseLetters();
  if (addLowercaseLetters === true) {
    const passwordLowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    UsersCharacters = UsersCharacters.concat(passwordLowercaseLetters);
  }
  let addUppercaseLetters = CheckUppercaseLetters();
  if (addUppercaseLetters === true) {
    const passwordUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    UsersCharacters = UsersCharacters.concat(passwordUppercaseLetters);
  }
  return UsersCharacters;
}

//User selects password length:
function getPasswordLength() {
  let userInput = prompt(
    "Please choose a length between 8 and 128 characters",
    "10"
  );
  if ((userInput) => 8 && userInput <= 128) {
    return userInput;
  } else {
    alert("Due to an invalid unput we have set the value to 10.");
    return 10;
  }
}

// main function to generate the password
// Generate new password with the users needs alongisder their desired length:
function generatePassword() {
  let UsersCharacters = addUserCriteria();
  let NewPasswordLength = getPasswordLength;
  let NeedsandLength = UsersCharacters.length;

  let password = "";
  for (
    let passwordlength = 0;
    passwordlength < NewPasswordLength;
    passwordlength++
  ) {
    let randomNumber = Math.random() * NeedsandLength;
    let randomChoice = Math.floor(randomNumber);
    let newCharacters = UsersCharacters.substring(
      randomChoice,
      randomChoice + 1
    );
    password = password.concat(newCharacters);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
