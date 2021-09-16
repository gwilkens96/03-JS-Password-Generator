// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Button is clicked.")

  var characterLength = window.prompt("How many characters will your password be?");
  

  

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
