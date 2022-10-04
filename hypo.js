const sides = document.querySelectorAll(".side-length"),
  button = document.querySelector(".submit"),
  result = document.querySelector(".out-put");

button.addEventListener("click", formulaOfhypo);
function formulaOfhypo(a, b) {
  (a = sides[0].value), (b = sides[1].value);
  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  result.innerText = c;
}
