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

let elem1 = document.querySelector("#elem1");
let elem2 = document.querySelector("#elem2");
let elem3 = document.querySelector("#elem3");
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");
let elem6 = document.querySelector("#elem6");
let elem7 = document.querySelector("#elem7");

elem1.addEventListener("mouseenter", () => {
  let image = elem1.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
elem2.addEventListener("mouseenter", () => {
  let image = elem2.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
