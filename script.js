let headerElement = document.querySelector('.header');
let timerElement = document.querySelector('.timer');
let questionElement = document.querySelector('.questions');
let doneElement = document.querySelector('.done');
let scoreboardElement = document.querySelector('.scoreboard');
let startButton = document.querySelector('.startButton')
let time = document.querySelector('.time')
let question = document.querySelector('.question')
let ul = document.querySelector('.choice-lists')
let showScore = document.querySelector('.show-score')
let submitButton = document.querySelector('#submit')
let userName = document.querySelector('#name')
let showAnswer = document.querySelector('.show-answer')
let scoreboard = {
  player1: 10,
}
let currentScore = 0;
let startTime = 101;
let userAnswer = null;
let questionNum = 0;


//event
startButton.addEventListener('click', () => {
  start();
});


const questions = [
  {
    question: 'what is the letter?',
    choice: ['a', 'b', 'c','d' ],
    answer: '0'
  },
  {
    question: 'what is the number?',
    choice: ['1', '2', '3','4' ],
    answer: '1'
  },
  {
    question: 'what is the color?',
    choice: ['red', 'blue', 'yellow','black' ],
    answer: '2'
  }
]


//when start button click - header-no, question and answer - yes
function start() {
  timer();
  displayQuestion();
  questionElement.style.display = 'block';
  timerElement.style.display = 'block';
  headerElement.style.display = 'none'
}



//timer function
function timer() {
  var intervalKey = setInterval(() => {
    startTime--;
    time.innerText = startTime
    if(startTime <= 0) {
      clearInterval(intervalKey);
    }
  },1000)
}
//display questions
function displayQuestion() {
  if((questions[questionNum]) === undefined) {
    // setTimeout(gameOver, 1000)
    gameOver();
    return;
  } else {
    question.innerText = questions[questionNum].question
    questions[questionNum].choice.forEach((element, index) => {
    let li = document.createElement('li');
    li.innerText = element;
    li.setAttribute('index', index)
    ul.appendChild(li)

    li.addEventListener('click', () => {
      userAnswer = li.getAttribute('index')
      if(userAnswer === questions[questionNum].answer) {
        console.log('correct')
        currentScore+=1
        // ul.innerHTML = ''
        console.log(showAnswer.innerText)
        showAnswer.innerText = 'Correct!!'
        clearMessage()
      } else {
        console.log('wrong')
        startTime-=10;
        // ul.innerHTML = ''
        showAnswer.innerText = 'Wrong!!'
        clearMessage()
      }
      questionNum++;
      setTimeout(displayQuestion,1000)
      console.log('currentScore', currentScore)
    })


  })
  }

}

//when are questions are answer or time is over
function gameOver() {
  console.log('no more questions')
  questionElement.style.display = 'none';
  timerElement.style.display = 'none';
  doneElement.style.display = 'block'
  showScore.innerText = `Your final Score is ${currentScore}/3`
}

//function for the username to submit name
function submitName(e) {
  e.preventDefault();
  if(userName.value === '') {
    console.log('no name was input')
  } else {
    scoreboard[userName.value] = currentScore;
    localStorage.setItem('score', JSON.stringify(scoreboard))
    doneElement.style.display = 'none';
    scoreboardElement.style.display = 'block'
  }
}
submitButton.addEventListener('click', submitName)

//function to clear the correct/wrong message
function clearMessage() {
  // setTimeout(() => showAnswer.innerText = '',1000)
  setTimeout(() => {
    ul.innerHTML = ''
    showAnswer.innerText = ''
  },1000)
}
//work
// questionElement.style.display = 'none'