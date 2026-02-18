const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


function checkPalindrome(str) {

     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "")
     const reversed = cleaned.split("").reverse().join("");
     if (cleaned === reversed)
          return " a Palindrome"
     else
          return "not a Palindrome"
}

checkBtn.addEventListener("click", () => {
     const Itext = textInput.value;
     if (Itext === "") {
          alert("Please input a value")
     }
     else {
          let Ans = checkPalindrome(Itext);
          result.textContent = `${Itext} is ${Ans}`
     }
});