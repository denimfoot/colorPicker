const colors = ["Blue", "Red", "Green", "#617E8C"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn");

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
