document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll(".searchBtn");
  const searchBar = document.querySelector(".searchBar");
  const searchInput = document.querySelector(".searchInput");
  const searchClose = document.getElementById("searchClose");

  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function () {
      searchBar.style.visibility = "visible";
      searchBar.classList.add("open");
      this.setAttribute("aria-expanded", true);
      searchInput.focus();
    });
  }
  searchClose.addEventListener("click", function () {
    searchBar.style.visibility = "hidden";
    searchBar.classList.remove("open");
    this.setAttribute("aria-expanded", false);
  });
});

const registerButton = document.querySelector(".registerButton");
const login = document.querySelector(".login");
const register = document.querySelector(".a7");
const title = document.querySelector(".title");
const html = `<form action="/register" method="POST" class="a7 hidden">
  <label for="username"><b>Username</b></label>
  <input
    type="text"
    placeholder="Enter Your Username"
    name="username"
    autocomplete="off"
  />

  <label for="password"><b>Password</b></label>
  <input type="password" placeholder="Enter Your Password" name="password" />

  <input type="submit" value="Register" class="btn" />
</form>`;

const html2 = `<form action="/admin" method="POST" class="login">
  <label for="username"><b>Username</b></label>
  <input
    type="text"
    placeholder="Enter Your Username"
    name="username"
    autocomplete="off"
  />

  <label for="password"><b>Password</b></label>
  <input type="password" placeholder="Enter Your Password" name="password" />

  <input type="submit" value="Login" class="btn" />
</form>`;

// registerButton.addEventListener("click", function () {
//   registerButton.classList.add("hidden");
//   title.textContent = "Register";
//   login.innerHTML = html;
//   login.action = "/register";
// });
let isClicked = true;
registerButton.addEventListener("click", function () {
  if (isClicked) {
    title.textContent = "Register";
    login.innerHTML = html;
    login.action = "/register";
    registerButton.textContent = "Sign in";
  } else {
    title.textContent = "Sign in";
    login.innerHTML = html2;
    login.action = "/admin";
    registerButton.textContent = "Register";
  }
  isClicked = !isClicked;
});
