// Assignment Code
const generateBtn = document.querySelector("#generate");

//User story:
//User selects password length:
function getPasswordLength() {
  const userInput = prompt(
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
if (
  CheckNumbers == false &&
  CheckSpecialCharacters == false &&
  CheckLowercaseLetters == false &&
  CheckUppercaseLetters == false
) {
  alert("You must inculde one type of data to include in your password.");
}

//Function below gathers the users desired criteria and confines it into a single string:
function addUserCriteria() {
  const addNumbers = CheckNumbers();
  const UsersCharacters = "";
  if (addNumbers === true) {
    const passwordNumbers = "1234567890";
    UsersCharacters = UsersCharacters.concat(passwordNumbers);
  }
  const addSpecialCharacters = CheckSpecialCharacters();
  if (addSpecialCharacters === true) {
    const passwordSpecialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    // \ Escape characters to treat special characters as just string.
    UsersCharacters = UsersCharacters.concat(passwordSpecialCharacters);
  }
  const addLowercaseLetters = CheckLowercaseLetters();
  if (addLowercaseLetters === true) {
    const passwordLowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    UsersCharacters = UsersCharacters.concat(passwordLowercaseLetters);
  }
  const addUppercaseLetters = CheckUppercaseLetters();
  if (addUppercaseLetters === true) {
    const passwordUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    UsersCharacters = UsersCharacters.concat(passwordUppercaseLetters);
  }
  return UsersCharacters;
}

// main function to generate the password
// Generate new password with the users needs alongisder their desired length:
function generatePassword() {
  const UsersCharacters = addUserCriteria();
  const NewPasswordLength = getPasswordLength;
  const NeedsandLength = UsersCharacters.length;

  const password = "";
  for (
    const passwordlength = 0;
    passwordlength < NewPasswordLength;
    passwordlength++
  ) {
    const randomNumber = Math.random() * NeedsandLength;
    const randomChoice = Math.floor(randomNumber);
    const newCharacters = UsersCharacters.substring(
      randomChoice,
      randomChoice + 1
    );
    password = password.concat(newCharacters);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
