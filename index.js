const CURRENT_YEAR = 2023;
const CORRECT_ANSEWER = "Ответ правильный";
const ERROR_ANSEWER = "Ответ не правильный";

const inputNode = document.querySelector(".js-input");
const buttontNode = document.querySelector(".js-button");
const outputNode = document.querySelector(".js-output");

buttontNode.addEventListener("click", function () {
  const inputValue = inputNode.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(inputNode.value);
  let output = CORRECT_ANSEWER;

  if (answer !== CURRENT_YEAR) {
    output = ERROR_ANSEWER;
  }

  outputNode.innerHTML = output;
});
