// Assignment Code
var generateBtn = document.querySelector("#generate");
// Create a function to generate the password
function generatePassword() {
    var passwordLength = prompt("Choose a number from 8 - 128");
    // Account for operator error 
    if (passwordLength < 8 || passwordLength > 128 ) {
      alert("Please enter a character length that is between 8 and 128.");
      return generatePassword();
  }
  if (passwordLength >=8 && passwordLength <= 128) {
    // If entered correctly, continue confirming other possible variables as well.
    var upperCase = confirm("Do you want to include upper case letters?");
    var lowerCase = confirm("Do you want to include lower case letters?");
    var number = confirm("Do you want to include numbers?")
    var specialCharacter = confirm("Do you want to include special characters?");
  }
  // Accont for operator error
  if (specialCharacter===false && number===false && lowerCase===false && upperCase===false) {
    alert("Please confirm at least one (*upper case, lower case, numbers, or special characters*).");
    return generatePassword();
  }

  if (upperCase===true){
    upperCase=["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

  if (upperCase===false){
    upperCase=[""];
  }
  if (lowerCase===true) {
    lowerCase=["abcdefghijklmnopqrstuvwxyz"] ; 
  }
  if (lowerCase===false){
    lowerCase=[""]
  }
  if (number===true) {
    number=["1234567890"];
  }
  if (specialCharacter===true) {
    specialCharacter=["!@#$%^&*()-_=+"];
  }
  if (specialCharacter===false){
    specialCharacter=[""];
  }

  var randomCharacter = upperCase + lowerCase + number + specialCharacter

  var password = " ";
  //Create loop to continue generating random characters until the password length is achieved
    for (var i =0; i < passwordLength; i++) {
      var trueRandom = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
      password += trueRandom;
    }
    return password;
  }
}

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);