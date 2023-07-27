
// Imports Player Name from index.js
function getPlayerName() {
    return localStorage.getItem("playerName");
}
// Sets Constants for Buttons and Questions
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const maxQuestions = 10;

//Start Score and Question Index
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

//function to load the questions
async function loadQuestions() {
    try {
        const response = await fetch("assets/js/questions.json");
        questions = await response.json();
        shuffleQuestions();
        showQuestion();
    } catch (error) {
        console.error("Fehler beim Laden der Fragen:", error);
    }
}

function shuffleQuestions() {    
    questions.sort(() => Math.random() - 0.5);
    questions.slice(0, maxQuestions);
}

//Function to start the Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    loadQuestions();
}
// Showes the Question in the App
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

// Showes the Answers for each Question
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

//Removes the Answer Button at the beginning and beetwen in the Game
function resetState(){
    nextButton.style.display = "none";
while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Handles the Answer you choose and marks the Correct or Wrong answer
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
        }else{
        selectedBtn.classList.add("wrong");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
}
//Showes the Score at the End of the Game
function showScore(){
    const playerName = getPlayerName(); // Den gespeicherten Spielername abrufen
    resetState();
    questionElement.innerHTML = `${playerName}, du hast ${score} von ${maxQuestions} richtig!`;
    nextButton.innerHTML = "Nochmal spielen";
    nextButton.style.display = "block"
}
// activates the Next Button after you choose any Answer
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions) {
        showQuestion();
    } else {
        showScore();
    }
}
// Goes to the next Question if you click the Next Button
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < maxQuestions){
        handleNextButton();
    }else{
        startQuiz();
    }
    }
);

//Triggers the Function to Start the Quiz
window.onload= function () {
startQuiz();
};