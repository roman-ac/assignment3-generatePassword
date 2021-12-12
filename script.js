// Assignment Code
var generateBtn = document.querySelector("#generate");

// adding variables

var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var characters = ["!","@","#","$","%","&","?","+","~"];
var chosenCharacters = [""]; // empty string

// we are going to start with creating the missing generatePassword function

function generatePassword () {

  var result ="";

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


// verifying at least one character type is selected
if (!askUppercase && !askLowercase && !askNumbers && !askCharacters) {
  window.alert ("Please select at least one special character type!");
  return generatePassword();
}

if (askUppercase = true) {
  chosenCharacters += uppercase; // googled the value of +=
}

if (askLowercase = true) {
  chosenCharacters += lowercase;
}

if (askNumbers = true) {
  chosenCharacters += numbers;
}

if (askCharacters = true) {
  chosenCharacters += characters;
}

var result = Math.floor(Math.random() * chosenCharacters.passwordLength);

//var result = chosenCharacters[index];

return result;




}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
