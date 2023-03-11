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
