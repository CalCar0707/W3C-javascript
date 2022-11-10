// Assignment Code
// global variables here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChoice = '0123456789';
var specialCharacters = '~!@#$%^&*()_+';
var finalPassword = [];
var tempPassword;

document.getElementById(password);
document.getElementById(generate);


/*if(includeLowercase === true){

} else if(includeLowercase !==){

}*/

//prompt to select pw length between 8 - 128
function generatePassword() {
  var userInput = window.prompt('What would you like the length of your password to be?');
  var passwordLength = userInput;

  if (passwordLength < 8 || passwordLength > 128) {
    window.prompt('Please choose a length between 8 and 128 characters.')
    } else {
      console.log(passwordLength);
    }
}

//prompt on what character types to include
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);