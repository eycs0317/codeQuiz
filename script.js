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


//event
startButton.addEventListener('click', timer);


const questions = [
  {
    question: 'what is the letter?',
    choice: ['a', 'b', 'c','d' ],
    answer: 'a'
  },
  {
    question: 'what is the number?',
    choice: ['1', '2', '3','4' ],
    answer: '2'
  },
  {
    question: 'what is the color?',
    choice: ['red', 'blue', 'yellow','black' ],
    answer: 'yellow'
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
    if(startTime === 0) {
      clearInterval(intervalKey);
    }
  },1000)
}
//display questions
function displayQuestion() {
  question.innerText = questions[0].question
  questions[0].choice.forEach(ans => {
  let li = document.createElement('li');
  li.innerText = ans;
  ul.appendChild(li)
})
}

//when the game is over
function gameOver() {

}





