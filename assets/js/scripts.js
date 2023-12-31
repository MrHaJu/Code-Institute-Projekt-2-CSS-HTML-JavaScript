// Imports Player Name from index.js
function getPlayerName() {
  return localStorage.getItem("playerName");

}
//Logs Playername to console
const playerNamerStorage = getPlayerName();
console.log(playerNamerStorage,); 

// defends User from accessing the Quiz without entering a Player Name
if (!playerNamerStorage) {
  window.location.href = "index.html"; 
}
// Sets Constants for Buttons and Questions
const questionElement = document.getElementById("question");
const questionCountElement = document.getElementById("question-count");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const beendenButton = document.getElementById("beenden");
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
    console.error("Question loading failed:", error);
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
  beenden.style.display = "hidden"; // Hides the End Game Button
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
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  questionCountElement.innerHTML = `Question ${questionNo} / ${maxQuestions}`;
}

//Removes the Answer Button at the beginning and beetwen in the Game
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Handles the Answer you choose and marks the Correct or Wrong answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  beenden.style.display = "hidden";
  nextButton.style.display = "block";
  }
//Showes the Score at the End of the Game
function showScore() {
  const playerName = getPlayerName(); // Call local saved Player Name
  resetState();
  questionElement.innerHTML = `${playerName}, you answered ${score} out of ${maxQuestions} questions correctly!`;
  nextButton.style.display = "hidden";
  playagnbtn.style.display ="block"
  beenden.innerHTML = "End Game";
  beenden.style.display = "block";
  questionCountElement.style.display = "none"; //blends out the Questioncounter
  handlebeendenButton();
  handleplayagnbtn();
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

// Handles the Play Again Button and brings back to the Quiz
function handleplayagnbtn() {
  playagnbtn.addEventListener("click", function () {
    window.location.href = "quiz.html";
    
  });
}

// Handles the End Button and:
function handlebeendenButton() {
  beendenButton.addEventListener("click", function () {
    localStorage.removeItem("playerName");  // Deletes PlayerName from Localstorage
    window.location.href = "index.html"; // brings back to the index Page
  });
}

// Goes to the next Question if you click the Next Button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < maxQuestions) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

//Triggers the Function to Start the Quiz
window.onload = function () {
  startQuiz();
};
