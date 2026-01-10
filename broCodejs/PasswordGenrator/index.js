//   RANDOM PASSWORD GENERATOR

function generatorPassword(
     length,
     includeLowercase,
     includeUppercase,
     includeNumbers,
     includeSymbols
) {
     const lowercase = "abcdefghijklmnopqrstuvwxyz";
     const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     const numberChars = "0123456789";
     const symbolsChars = "!@#$%^&*()_-=+";

     let allowedChars = "";
     let password = "";

     allowedChars += includeLowercase ? lowercase : "";
     allowedChars += includeUppercase ? uppercase : "";
     allowedChars += includeNumbers ? numberChars : "";
     allowedChars += includeSymbols ? symbolsChars : "";

     if (length <= 0) return "password length must be at least 1";
     if (allowedChars.length === 0) return "select at least one character set";

     for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * allowedChars.length);
          password += allowedChars[randomIndex];
     }

     return password;
}


const passwordLength = 8;
const includeLowercase = false;
const includeUppercase = false;
const includeNumbers = true;
const includeSymbols = false;



const password = generatorPassword(passwordLength,
     includeLowercase,
     includeUppercase,
     includeNumbers,
     includeSymbols);

console.log(`generated password : ${password}`);