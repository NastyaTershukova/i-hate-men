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
    document.querySelector('.question_title').innerHTML = question.name;

    let answersList = document.querySelector('.question_answers');
    answersList.innerHTML = ``;
    for (let i=0; i<question.answers.length; i++) {
        let button = document.createElement('button');
        button.innerHTML = question.answers[i];
        button.onclick = function() {
            selectAnswer(i);
        };

        answersList.appendChild(button);
    }
}
loadQuestion(0);

function selectAnswer(number) {
    if (document.querySelector('.question_answers button.active')) {
        document.querySelector('.question_answers button.active').classList.remove('active');
    }
    document.querySelectorAll('.question_answers button')[number].classList.add('active');
    //TODO: сделать так, чтобы все варианты ответов пользователя записывались в массив
}

document.querySelector('.next_question').addEventListener('click', function() {
    //TODO: если все вопросы пройдены, то показываем секцию с результатами
    currentQuestion++;
    loadQuestion(currentQuestion);
});