const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


function TestAnsiedad(){
  var verTestAnsiedad = document.getElementById("test-ansiedad");
  var botones = document.getElementById("test-inicios");
    if (verTestAnsiedad.style.display === "none") {
      verTestAnsiedad.style.display = "block";
      botones.style.display = "none";
       } else {
        verTestAnsiedad.style.display = "none";
       } }



let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
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
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    var btnfinish = document.getElementById("finish-btn");
    var btnnext = document.getElementById("next-btn");
    if (btnfinish.style.display === "none") {
      btnfinish.style.display = "block";
      btnnext.style.display = "none";
       } else {
        btnfinish.style.display = "none";
       } }
  }

function finish(){
  var verTestAnsiedad = document.getElementById("test-ansiedad");
  var respuestas = document.getElementById("respuestas-test1");
    if (verTestAnsiedad.style.display === "block") {
      verTestAnsiedad.style.display = "none";
      respuestas.style.display = "block";
       } else {
        verTestAnsiedad.style.display = "block";
       } 
      
    }


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '1-¿Me preocupo demasiado por cosas sin importancia?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '2-¿Me rondan y molestan pensamientos normalmente negativos que no puedo controlar?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '3-¿Me afectan los desengaños tanto que no puedo olvidarlos?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '4-¿Suelo tomar las cosas demasiado seriamente?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '5-¿Me siento tenso o alterado la mayor parte del tiempo?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '6-¿Me preocupo ahora por desgracias futuras que pienso que es posible que pasen?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '7-¿Me siento contrariado porque realizo cosas que no me gustan?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  },
  {
    question: '8-¿Me siento normalmente atado u oprimido?',
    answers: [
      { text: 'nada', correct: 'nada' },
      { text: 'algo', correct: 'algo' },
      { text: 'bastante', correct: 'bastante' },
      { text: 'mucho', correct: 'mucho' }
    ]
  }
]

function TestDepresion(){
        var verTestDepresion = document.getElementById("test-ansiedad");
        var botones = document.getElementById("test-inicios");
          if (verTestDepresion.style.display === "none") {
            verTestDepresion.style.display = "block";
            botones.style.display = "none";
            
             } else {
              verTestDepresion.style.display = "none";
             } 
             
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions1.sort()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question1) {
  questionElement.innerText = question1.question1
  question1.answers1.forEach(answer1 => {
    const button = document.createElement('button')
    button.innerText = answer1.text
    button.classList.add('btn')
    if (answer1.correct) {
      button.dataset.correct = answer1.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
const questions1 = [
  
  {
    question1: '1-¿Te molestaron cosas que usualmente no te molestan?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '2-¿No te sentiste con ganas de comer?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '3-¿Sentías que no podías quitarte de encima la tristeza aún con la ayuda de tu familia o amigos?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '4-¿Sentías que eras tan buena/bueno como cualquier otra persona?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '5-¿Tenías dificultad en mantener tu mente en lo que estabas haciendo?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '6-¿Te sentías deprimida/deprimido?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '7-¿Sentías que todo lo que hacías era un esfuerzo?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '8-¿Te sentías optimista sobre el futuro.?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '9-¿Pensaste que tu vida había sido un fracaso.?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  },
  {
    question1: '10-¿Te sentías con miedo?',
    answers1: [
      { text: 'Raramente o nunca', correct: 'Raramente o nunca (menos de un día)' },
      { text: 'Alguna o pocas veces', correct: 'Alguna o pocas veces (1-2 días)' },
      { text: 'Ocasionalmente', correct: 'Ocasionalmente / moderada(3-4 días)' },
      { text: 'Casi o todo el tiempo', correct: 'La mayor parte o todo el tiempo (5-7 días)' }
    ]
  }
]
}


function TestIntrovertidoExtrovertido(){
  var verTestIntrovertidoExtrovertido = document.getElementById("test-ansiedad");
  var botones = document.getElementById("test-inicios");
    if (verTestIntrovertidoExtrovertido.style.display === "none") {
      verTestIntrovertidoExtrovertido.style.display = "block";
      botones.style.display = "none";
      
       } else {
        verTestIntrovertidoExtrovertido.style.display = "none";
       } 
       
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionIndex++
setNextQuestion()
})
function startGame() {
startButton.classList.add('hide')
shuffledQuestions = questions2.sort()
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
resetState()
showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question2) {
questionElement.innerText = question2.question2
question2.answers2.forEach(answer2 => {
const button = document.createElement('button')
button.innerText = answer2.text
button.classList.add('btn')
if (answer2.correct) {
button.dataset.correct = answer2.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
})
}
const questions2 = [

{
question2: '1-Cuando estoy en un evento social prefiero:',
answers2: [
{ text: 'Pasar desapercibido',  },
{ text: 'Intervenir solo lo necesario',  },
{ text: 'Participar y expresar mi opinión',  },
{ text: 'Ninguna de las anteriores',  },
]
},
{
question2: '2-Cuando hago nuevas amistades:',
answers2: [
{ text: 'Me gusta y lo hago facilmente', },
{ text: 'Me cuesta muchísimo',  },
{ text: 'Depende de como sean las personas',  },
{ text: 'No me gusta hablar con los demás',  }
]
},
{
question2: '3-Mi interés por relacionarme con otros:',
answers2: [
  { text: 'Es nulo', },
  { text: 'Es moderado, depende de las circunstancias',  },
  { text: 'Depende de como sean las personas',  },
  { text: 'Es alto, me gusta mucho',  }
]
},
{
question2: '4-Cuando debo hacer un trabajo en equipo:',
answers2: [
  { text: 'Lo evito a como de lugar', },
  { text: 'Lo hago aunque no me encante',  },
  { text: 'Me gusta trabajar con gente',  },
  { text: 'Pido mi parte y evito contacto',  }
]
},
{
question2: '5-¿Que tipo de hobbies prefieres?',
answers2: [
  { text: 'Tranquilos (leer, pintar...)', },
  { text: 'De todo un poco',  },
  { text: 'deportes, salidas',  },
  { text: 'De observación e investigación',  }
]
},
{
question2: '6-En que grado te gusta estar rodeado de personas',
answers2: [
  { text: 'Mucho, me re aviva estar con otros', },
  { text: 'Solo cuando lo necestio',  },
  { text: 'Solo con personas de confianza',  },
  { text: 'Lo evito a toda costa',  }
]
},
{
question2: '7-Emocionalmente las cosas me afectan',
answers2: [
  { text: 'Poco', },
  { text: 'Depende de la situación',  },
  { text: 'Mucho, tiendo a ser muy aprehensivo',  },
  { text: 'Me considero muy emocional',  }
]
},
{
question2: '8-La gente piensa que soy',
answers2: [
  { text: 'Sociable y divertido', },
  { text: 'Adaptable y resiliente',  },
  { text: 'Callado y aburrido',  },
  { text: 'reservado/a',  }
]
}
]
}