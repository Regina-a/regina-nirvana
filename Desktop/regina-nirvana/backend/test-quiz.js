let startButton = document.getElementById('start-btn')
let questionContainerElements = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)
let shuffledQuestions, currentQuestionIndex


function startGame(){
startButton.classList.add('hide')
questionContainerElements.classList.remove('hide')
shuffledQuestions = questions.sort(()=> Math.random() - .5)
currentQuestionIndex = 0;
setNextQuestion()
}

function setNextQuestion(){
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
let questions = [
    {
        question:"SI",
        answers: [
           { text:'p'},
            {text:'o'},
            { text:'a'},
            { text:'i'}


        ]
    }
]