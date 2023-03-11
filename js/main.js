let target = document.body;
let theme = localStorage.getItem("theme");
if (theme != null) {
  target.classList.toggle("theme-dark");
}
function changeTheme() {
  let theme = localStorage.getItem("theme");
  if (theme != null) {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "theme-dark");
  }
  target.classList.toggle("theme-dark");
}


let elBurgetBtn = document.querySelector(".site-header__burger-btn");
let elBurgetMenu = document.querySelector(".site-header__menu-burger");
let elCloseBtn = document.querySelector(".site-header__close-btn");
let elWrapper = document.querySelector(".none");

elBurgetBtn.addEventListener("click", function(){
  elBurgetMenu.classList.add("site-header__add-class");
  elWrapper.style.display = "none";
})

elCloseBtn.addEventListener("click", function(){
  elBurgetMenu.classList.remove("site-header__add-class");
  elWrapper.style.display = "block";
})

window.onclick = function(e) {
  // console.log(e.target)
  if(e.target == elBurgetMenu){
    elBurgetMenu.classList.remove("site-header__add-class");
  }
};