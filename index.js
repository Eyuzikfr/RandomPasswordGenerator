const symbols = [
  // Lowercase letters
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

  // Uppercase letters
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

  // Numbers
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

  // Symbols
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
];

let passwordLength = 15;

const generatePasswordBtn = document.getElementById("generate-password-btn");
const passwordContainer1 = document.getElementById("password-container-1");
const passwordContainer2 = document.getElementById("password-container-2");
const setPasswordLengthBtn = document.getElementById("set-password-length-btn");
const inputPasswordLength = document.getElementById("password-length");
const includeNumbersCheckBox = document.getElementById("include-numbers");
const includeSymbolsCheckBox = document.getElementById("include-symbols");

let includeNumbers = includeNumbersCheckBox.checked;
let includeSymbols = includeSymbolsCheckBox.checked;

function getAllowedSymbols() {
  return symbols.filter((ch) => {
    if (!includeNumbers && /\d/.test(ch)) return false;
    if (!includeSymbols && /[^a-zA-Z0-9]/.test(ch)) return false;
    return true;
  });
}

function generatePassword() {
  let password = "";

  const allowedSymbols = getAllowedSymbols();
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedSymbols.length);
    password += allowedSymbols[randomIndex];
  }

  return password;
}

function setPasswordLength() {
  console.log(passwordLength);
  const testPasswordLength = parseInt(inputPasswordLength.value);
  if (
    !testPasswordLength ||
    testPasswordLength < 8 ||
    testPasswordLength > 32
  ) {
    window.alert("Length value must be a number between 8 and 32.");
  } else {
    window.alert("Password length set successfully!");
    passwordLength = testPasswordLength;
  }
}

generatePasswordBtn.addEventListener("click", () => {
  let password1 = generatePassword();
  let password2 = generatePassword();

  passwordContainer1.textContent = password1;
  passwordContainer2.textContent = password2;
});

setPasswordLengthBtn.addEventListener("click", setPasswordLength);

passwordContainer1.addEventListener("click", () => {
  if (passwordContainer1.textContent) {
    navigator.clipboard
      .writeText(passwordContainer1.textContent)
      .then(() => {
        alert("Password copied to clipbord!");
      })
      .catch((err) => {
        alert("Try again!");
        console.error("Failed to copy: ", err);
      });
  }
});

passwordContainer2.addEventListener("click", () => {
  if (passwordContainer2.textContent) {
    navigator.clipboard
      .writeText(passwordContainer2.textContent)
      .then(() => {
        alert("Password copied to clipbord!");
      })
      .catch((err) => {
        alert("Try again!");
        console.error("Failed to copy: ", err);
      });
  }
});

includeNumbersCheckBox.addEventListener("click", () => {
  includeNumbers = includeNumbersCheckBox.checked;
  console.log(includeNumbersCheckBox.checked);
});

includeSymbolsCheckBox.addEventListener("click", () => {
  includeSymbols = includeSymbolsCheckBox.checked;
  console.log(includeSymbolsCheckBox.checked);
});
