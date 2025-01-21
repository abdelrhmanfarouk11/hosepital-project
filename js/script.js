let links = document.querySelectorAll("li");
let btn = document.querySelector("#btn");
window.addEventListener("load", () => {
  links[0].classList.add("active");
});
window.onscroll = function dynamic_active() {
  const screen = document.documentElement.scrollTop;
  if (screen <= 641) {
    links[0].classList.add("active");
    links[1].classList.remove("active");
    links[2].classList.remove("active");
  } else if (screen <= 1390) {
    links[1].classList.add("active");
    links[0].classList.remove("active");
    links[2].classList.remove("active");
  } else {
    links[2].classList.add("active");
    links[1].classList.remove("active");
    links[0].classList.remove("active");
  }
};

btn.addEventListener("click", () => {
    window.scroll({
        top:0,
        left:0 ,
        behavior:"smooth"
    })
});
