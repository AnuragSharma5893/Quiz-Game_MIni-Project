const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
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
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
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
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is JavaScript?',
    answers: [
      { text: 'JavaScript is a scripting language used to make the website interactive', correct: true},
      { text: ' JavaScript is an assembly language used to make the website interactive', correct: false },
      { text: 'JavaScript is a compiled language used to make the website interactive', correct: false },
      { text: 'None of the mentioned', correct: false }
    ]
  },
  {
    question: ' Which of the following is correct about JavaScript?',
    answers: [
      { text: ' JavaScript is an Object-Based language', correct: true},
      { text: ' JavaScript is Assembly-language', correct: false },
      { text: 'JavaScript is an Object-Oriented language', correct: false },
      { text: 'JavaScript is a High-level language', correct: false },
    
    ]
  },
  {
    question: 'What is JavaScript?',
    answers: [
      { text: 'JavaScript is a scripting language used to make the website interactive', correct: true},
      { text: ' JavaScript is an assembly language used to make the website interactive', correct: false },
      { text: 'JavaScript is a compiled language used to make the website interactive', correct: false },
      { text: 'None of the mentioned', correct: false }
    ]
  },
  {
    question: ' CPU scheduling is the basis of ___________',
    answers: [
      { text: 'multiprogramming operating systems', correct: true},
      { text: ' larger memory sized systems', correct: false },
      { text: 'multiprocessor systems', correct: false },
      { text: ' none of the mentioned', correct: false }
    ]
  },
]