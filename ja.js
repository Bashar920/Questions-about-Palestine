let quizData = [{
    question: "What Is The Capital Of Palestine ?",
    a: "Bethlehem",
    b: "Ramallah",
    c: "Jerusalem",
    d: "Hebron",
    correct: "c_text"
}, {
    question: "When did the Nakba happen ?",
    a: "in May 14 1948",
    b: "in May 16 1948",
    c: "in May 17 1948",
    d: "in May 15 1948",
    correct: "d_text"
}, {
    question: "When did the Naksa happen ?",
    a: "June 4, 1967",
    b: "June 5, 1967",
    c: "June 6, 1967",
    d: "June 5, 1968",
    correct: "b_text"
}, {
    question: "What are the borders of Palestine from the east?",
    a: "Egypt",
    b: "Syria",
    c: "Jordan",
    d: "Iraq",
    correct: "c_text"
}, {
    question: "What is the name of the old Palestinian currency?",
    a: "pound",
    b: "dollar",
    c: "shekel",
    d: "dinar",
    correct: "a_text"
}]
var questionEl = document.getElementById("question")
var aText = document.getElementById("a")
var bText = document.getElementById("b")
var cText = document.getElementById("c")
var dText = document.getElementById("d")

var answerEls = document.querySelectorAll(".answer")
var quiz = document.getElementById("quiz")

var currentQuiz = 0;
var score = 0;


loadQuiz();

function loadQuiz() {
    unselect()
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
}

function selected() {
    var answer = undefined;
    answerEls.forEach(function(answerEl) {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function unselect() {
    answerEls.forEach(function(answerEl) {
        answerEl.checked = false;
    });
}

$('#subButton').on('click', function(e) {
    var answer = selected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            var length = quizData.length
            quiz.innerHTML = "<h2>You answered correctly at " + score + " / " + length + " questions.</h2>"

            var restart = document.createElement("button")
            $(restart).text("Restart")
            $(restart).on("click", function() {
                location.reload();
            })
            $(restart).appendTo($("#quiz"))
        }
    }
})