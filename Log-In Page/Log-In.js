const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const togglePassword = (toggleId, passwordId) => {
  const toggleIcon = document.querySelector(toggleId);
  const passwordField = document.querySelector(passwordId);

  toggleIcon.addEventListener("click", () => {
    const type =
      passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    toggleIcon.classList.toggle("fa-eye");
    toggleIcon.classList.toggle("fa-eye-slash");
  });
};

togglePassword("#toggle-login-password", "#login-password");
togglePassword("#toggle-signup-password", "#signup-password");
