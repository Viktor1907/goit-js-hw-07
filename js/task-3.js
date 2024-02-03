const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  const inputValue = event.target.value.trim();

  if (inputValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = inputValue;
  }
}
