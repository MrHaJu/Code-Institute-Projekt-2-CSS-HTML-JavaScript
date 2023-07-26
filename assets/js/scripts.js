const questions = [
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
    {
        question:"",
        answers:[
            { text:"", correct: false}
            { text:"", correct: false}
            { text:"", correct: true}
            { text:"", correct: false}
                ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}