// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button is clicked.")

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
Array.from(lowerCase);
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
Array.from(upperCase);
var numberCharacters = "0123456789";
Array.from(numberCharacters)
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
Array.from(specialCharacters)


  
 
 var characterLength = window.prompt("How many characters (8-128) will your password be?");
  if (characterLength < 7 || characterLength > 129) {
    window.alert("Please select a length between 8 and 128 characters.");
    return;
  } else {
    lowerCase = window.confirm("Would you like to include lowercase letters?");
    upperCase = window.confirm("Would you like to include uppercase letters?");
    numberCharacters = window.confirm("Would you like to include numbers?");
    specialCharacters = window.confirm("Would you like to include special characters?");
    
    };

  if (!lowerCase && !upperCase && !numberCharacters && !specialCharacters) {
    window.alert("Please select at least one option.");
  
  }

  


  

  

  return
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
