const headerItems = document.querySelector(".header__items");
const toggleMenu = document.querySelector(".toggle__menu");
// const backDrop = document.querySelector(".backdrop");

toggleMenu.addEventListener("click", () => {
  headerItems.classList.toggle("open");
  toggleMenu.classList.toggle("open");
//   backDrop.classList.toggle("open");
});
