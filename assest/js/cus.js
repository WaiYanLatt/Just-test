const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.classList.add("translate-x-full", "rotate-[360deg]");
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-slate-900"></i>`;
  // darkChangeText.innerText = 'Dark'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
  darkText.classList.add("-translate-x-7");
  darkText.innerText = "ON";
};

const toLight = () => {
  darkSwitchIcon.classList.remove("translate-x-full", "bg-slate-900");
  // darkChangeText.innerText = 'Light'
  darkSwitch.classList.remove("bg-slate-900");
  darkSwitch.classList.add("bg-slate-900");
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkText.classList.remove("-translate-x-7");
  darkText.innerText = "OFF";
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();
  // or
  // if (isDarkMode) {
  //     toDark()
  // } else {
  //     toLight()
  // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem("data-theme");

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }

// menu 
const mobileMenu = document.querySelector(".mobile-menu");
const mobile = document.querySelector("#mobile");
const mobileClose = document.querySelector("#menu-close");
mobileMenu.addEventListener("click", () => {
  mobile.style.left = "0";
});

mobileClose.addEventListener("click", () => {
  mobile.style.left = "-100%";
});

function languageIconActive() {
  let languageIcons = document.querySelectorAll(".languageIcons");
  let languageContent = document.querySelectorAll(".languageContent");

  languageIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      languageIcons.forEach((icon) => {
        icon.classList.remove("languageIconActive");
      });
      icon.classList.add("languageIconActive");
      languageContent.forEach((content) =>
        content.classList.remove("activeCode")
      );
      languageContent[index].classList.add("activeCode");
    });
  });
}