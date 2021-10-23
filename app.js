const nav = document.querySelector("nav");
let scrolled = false;
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.classList.remove("top");
    if (!scrolled) {
      nav.style.transform = "translateY(-140px)"
    }
    setTimeout(function () {
      nav.style.transform = "translateY(0)";
      scrolled = true;
    }, 200)
  } else {
    nav.classList.add("top");
    scrolled = false;
  }
}

// Loader
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.classList.add("disapear");
});

