const listOfAllTheSymbols = "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
const listOfAllTheNumbers = "1234567890";
const listOfAllTheLowerCaseLetter = "abcdefghijklmnoqprstuvwxyz";
const listOfAllTheUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let includeSymbol = document.getElementById("SymbolCheckBox");
let includeNumber = document.getElementById("numberCheckBox");
let includeLowercase = document.getElementById("lowerCaseCheckBox");
let includeUpperCase = document.getElementById("upperCaseCheckBox");
let passwordLen = document.getElementById("passwordLen");
let passwordBox = document.getElementById("showPassword");

function getData(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function genratePasswordString() {
  if (
    includeSymbol.checked ===false &&
    includeNumber.checked === false &&
    includeLowercase.checked ===false &&
    includeUpperCase.checked===false
  ) {
    alert("Please Select One feild");
  } else {
    if (includeSymbol.checked) {
      passwordString = passwordString + getData(listOfAllTheSymbols);
    }

    if (includeNumber.checked) {
      passwordString = passwordString + getData(listOfAllTheNumbers);
    }

    if (includeLowercase.checked) {
      passwordString = passwordString + getData(listOfAllTheLowerCaseLetter);
    }

    if (includeUpperCase.checked) {
      passwordString = passwordString + getData(listOfAllTheUpperCaseLetter);
    }

    if (passwordString.length < passwordLen.value) {
      genratePasswordString();
    }

    passwordBox.value = truncateString(passwordString, passwordLen.value);
  }
}

function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit);
  } else {
    return string;
  }
}

let passwordString = "";

let genratePassword = document.getElementById("btn");

genratePassword.addEventListener("click", function () {
  genratePasswordString();
  console.log(passwordString.length);
});

let clipboardImage = document.querySelector(".clipboard");

clipboardImage.addEventListener("click", function () {
  function copytext() {
    // Get the text field
    var copyText = document.getElementById("showPassword");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert(`copied password , thank you for using`);
  }

  copytext();
});
