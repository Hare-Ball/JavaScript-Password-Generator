// Assignment Code

//Prompts for password selection variables
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Choose a number from 8 - 128");

var upperCaseChoice = confirm("Do you want to include upper case letters?");

var lowerCaseChoice = confirm("Do you want to include lower case letters?");

var numberCaseChoice = confirm("Do you want to include numbers?");

var specialCharacterChoice = confirm("Do you want to include special characters?");

//Arrays for character selction
var upperCase=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerCase=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] ; 

var number=["1","2","3","4","5","6","7","8","9","0"];   

var specialCharacter=["!","@","#","$","%","^","&","*","(",")","_","+"];

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword()
    
    let (passwordLength) =




     
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

