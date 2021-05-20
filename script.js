
var generateBtn = document.querySelector("#generate");

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("Choose a number from 8 - 128"); 
  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Please enter a character length that is between 8 and 128!");
    return generatePassword();
}
if (passwordLength >=8 && passwordLength <= 128) {
  var upperCase = confirm("Do you want to include upper case letters?");
  var lowerCase = confirm("Do you want to include lower case letters?");
  var number = confirm("Do you want to include numbers?")
  var specialCharacter = confirm("Do you want to include special characters?");
}
if (specialCharacter===false && number===false && lowerCase===false && upperCase===false) {
  alert("Please confirm a set of criteria!");
  return generatePassword();
}

if (upperCase=true){
  var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
}
if (upperCase=false){
  var upperCase=[" "];
}
if (lowerCase=true) {
  var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ; 
}
if (lowerCase=false){
  var lowerCase=[" "]
}
if (number=true) {
  var number=["1","2","3","4","5","6","7","8","9","0"];
}
if (specialCharacter=true) {
  var specialCharacter=["!","@","#","$","%","^","&","*","(",")","_","+"];
}
if (specialCharacter=false){
  var specialCharacter=[" "];
}
if (number=true) {
  var number=["1","2","3","4","5","6","7","8","9","0"];
}

var randomCharacter = upperCase + lowerCase + number + specialCharacter

var password = " ";
  for (var i =0; i < passwordLength; i++) {
    var trueRandom = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
    password += trueRandom;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

