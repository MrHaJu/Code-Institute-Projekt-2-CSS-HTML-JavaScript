
// Constant for all Questions
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
    {
        question: "Wer schrieb das berühmte Drama 'Hamlet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false },
        ]
    },
    {
        question: "Welches ist das längste Fluss der Welt?",
        answers: [
            { text: "Nil", correct: false },
            { text: "Amazonas", correct: true },
            { text: "Mississippi", correct: false },
            { text: "Donau", correct: false },
        ]
    },
    {
        question: "Wie viele Spieler hat eine Fußballmannschaft auf dem Feld?",
        answers: [
            { text: "9", correct: false },
            { text: "10", correct: false },
            { text: "11", correct: true },
            { text: "12", correct: false },
        ]
    },
    {
        question: "Welche chemische Element hat das Symbol 'Fe'?",
        answers: [
            { text: "Silber", correct: false },
            { text: "Eisen", correct: true },
            { text: "Fluor", correct: false },
            { text: "Gold", correct: false },
        ]
    },
    {
        question: "Wie viele Beine hat ein Insekt normalerweise?",
        answers: [
            { text: "4", correct: false },
            { text: "6", correct: true },
            { text: "8", correct: false },
            { text: "10", correct: false },
        ]
    },
    {
        question: "Welches ist das größte Land der Welt (nach Landfläche)?",
        answers: [
            { text: "China", correct: false },
            { text: "Russland", correct: true },
            { text: "Kanada", correct: false },
            { text: "Indien", correct: false },
        ]
    },
    {
        question: "Welche Farbe hat die Haut von Elefanten normalerweise?",
        answers: [
            { text: "Grau", correct: true },
            { text: "Braun", correct: false },
            { text: "Schwarz", correct: false },
            { text: "Weiß", correct: false },
        ]
    },
    {
        question: "Wer schrieb das Buch 'Harry Potter und der Stein der Weisen'?",
        answers: [
            { text: "J.K. Rowling", correct: true },
            { text: "J.R.R. Tolkien", correct: false },
            { text: "George Orwell", correct: false },
            { text: "Stephen King", correct: false },
        ]
    },
    {
        question: "Welcher Planet wird auch als 'Der Rote Planet' bezeichnet?",
        answers: [
            { text: "Mars", correct: true },
            { text: "Venus", correct: false },
            { text: "Jupiter", correct: false },
            { text: "Saturn", correct: false },
        ]
    },
    {
        question: "Welche berühmte Malerei ist bekannt für ihr geheimnisvolles Lächeln?",
        answers: [
            { text: "Die Schrei", correct: false },
            { text: "Das letzte Abendmahl", correct: false },
            { text: "Die Erschaffung Adams", correct: false },
            { text: "Mona Lisa", correct: true },
        ]
    },
    {
        question: "Wie viele Kontinente haben keine permanenten Einwohner?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false },
        ]
    },
    {
        question: "Was ist die chemische Formel für Sauerstoff?",
        answers: [
            { text: "So", correct: false },
            { text: "Su", correct: false },
            { text: "O2", correct: true },
            { text: "Sa", correct: false },
        ]
    },
    {
        question: "Wie nennt man die kleinste Einheit eines Elements?",
        answers: [
            { text: "Molekül", correct: false },
            { text: "Atom", correct: true },
            { text: "Verbindung", correct: false },
            { text: "Isotop", correct: false },
        ]
    },
    {
        question: "Welches Tier ist das größte auf der Erde?",
        answers: [
            { text: "Blauwal", correct: true },
            { text: "Elefant", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Gorilla", correct: false },
        ]
    },
    {
        question: "Wer schrieb das berühmte Buch 'Der kleine Prinz'?",
        answers: [
            { text: "Antoine de Saint-Exupéry", correct: true },
            { text: "F. Scott Fitzgerald", correct: false },
            { text: "Ernest Hemingway", correct: false },
            { text: "Jane Austen", correct: false },
        ]
    },
    {
        question: "Was ist die Hauptstadt von Japan?",
        answers: [
            { text: "Tokio", correct: true },
            { text: "Peking", correct: false },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false },
        ]
    },
    {
        question: "Welcher Planet ist der sonnennächste in unserem Sonnensystem?",
        answers: [
            { text: "Mars", correct: false },
            { text: "Venus", correct: false },
            { text: "Merkur", correct: true },
            { text: "Jupiter", correct: false },
        ]
    },
    {
        question: "Was ist die Hauptfarbe der Flagge von Frankreich?",
        answers: [
            { text: "Rot", correct: false },
            { text: "Blau", correct: true },
            { text: "Weiß", correct: false },
            { text: "Gelb", correct: false },
        ]
    },
    {
        question: "Welche berühmte Künstlerin malte die 'Frida Kahlo mit Affen'-Serie?",
        answers: [
            { text: "Frida Kahlo", correct: true },
            { text: "Georgia O'Keeffe", correct: false },
            { text: "Yayoi Kusama", correct: false },
            { text: "Marina Abramović", correct: false },
        ]
    },
    {
        question: "Welches ist das längste Gebirge der Welt?",
        answers: [
            { text: "Rocky Mountains", correct: false },
            { text: "Alpen", correct: false },
            { text: "Himalaya", correct: true },
            { text: "Anden", correct: false },
        ]
    },
    {
        question: "Welches ist das schnellste Tier auf der Erde?",
        answers: [
            { text: "Gepard", correct: true },
            { text: "Pferd", correct: false },
            { text: "Falke", correct: false },
            { text: "Elefant", correct: false },
        ]
    },
    {
        question: "Was ist die Hauptstadt von Italien?",
        answers: [
            { text: "Rom", correct: true },
            { text: "Mailand", correct: false },
            { text: "Venedig", correct: false },
            { text: "Florenz", correct: false },
        ]
    },
    
];
// Sets Constants for Buttons and Questions
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const maxQuestions = 10;

//Start Score and Question Index
let currentQuestionIndex = 0;
let score = 0;

function shuffleQuestions() {    
    questions.sort(() => Math.random() - 0.5);
    questions.slice(0, maxQuestions);
}

//Function to start the Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    shuffleQuestions();
    showQuestion();
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
    resetState();
    questionElement.innerHTML = `Du hast ${score} von ${maxQuestions} richtig!`;
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
startQuiz();
