// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; 

}

function generatePassword() {
 var passwordLength = prompt("how long do you want your password to be");
console.log(passwordLength);
var wantsLowercase = confirm("do you want lowercase letters?")
var wantsUppercase = confirm("do you want Uppercase letters?")
var wantsNumbers = confirm("do you want Numbers?")
var wantsSpecialChar = confirm("do you want Special Characters?")
console.log(wantsLowercase);
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-="
var retVal = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
// confirm()


}
// Add event listener to generate button
generateBtn.addEventListener("click",() => {
  writePassword();
})


// var person = prompt("Please enter your name", "Harry Potter");

