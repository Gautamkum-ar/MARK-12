const base = document.querySelector(".base");
const height = document.querySelector(".height");
const btn = document.querySelector(".check");
const result = document.querySelector(".output");

btn.addEventListener("click", () => {
  const triangle = areaOfTriangle(height.value, base.value);
  result.innerText = "Area of the Traingle is :" + triangle + " Cm-Square";
});
function areaOfTriangle(h, b) {
  area = (h * b) / 2;
  return area;
}
