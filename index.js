const listOfAllTheSymbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
const listOfAllTheNumbers = "1234567890";
const listOfAllTheLowerCaseLetter = "abcdefghijklmnoqprstuvwxyz";
const listOfAllTheUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordString = "";

let genratePassword = document.getElementById("btn");

let includeSymbol = document.getElementById("SymbolCheckBox");
let includeNumber = document.getElementById("numberCheckBox");
let includeLowercase = document.getElementById("lowerCaseCheckBox");
let includeUpperCase = document.getElementById("upperCaseCheckBox");
let passwordLen = document.getElementById('passwordLen');




genratePassword.addEventListener("click", function () {

if(includeSymbol.checked==false&&includeNumber.checked==false&&includeLowercase.checked==false &&includeUpperCase.checked==false){
  alert("Select Atleast One Valid Field")
}

while(passwordLen.length>passwordString.length){
  let key = getKey[Math.random(Math.floor()*getKey)()]
  console.log(key)
  
}

});

const getKey =[
    function genrateSymbols() {
        let randomSymbol =
          listOfAllTheSymbols[Math.floor(Math.random() * listOfAllTheSymbols.length)];
      
        passwordString = passwordString + randomSymbol;
        console.log(passwordString)
      } ,
      
      function genrateNumber() {
        let randomNumber =
          listOfAllTheNumbers[Math.floor(Math.random() * listOfAllTheNumbers.length)];
      
        passwordString = passwordString + randomNumber;
        console.log(passwordString)
      } ,
       
      function genrateUpperCase() {
        let randomUpperCase =
          listOfAllTheUpperCaseLetter[
            Math.floor(Math.random() * listOfAllTheUpperCaseLetter.length)
          ];
        passwordString = passwordString + randomUpperCase;
        console.log(passwordString)
      } ,
      
      function genrateLowerCase() {
        let randomLowerCase =
          listOfAllTheLowerCaseLetter[
            Math.floor(Math.random() * listOfAllTheLowerCaseLetter.length)
          ];
        passwordString = passwordString + randomLowerCase;
        console.log(passwordString)
      }
      
]

