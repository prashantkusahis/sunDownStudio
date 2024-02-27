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
elem3.addEventListener("mouseenter", () => {
  let image = elem3.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
elem4.addEventListener("mouseenter", () => {
  let image = elem4.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
elem5.addEventListener("mouseenter", () => {
  let image = elem5.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
elem6.addEventListener("mouseenter", () => {
  let image = elem6.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
elem7.addEventListener("mouseenter", () => {
  let image = elem7.getAttribute("imageUrl");
  fixI.style.backgroundImage = `url(${image})`;
});
