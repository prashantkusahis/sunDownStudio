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
