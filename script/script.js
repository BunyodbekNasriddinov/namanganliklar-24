const modal = document.querySelector("#modal");
const body = document.querySelector("body");

function modalView() {
  modal.style.display = "block";
  // body.style.opacity = 0.5;
  modal.style.opacity = 1.0;
}

function exitBtn() {
  modal.style.display  = 'none';
  body.style.opacity = 1.0;
}
