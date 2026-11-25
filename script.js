const container = document.createElement("main");
container.className = "container";

const title = document.createElement("h1");
title.textContent = "Магічна куля";

const question = document.createElement("input");
question.className = "question";
question.type = "text";
question.placeholder = "Введіть запитання...";
question.setAttribute("aria-label", "Твоє запитання");
question.maxLength = 200;
question.required = true;

const ball = document.createElement("div");
ball.className = "ball";
ball.setAttribute("role", "status");
ball.setAttribute("aria-live", "polite");

const answer = document.createElement("div");
answer.className = "answer";
answer.textContent = "?";

const button = document.createElement("button");
button.textContent = "Отримати відповідь";

const message = document.createElement("p");
message.className = "message";
message.setAttribute("aria-live", "polite");

const answers = [
    "Так!",
    "Безумовно!",
    "Схоже на те!",
    "Ймовірно",
    "Можливо",
    "Запитай пізніше",
    "Поки що невідомо",
    "Не знаю, але Давиденко найкращий викладач",
    "Навряд чи",
    "Ні!"
];

ball.appendChild(answer);
container.append(title, question, ball, button, message);
document.body.appendChild(container);

function getAnswer() {
    const userQuestion = question.value.trim();

    if (userQuestion.length === 0) {
        message.textContent = "Спочатку введи запитання!";
        question.focus();
        return;
    }

    if (userQuestion.length < 3) {
        message.textContent = "Запитання має містити щонайменше 3 символи.";
        question.focus();
        return;
    }

    message.textContent = "";

    answer.textContent = "...";
    button.disabled = true;
    button.textContent = "Куля думає...";

    ball.style.transform = "rotate(360deg)";

    setTimeout(function () {
        const randomIndex = Math.floor(Math.random() * answers.length);

        answer.textContent = answers[randomIndex];

        ball.style.transform = "rotate(0deg)";
        button.disabled = false;
        button.textContent = "Запитати ще раз";
    }, 800);
}

button.addEventListener("click", getAnswer);

question.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        getAnswer();
    }
}); 
