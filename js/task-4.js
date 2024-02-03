const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("Будь ласка, заповніть усі поля");
    return;
  }

  console.log("Email:", email);
  console.log("Password:", password);

  event.target.reset();
}

