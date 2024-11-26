function getUrlVariable(name) {
    let variables = new URLSearchParams(window.location.search);
    return variables.get(name);
}

const testId = getUrlVariable('test');
console.log(testId);
let test, currentQuestion;

function loadTest() {
    //TODO: доделать загрузку теста
    test = tests[testId];
    document.querySelector('.test_title').innerText = test.title;
    document.querySelector('.test_description').innerHTML = test.description;
    currentQuestion = 0;
}
loadTest();

function loadQuestion(number) {
    let question = test.questions[number];
    document.querySelector('.current-question-number').innerText = number + 1;
    document.querySelector('.total-questions').innerText = test.questions.length;
    document.querySelector('.question_title').innerHTML = question.name;

    let answersList = document.querySelector('.question_answers');
    answersList.innerHTML = ``;
    for (let i = 0; i < question.answers.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = question.answers[i];
        button.onclick = function () {
            selectAnswer(i);
        };

        answersList.appendChild(button);
    }
}
loadQuestion(0);

const userAnswers = [];

function selectAnswer(number) {
    if (document.querySelector('.question_answers button.active')) {
        document.querySelector('.question_answers button.active').classList.remove('active');
    }
    document.querySelectorAll('.question_answers button')[number].classList.add('active');
    //TODO: сделать так, чтобы все варианты ответов пользователя записывались в массив
    userAnswers[currentQuestion] = number;
    console.log(userAnswers);
}


document.querySelector('.next_question').addEventListener('click', function () {
    //TODO: если все вопросы пройдены, то показываем секцию с результатами
    if (currentQuestion + 1 >= test.questions.length) {
        showResults();
    } else {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
});

function showResults() {
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.results').style.display = 'block';
    let correctAnswers = 0;
    for (let i = 0; i < test.questions.length; i++) {
        if (userAnswers[i] == test.questions[i].correctAnswer) {
            correctAnswers++;
        }
    }

    let text = `Ваше общение с гетеро мужчинами сейчас может вызывать трудности. Возможно, вы иногда не уверены, как правильно поступать в тех или иных ситуациях. Это нормально — главное, не бойтесь работать над собой, развивать навыки общения и учиться ставить границы. Попробуйте проанализировать свои эмоции и реакции, чтобы чувствовать себя увереннее.`;
    if (correctAnswers == test.questions.length) {
        text = `Вы мастер общения с гетеро мужчинами! Ваши ответы показывают, что вы уверены в себе, отлично понимаете своё поведение и реакции других людей. Вы умеете строить гармоничные и здоровые отношения, оставаясь верной себе. Поздравляем — это великолепный результат!`;
    } else if (correctAnswers >= test.questions.length / 2) {
        text = `У вас уже есть хороший уровень понимания общения с гетеро мужчинами. Вы часто действуете уверенно и правильно, знаете, как реагировать в сложных ситуациях. Однако бывают моменты, когда вы можете сомневаться или поступать импульсивно. Продолжайте развивать навыки, и вы станете ещё увереннее!`;
    } else if (correctAnswers > 0) {
        text = `Вы делаете первые шаги к пониманию и улучшению своих взаимодействий с гетеро мужчинами. Иногда вы действуете правильно, но всё ещё могут быть моменты неуверенности или сложностей. Постарайтесь обращать внимание на свои чувства, не бояться быть открытой и учиться строить здоровое общение.`;
    } else {
    }
    document.querySelector('.results-text').innerText = `Вы ответили правильно на ${correctAnswers} из ${test.questions.length} вопросов. ${text}`;
};