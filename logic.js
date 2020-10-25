var startContainerElement = document.getElementById('start-container');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var endContainerElement = document.getElementById('end-container');
var startButton= document.getElementById('start-btn');

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex

// var totalSeconds:
// var score: 

function startGame () {
    // startButton.classList.add('hide');
    startContainerElement.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    currentQuestionIndex = 0
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setNextQuestion ()
    startTimer()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusclass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add()
    }
}

// questions array
var questions = [
    {
        question: "What is 2+2?",
        // array of answers
        answers: [
            {text: "4", correct: true},
            {text: "7", correct: false},
            {text: "6", correct: false},
            {text: "9", correct: false},
        ]
        
    },
    {
        question: "What is 2+24",
        // array of answers
        answers: [
            {text: "4", correct: false},
            {text: "7", correct: false},
            {text: "6", correct: true},
            {text: "9", correct: false},
        ]
        
    },
    {
        question: "What is 2+5",
        // array of answers
        answers: [
            {text: "4", correct: false},
            {text: "7", correct: true},
            {text: "6", correct: false},
            {text: "9", correct: false},
        ]
        
    },
    {
        question: "What is 2+7",
        // array of answers
        answers: [
            {text: "4", correct: true},
            {text: "8", correct: false},
            {text: "7", correct: false},
            {text: "9", correct: true},
        ]
        
    },
  
]





