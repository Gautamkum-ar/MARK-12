const quizForm = document.querySelector(".quiz-form");
const subBtn = document.querySelector(".submit-answer");
const answerPoint = document.querySelector(".answer-point");
const corractanswer = [
  "30°",
  "Yes",
  "No",
  "Yes",
  "Yes",
  "Yes",
  "Both",
  "5cm",
  "Scalene",
  "Isosceles",
];
let score = 0;
let index = 0;
subBtn.addEventListener("click", () => {
  subBtn.style.display = "none";
  const formresults = new FormData(quizForm);
  for (let value of formresults.values()) {
    if (value === corractanswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  //   console.log(score);
  answerPoint.innerText = "Your score is " + score;
});

// function score() {}
