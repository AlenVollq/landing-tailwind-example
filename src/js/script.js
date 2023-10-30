const theme = document.querySelectorAll("[name=mode]");
const html = document.querySelector("html");

const toggleDarkMode = function (e) {
  if (e.target.value === "light") {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
};

if (theme) {
  theme.forEach((item) => {
    item.addEventListener("click", toggleDarkMode);
  });
}

const loadThemeMode = function () {
  const light = document.querySelector("#lightMode");
  const dark = document.querySelector("#darkMode");
  if (localStorage.theme === "dark") {
    html.classList.add("dark");
    if (dark) dark.checked = true;
  } else {
    html.classList.remove("dark");
    if (light) light.checked = true;
  }
};

loadThemeMode();
