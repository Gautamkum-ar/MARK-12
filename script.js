const enterAngles = document.querySelectorAll(".angle-input");

const checkBtn = document.querySelector(".checkbtn");
const outPut = document.querySelector(".output");

checkBtn.addEventListener("click", () => {
  const sum = sumOfAnglesOfTr(
    Number(enterAngles[0].value),
    Number(enterAngles[1].value),
    Number(enterAngles[2].value)
  );
  if (sum === 180) {
    outPut.innerText = "Yeah..! Good Job It's a triangle 😊";
  } else {
    outPut.innerText = "Sorry it's not a Triangle Try another Angles😒 ";
  }
});
function sumOfAnglesOfTr(angle1, angle2, angle3) {
  const sum = angle1 + angle2 + angle3;
  return sum;
}
