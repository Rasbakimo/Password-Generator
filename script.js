$(document).ready(function() {
  
  
  $("#generate").on("click", function() {

    function writePassword(password) {
      var passwordText = document.querySelector("#password");
      passwordText.value = password; 
    }
      

      var charset = "";
     

      var passwordLength = prompt("password must be at least 8 characters and less than 128 long");
      if (passwordLength < 8 || passwordLength > 128) {
        alert("please choose a password of at least 8 but less than 128 characters.");
        return;
      }

      var wantsLowercase = confirm("do you want lowercase letters?");
      if (wantsLowercase) {
        alert("ok, including lowercase letters.");
        charset += "abcdefghijklmnopqrstuvwxyz";
      }
      else {
        alert("skipping lowercase letters ");
      }
      var wantsUppercase = confirm("do you want Uppercase letters?");
      if (wantsUppercase) {
        alert("ok, including uppercase letters.");
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      else {
        alert("skipping uppercase letters");
      }
      var wantsNumbers = confirm("do you want Numbers?");
      if (wantsNumbers) {
        alert("ok, including Numbers.");
        charset += "0123456789";
      }
      else {
        alert("skipping Numbers");

      }
      var wantsSpecialChar = confirm("do you want Special Characters?");
      if (wantsSpecialChar) {
        alert("ok, including special characters.");
        charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
      }
      else {
        alert("skipping special characters");
      }

      // console.log(passwordLength);
      // console.log(wantsLowercase);
      // console.log(wantsUppercase);
      // console.log(wantsNumbers);
      // console.log(wantsSpecialChar);
      var passwordGen = "";
      
       passwordLength.foreach((passwordGen)=> 

       passwordGen += charset[Math.floor(Math.random() * charset.length)

      ]);

      // for (var i = 0; i < passwordLength; i++) {
      //   passwordGen += charset[Math.floor(Math.random() * charset.length)];
      // }
      // console.log(passwordGen);
      //pass our generated password to writePassword() so that it can go on the page
     writePassword(passwordGen);
    });
   
});
