// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
 }

function generatePassword() {
    var passwordLength = prompt("password must be at least 8 characters long");
      if (passwordLength < 8) {
         alert("please choose a password of at least 8 characters.");
      }
      else {
         alert("getting started");
      }
    // console.log(passwordLength);
    var wantsLowercase = confirm("do you want lowercase letters?");
       if(wantsLowercase) {
           alert("ok, including lowercase letters.");
       }
        else {
           alert("skipping lowercase letters ");
       }
    var wantsUppercase = confirm("do you want Uppercase letters?");
       if (wantsUppercase) {
           alert("ok, including uppercase letters.");
       } 
       else {
           alert("skipping uppercase letters");
       }
    var wantsNumbers = confirm("do you want Numbers?");
      if (wantsNumbers) {
           alert("ok, including Numbers.");
       } 
       else {
           alert("skipping Numbers");
       }
    var wantsSpecialChar = confirm("do you want Special Characters?");
       if (wantsSpecialChar) {
          alert("ok, including special characters.");
       } 
       else {
          alert("skipping special characters");
       }
  
console.log(wantsLowercase);
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-="
var retVal = "";
    for (var i = 0, n = charset.length; i < passwordLength; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    } 
  }
    // console.log(retVal);
// confirm()



// Add event listener to generate button
generateBtn.addEventListener("click",() => {
  writePassword();
})


// var person = prompt("Please enter your name", "Harry Potter");

