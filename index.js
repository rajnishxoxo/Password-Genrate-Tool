const listOfAllTheSymbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
const listOfAllTheNumbers = "1234567890";
const listOfAllTheLowerCaseLetter = "abcdefghijklmnoqprstuvwxyz";
const listOfAllTheUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let passwordString = "";

let genratePassword = document.getElementById("btn");

let includeSymbol = document.getElementById("SymbolCheckBox");

genratePassword.addEventListener("click", function () {
  console.log(getKey[0])
});

const getKey =[
    function genrateSymbols() {
        let randomSymbol =
          listOfAllTheSymbols[Math.floor(Math.random() * listOfAllTheSymbols.length)];
      
        passwordString = passwordString + randomSymbol;
        console.log(passwordString)
      } ,
      
      function genrateSymbols() {
        let randomSymbol =
          listOfAllTheSymbols[Math.floor(Math.random() * listOfAllTheSymbols.length)];
      
        passwordString = passwordString + randomSymbol;
      } ,
      
      function genrateNumber() {
        let randomNumber =
          listOfAllTheNumbers[Math.floor(Math.random() * listOfAllTheNumbers.length)];
      
        passwordString = passwordString + randomNumber;
      } ,
       
      function genrateUpperCase() {
        let randomUpperCase =
          listOfAllTheUpperCaseLetter[
            Math.floor(Math.random() * listOfAllTheUpperCaseLetter.length)
          ];
        passwordString = passwordString + randomUpperCase;
      } ,
      
      function genrateLowerCase() {
        let randomLowerCase =
          listOfAllTheLowerCaseLetter[
            Math.floor(Math.random() * listOfAllTheLowerCaseLetter.length)
          ];
        passwordString = passwordString + randomLowerCase;
      }
      
]

