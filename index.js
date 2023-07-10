const listOfAllTheSymbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
const listOfAllTheNumbers = "1234567890";
const listOfAllTheLowerCaseLetter = "abcdefghijklmnoqprstuvwxyz";
const listOfAllTheUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function getData(list){
  return list[Math.floor(Math.random()*list.length)];
}



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

if(includeSymbol.checked){
  passwordString = passwordString+getData(listOfAllTheSymbols)
}

if(includeNumber.checked){
  passwordString = passwordString+getData(listOfAllTheNumbers)
}

if(includeLowercase.checked){
  passwordString = passwordString+getData(listOfAllTheLowerCaseLetter)
}


if(includeUpperCase.checked){
  passwordString = passwordString+getData(listOfAllTheUpperCaseLetter)
}



console.log(passwordString)

});
