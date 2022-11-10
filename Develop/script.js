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
  var userInput = window.prompt('What would you like the length of your password to be? (choose between 8- 128 characters.)');
  var passwordLength = userInput;

    console.log(passwordLength);
 
  //prompt on what character  types to include
var includeLowercase  = window.confirm('Would you like to include lowercase letters?');
    console.log(includeLowercase);
var includeUppercase = window.confirm('Would you like to include uppercase letter?');
    console.log(includeUppercase);
var includeNumbers = window.confirm('Would you like to include any numbers?)');
    console.log(includeNumbers);
var includeSpecials = window.confirm('Would you like to include any special characters?');
    console.log(includeSpecials);
  }

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)