// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button is clicked.")

var lowerCase = Array.from('abcdefghijklmnopqrstuvwxyz');
var upperCase = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var numberCharacters = Array.from("0123456789");
var specialCharacters = Array.from("!#$%&*+-./:<=>?@[]^_`{|}~");
var tempArray = [];
var finalPassword = "";


  
 
 var characterLength = window.prompt("How many characters (8-128) will your password be?");
  if (characterLength < 8 || characterLength > 128) {
    window.alert("Please select a length between 8 and 128 characters.");
    return;
  } else if (characterLength > 7 && characterLength < 129) {
    
  } else {
    window.alert("Please select a valid number.")
    return;
  
  } 
    
    var lowerCaseW = window.confirm("Would you like to include lowercase letters?");
    var upperCaseW = window.confirm("Would you like to include uppercase letters?");
    var numberCharactersW = window.confirm("Would you like to include numbers?");
    var specialCharactersW = window.confirm("Would you like to include special characters?");
    
  

  if (!lowerCase && !upperCase && !numberCharacters && !specialCharacters) {
    window.alert("Please select at least one option.");

  
  }

if (lowerCaseW) {
  tempArray = tempArray.concat(lowerCase);
}

if (upperCaseW) {
  tempArray = tempArray.concat(upperCase);
}

if (numberCharactersW) {
  tempArray = tempArray.concat(numberCharacters);
}

if (specialCharactersW) {
  tempArray = tempArray.concat(specialCharacters);
}

for(var i = 0; i <= characterLength; i++) {

  finalPassword += tempArray[Math.floor(Math.random() * tempArray.length)];

}



return finalPassword;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
