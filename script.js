let x = document.getElementById("contain");
let mobileElement = document.getElementById("hide");

x.addEventListener("click", myFunction);

function myFunction() {
  var element = document.getElementById("nav");
  let mobileElement = document.getElementById("hide");
  let infoElement = document.getElementById("info");
  element.classList.toggle("open");
  mobileElement.classList.toggle("close");
  infoElement.classList.toggle("close");
  x.classList.toggle("change");
}
