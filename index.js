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



});
