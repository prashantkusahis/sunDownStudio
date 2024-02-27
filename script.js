const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

let elemC = document.querySelector("#elemContainer");
let fixI = document.querySelector("#fixedImage");

elemC.addEventListener("mouseenter", () => {
  fixI.style.display = "block";
});
elemC.addEventListener("mouseleave", () => {
  fixI.style.display = "none";
});

let elems = document.querySelectorAll(".elem");
elems.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    let image = e.getAttribute("imageUrl");
    fixI.style.backgroundImage = `url(${image})`;
  });
});
