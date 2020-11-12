// Burger Button
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
// Scroll Event
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY < 80) {
    header.style.background = "transparent";
  } else {
    header.style.background = "#000";
  }
});
// Testomonial
const comments = [
  "Lorem ipsum dolor sit amet consectetur,adipisicing elit. Quotenetur incidunt natus in sed dicta nihil est vero eumconsectetur?",

  "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem",

  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin",
];
const Name = ["william smith", "jack", "joe"];

let count = 0;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", () => {
  count++;
  if (count > 2) {
    count = 0;
  }
  const commentBox = document.querySelector(".comment");
  const userName = document.querySelector(".user > h1");
  commentBox.innerHTML = comments[count];
  userName.innerHTML = Name[count];
});

// Domain Search
prevBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = 2;
  }
  const commentBox = document.querySelector(".comment");
  const userName = document.querySelector(".user > h1");
  commentBox.innerHTML = comments[count];
  userName.innerHTML = Name[count];
});

const searchBtn = document.querySelector(".search > button");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputValue = document.querySelector(".search > input").value;
  let radioNames = document.querySelectorAll("input[name='radio-dots']");
  for (const radioName of radioNames) {
    if (radioName.checked) {
      afterDot = radioName.value;
      let newInputValue = inputValue.split(".")[0];
      console.log(newInputValue.concat(afterDot));
    }
  }
  const siteName = document.querySelector(".site-name");
  const siteAvailability = document.querySelector(".site-availability");
  fetch(
    `https://${inputValue}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    // .then((data) => {
    //   let value = data.DomainInfo;
    //   document.getElementById("result").style.display = "flex";
    //   siteName.innerHTML = value.domainName;
    //   siteAvailability.innerHTML = value.domainAvailability;
    //   if (siteAvailability.innerHTML === "AVAILABLE") {
    //     document.getElementById("available").style.background = "#6CA468";
    //   } else {
    //     document.getElementById("available").style.background = "	#cc3300";
    //   }
    // })
    .catch((error) => {
      document.getElementById("result").style.display = "flex";
      siteAvailability.innerHTML = "something is wrong";
      siteName.innerHTML = "error";
      document.getElementById("available").style.background = "	#cc3300";
    });
});
