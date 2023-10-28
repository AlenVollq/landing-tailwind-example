const themeBox = document.querySelector("#themeMode");
const html = document.querySelector("html");

const toggleDarkMode = function () {
  if (themeBox.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
};

themeBox.addEventListener("click", toggleDarkMode);

const loadThemeMode = function () {
  if (localStorage.theme === "dark") {
    html.classList.add("dark");
    themeBox.checked = true;
  } else {
    html.classList.remove("dark");
  }
};

loadThemeMode();
