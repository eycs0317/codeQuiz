let headerElement = document.querySelector('.header');
let timerElement = document.querySelector('.timer');
let questionElement = document.querySelector('.questions');
let doneElement = document.querySelector('.done');
let scoreboardElement = document.querySelector('.scoreboard');
let startButton = document.querySelector('.startButton')
let time = document.querySelector('.time')
let question = document.querySelector('.question')
let ul = document.querySelector('.choice-lists')
let scoreboard = {
  player1: 10,
}
let startTime = 101;
let userAnswer = null;
let questionNum = 0;


//event
startButton.addEventListener('click', () => {
  timer();
  displayQuestion();
  questionElement.style.display = 'block';
  timerElement.style.display = 'block';
  headerElement.style.display = 'none'
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

  question.innerText = questions[questionNum].question
  questions[questionNum].choice.forEach((element, index) => {
  let li = document.createElement('li');
  li.innerText = element;
  li.setAttribute('name', index)
  ul.appendChild(li)

  li.addEventListener('click', () => {
    userAnswer = li.getAttribute('name')
    console.log(typeof userAnswer)
    console.log('questions[questionNum].answer', typeof questions[questionNum].answer)
    if(userAnswer === questions[questionNum].answer) {
      console.log('correct')
    } else {
      // - 10 sec from timer
      console.log('wrong')
    }
    questionNum++;

  })


})
}

//when the game is over
function gameOver() {

}






//work
// questionElement.style.display = 'none'