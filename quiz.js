const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('questions-container')

const question = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
    console.log('started');
    startButton.classList.add('hide')
    shuffledQuestions = question.sortet( () => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}



let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            { text: '<script>', correct: true },
            { text: '<javaScript>', correct: false},
            { text: '<js>', correct: false},
            { text: '<Javascript>', correct: false}
        ]
    }
]
