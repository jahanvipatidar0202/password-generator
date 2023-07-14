let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let uppercase = document.getElementById("uppercase");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// showing input slider value
sliderValue.textContent = inputslider.value;
inputslider.addEventListener("input", () => {
  sliderValue.textContent = inputslider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//function to generate password
function generatePassword() {
  let genPassword = "";
  let allChars = "";
  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";
  let i = 1;
  while (i <= inputslider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied ";

    setTimeout(() => {
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";
    }, 3000);
  }
});
