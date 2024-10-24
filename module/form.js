/**
 * Valide l'email
 * @param {string} email
 * @returns {boolean}
 */
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
  return emailRegex.test(email);
};

/**
 * Valide le format du mot de passe
 * @param {string} password
 * @returns {boolean}
 */
const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^-_&*])(?=.{6,})/;
  return passwordRegex.test(password);
};

/**
 * Valide le nom d'utilisateur (au moins 3 caractères)
 * @param {string} userName
 * @returns {boolean}
 */
const userNameValidator = (userName) => {
  return userName.length >= 3;
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("submitForm");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userName = document.getElementById("userName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const errors = [];

    if (!userNameValidator(userName)) {
      errors.push("Le nom d'utilisateur doit comporter au moins 3 caractères.");
    }

    if (!emailValidator(email)) {
      errors.push("L'email n'est pas valide.");
    }

    if (!passwordValidator(password)) {
      errors.push(
        "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractère spécial."
      );
    }

    if (errors.length > 0) {

      errorMessage.innerHTML = errors.join("<br>");
      errorMessage.classList.remove("hidden");
    } else {
    
      const userData = {
        mail: email,
        pwd: password,
        usr: userName,
      };

      localStorage.setItem("userData", JSON.stringify(userData));
      alert("Inscription réussie !");
      form.reset();
      errorMessage.classList.add("hidden");

      window.location.href = "./submit.html";
    }
  });

  const savedUserName = localStorage.getItem("userName");

  if (savedUserName) {
    document.getElementById("userName").value = savedUserName;
  }
});
