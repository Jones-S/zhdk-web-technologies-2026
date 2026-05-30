// This file is linked from 11-link-css-js.html

const button = document.getElementsByTagName("button")[0];
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "JavaScript changed this text!";
});
