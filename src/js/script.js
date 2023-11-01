// Theme mode
const theme = document.querySelector("#themeMode");
const html = document.querySelector("html");

const toggleDarkMode = () => {
  if (theme.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
};

theme.addEventListener("click", toggleDarkMode);

const loadThemeMode = () => {
  if (localStorage.theme === "dark") {
    html.classList.add("dark");
    theme.checked = true;
  } else {
    html.classList.remove("dark");
  }
};

loadThemeMode();

//Tabs
const tabs = document.querySelectorAll("[role=tab]");

const toggleActiveTab = (e) => {
  tabs.forEach((tab) => tab.classList.remove("active-tab"));
  e.target.classList.add("active-tab");
};

tabs.forEach((tab) => {
  tab.addEventListener("click", toggleActiveTab);
});

//Keyboard-navigable
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) event.target.click();
});
