const menu_openButton = document.querySelector(".menu-bar");

const side_bar = document.querySelector(".side-bar");

const close_button = document.querySelector(".fa-xmark");

menu_openButton.addEventListener(
  "click",
  () => {
    opensideBar();
  },
  true
);

close_button.addEventListener("click", () => {
  closesideBar();
});

function opensideBar() {
  side_bar.classList.add("active");
}

function closesideBar() {
  side_bar.classList.remove("active");
}
