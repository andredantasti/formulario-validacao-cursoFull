const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é Obrigatório.");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Digite um email válido!");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue !== passwordConfirmationValue) {
    setErrorFor(password, "As Senhas devem ser iguais");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "Senha tem que ter no minímo 6 Caracteres!");
  } else {
    setSucessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "Confirmação de Senha é Obrigatória.");
  } else if (passwordValue !== passwordConfirmationValue) {
    setErrorFor(passwordConfirmation, "As Senhas devem ser iguais");
  } else if (passwordConfirmationValue.length < 6) {
    setErrorFor(
      passwordConfirmation,
      "Senha tem que ter no minímo 6 Caracteres!",
    );
  } else {
    setSucessFor(passwordConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [... formControls].every((formControl)=>{
    return (formControl.className === "form-control sucess");
  })

  if(formIsValid){
    console.log("Formulário enviado com Sucesso!");
  }

  usernameValue.value = "";
  emailValue.value = "";
  passwordValue.value = "";
  passwordConfirmationValue.value = "";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control sucess";
}

function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
