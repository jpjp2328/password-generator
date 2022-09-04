// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible characters
var specialChar = ["!","@","#","$","%","^","&","*","(",")","~","`","<",">","?","-","+","=","/",";",":"];
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var pwdPool = [];

// Code to generate password
function generatePassword() {
  var pwdLength = window.prompt("How many characters would you like your password to contain? (Bewteen 8 to 128 Characters)");

  if ((pwdLength < 8) || (pwdLength > 128)) {
    window.alert ("Password must be between 8 to 128 characters.");
    exit();
  } 
  // Confirms if user wants to use special characters
  var confirmSpecial = confirm("Click OK to confirm including special characters.");
  if (confirmSpecial) {
    pwdPool = pwdPool.concat(specialChar);
  }
      
  // Confirms if the user wants to use numbers
  var confirmNumbers = confirm("Click OK to confirm including numbers.");
  if (confirmNumbers) {
    pwdPool = pwdPool.concat(numbers);
  }
  
  // Confirms if the user wants to use lowercase
  var confirmLower = confirm("Click OK to confirm including lowercase characters.");
  if (confirmLower) {
    pwdPool = pwdPool.concat(lowerCase);
  }
  
  // Confirms if the user wants to use uppercase
  var confirmUpper = confirm("Click OK to confirm including uppercase characters.");
  if (confirmUpper) {
    pwdPool = pwdPool.concat(upperCase);
  }

  // Alerts user to select one character if none is select
  if (confirmSpecial === false && confirmNumbers === false && confirmLower === false && confirmUpper === false) {
    window.alert ("Please select one character type.")
    exit();
  }

  // selects random from pwd pool that matches the password length
  var randomPwd = ""
  for (var i = 0; i < pwdLength; i++) {
    var random = [Math.floor(Math.random() * pwdPool.length)];
    randomPwd = randomPwd + pwdPool[random];
  }

  return randomPwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
