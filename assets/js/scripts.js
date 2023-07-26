const questions = [
    {
        question:"Was ist die Hauptstadt von Deutschland?",
        answers:[
            { text:"Berlin", correct: true},
            { text:"München", correct: false},
            { text:"Hamburg", correct: false},
            { text:"Frankfurt", correct: false},
                ]
    },
    {
        question:"Welcher Planet ist der größte in unserem Sonnensystem?",
        answers:[
            { text:"Mars", correct: false},
            { text:"Venus", correct: false},
            { text:"Jupiter", correct: true},
            { text:"Saturn", correct: false},
                ]
    },
    {
        question:"Wer schrieb das Drama 'Romeo und Julia'?",
        answers:[
            { text:"Charles Dickens", correct: false},
            { text:"William Shakespeare", correct: true},
            { text:"Jane Austen", correct: false},
            { text:"Leo Tolstoi", correct: false},
                ]
    },
    {
        question:"Wie viele Kontinente gibt es auf der Erde?",
        answers:[
            { text:"3", correct: false},
            { text:"6", correct: false},
            { text:"7", correct: true},
            { text:"5", correct: false},
                ]
    },
    {
        question:"Welches ist das chemische Symbol für Wasser?",
        answers:[
            { text:"Wo", correct: false},
            { text:"Wa", correct: false},
            { text:"We", correct: false},
            { text:"H2O", correct: true},
                ]
    },
    {
        question:"Wer malte die berühmte Mona Lisa?",
        answers:[
            { text:"Vincent van Gogh", correct: false},
            { text:"Leonardo da Vinci", correct: true},
            { text:" Pablo Picasso", correct: false},
            { text:"Michelangelo", correct: false},
                ]
    },
    {
        question:"Welche ist die längste Schlange der Welt?",
        answers:[
            { text:"Königskobra", correct: false},
            { text:"Boa constrictor", correct: false},
            { text:" Schwarze Mamba", correct: false},
            { text:"Anakonda", correct: true},
            
                ]
    },
    {
        question:"Was ist die Hauptfarbe der Flagge der Vereinigten Staaten von Amerika?",
        answers:[
            { text:"Rot", correct: false},
            { text:"Blau", correct: false},
            { text:"Weiß", correct: true},
            { text:"Grün", correct: false},
                ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

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

function resetState(){
    nextButton.style.display = "none";
while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    }
}


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

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
    }
});


startQuiz();
