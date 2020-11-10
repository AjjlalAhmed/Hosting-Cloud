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
  if(window.scrollY  < 100){
    header.style.background = "transparent"
  } else{
    header.style.background = "#000"
  }
});

const comments = ["Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quotenetur incidunt natus in sed dicta nihil est vero eumconsectetur?",

"survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",

"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",]
const Name = ["william smith","jack","joe"]


let count = 0;
const nextBtn = document.querySelector(".next-btn"); 
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", () => {
  count++;
    if(count > 2 ){
      count = 0
    }
    const commentBox = document.querySelector(".comment");
    const userName = document.querySelector(".user > h1");
    commentBox.innerHTML = comments[count];
    userName.innerHTML = Name[count]
})

prevBtn.addEventListener("click", () => {
  count--;
    if(count < 0 ){
      count = 2
    }
    const commentBox = document.querySelector(".comment");
    const userName = document.querySelector(".user > h1");
    commentBox.innerHTML = comments[count];
    userName.innerHTML = Name[count]
})
