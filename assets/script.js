//arrays for computer random options

var letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specChar = ["!", "@", "$"];

var options = [];

// var userChoice = window:confirm("would you like to include letters?");if (userChoice == true) ;
// {options:Math.floor()}
// userChoice();

//how many characters for the password

var passLength = prompt("How many characters do you want the password to be? ");
// console.log(passLength);
var wantNumbers = confirm("Do you want to use numbers? ");

var wantLetters = confirm("Do you want to use lower case letters");

var wantUpper = confirm("Do you want to use uppercase letters?");

var wantChar = confirm("Do you want to use special characters?");

if (passLength >= 8 && passLength <= 128) {
  if (wantNumbers) {
    options = options.concat(numbers);
  }
  if (wantLetters) {
    options = options.concat(letters);
  }
  if (wantUpper) {
    options = options.concat(upperLetters);
  }
  if (wantChar) {
    options = options.concat(specChar);
  }
} else {
  alert("please enter in a number between 8 and 128");
}
// console.log(options);

var tempPass = "";
function generatePassword() {
  for (var i = 0; i < passLength; i++) {
    tempPass = tempPass + options[Math.floor(Math.random() * options.length)];
    // console.log(tempPass + "    " + i);
  }
  return tempPass;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
