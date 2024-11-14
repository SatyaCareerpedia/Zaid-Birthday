let btn = document.querySelector(".btn");
let body = document.body;
let audio = document.querySelector("#audio");
let birthdayDiv = document.querySelector(".birthday");

btn.addEventListener("click", () => {
  body.classList.toggle("on");
  birthdayDiv.classList.toggle("on");
  audio.play();
});
