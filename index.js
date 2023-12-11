let questions = document.querySelectorAll(".questions-and-answers .flex-wrap");
let answers = document.querySelectorAll(".answer");
let plusIcons = document.querySelectorAll(".plus-icon");
let minusIcons = document.querySelectorAll(".icon-minus");

questions.forEach((question, index) => {
  question.addEventListener("click", function () {

    answers.forEach((answer, i) => {
        if(i !== index && answer.classList.contains("show")){
            answer.classList.remove("show");
            questions[i].classList.remove("active");
            plusIcons[i].classList.remove("hide-plus-icon");
            minusIcons[i].classList.remove("show-minus");
        };
    });

    question.classList.toggle("active");
    setTimeout(() => {
      answers[index].classList.toggle("show");
    }),50;
    plusIcons[index].classList.toggle("hide-plus-icon");
    minusIcons[index].classList.toggle("show-minus");
  });
});
