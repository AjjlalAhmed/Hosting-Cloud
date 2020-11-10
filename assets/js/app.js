const navMenu = document.getElementById("nav-menu");
const burgerBtn = document.querySelector(".burger-menu");
let clicked = true;
burgerBtn.addEventListener("click", () => {
  if (clicked === true) {
    navMenu.style.maxHeight = `500px`;
    clicked = false;
  } else {
    navMenu.style.maxHeight = `0px`;
    clicked = true;
  }
  
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if(window.scrollY  == 0){
    header.style.background = "transparent"
  } else{
    header.style.background = "#000"
  }
});
