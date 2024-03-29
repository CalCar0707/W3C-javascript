var generateBtn = document.querySelector('#generate');

// global variables here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChoice = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+'];
var tempPassword = [];
var finalPassword = '';


//prompt to select pw length between 8 - 128
function generatePassword() {
  var userInput = window.prompt('What would you like the length of your password to be? (choose between 8- 128 characters.)');
  if (userInput < 8 || userInput > 128) {
    window.alert('You must pick a number between 8 and 128.');
  var userInput = window.prompt('What would you like the length of your password to be? (choose between 8- 128 characters.)');
  };

  var passwordLength = userInput;
    console.log(passwordLength);
 
  //prompt on what character  types to include
var includeLowercase  = window.confirm('Would you like to include lowercase letters?');
    console.log(includeLowercase);
var includeUppercase = window.confirm('Would you like to include uppercase letter?');
    console.log(includeUppercase);
var includeNumbers = window.confirm('Would you like to include any numbers?');
    console.log(includeNumbers);
var includeSpecials = window.confirm('Would you like to include any special characters?');
    console.log(includeSpecials);

if ( includeLowercase === false && includeUppercase === false &&
    includeNumbers === false && includeSpecials === false) {
      window.alert('You must choose at least one option.');
      var includeLowercase  = window.confirm('Would you like to include lowercase letters?');
    console.log(includeLowercase);
var includeUppercase = window.confirm('Would you like to include uppercase letter?');
    console.log(includeUppercase);
var includeNumbers = window.confirm('Would you like to include any numbers?');
    console.log(includeNumbers);
var includeSpecials = window.confirm('Would you like to include any special characters?');
    console.log(includeSpecials);
    };

  if (includeLowercase) {
    tempPassword = tempPassword.concat(lowerCase);
    console.log(tempPassword);
  }
  if (includeUppercase) {
    tempPassword = tempPassword.concat(upperCase);
    console.log(tempPassword);
  }
  if (includeNumbers) {
    tempPassword = tempPassword.concat(numberChoice);
    console.log(tempPassword);
  }
  if (includeSpecials) {
    tempPassword = tempPassword.concat(specialCharacters);
    console.log(tempPassword);
  }
  
for(var i = 0; i < passwordLength; i++) {
    finalPassword = finalPassword + tempPassword[Math.floor(Math.random() * tempPassword.length)];
}
  return finalPassword;
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

