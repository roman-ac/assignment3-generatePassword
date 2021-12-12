// Assignment Code
var generateBtn = document.querySelector("#generate");

// we are going to start with creating the missing generatePassword function

function generatePassword () {

//  ask for password length 
var passwordLength = window.prompt ("Please choose a password length of between 8 - 128.");

// verify the input is correct 
if (isNaN(passwordLength)) {
  window.alert ("Must be a numeric value!");
  return generatePassword();
}

// verifying the the number is within the given paremeters
if (passwordLength < 8 || passwordLength > 128) {
  window.alert ("Value must be between 8 - 128 !");
  return generatePassword();
}

// creating variable for character type to include in password
var askUppercase = window.confirm ("include upper case letters?");
var askLowercase = window.confirm ("include lower case letters?");
var askNumbers = window.confirm ("include numbers?");
var askCharacters = window.confirm ("include special characters?")


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
