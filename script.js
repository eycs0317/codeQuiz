let headerElement = document.querySelector('.header');
let timerElement = document.querySelector('.timer');
let questionElement = document.querySelector('.questions');
let doneElement = document.querySelector('.done');
let scoreboardElement = document.querySelector('.scoreboard');
let startButton = document.querySelector('.startButton')
let time = document.querySelector('.time')
let question = document.querySelector('.question')
let questionList = document.querySelector('.choice-lists')
let showScore = document.querySelector('.show-score')
let submitButton = document.querySelector('#submit')
let userName = document.querySelector('#name')
let showAnswer = document.querySelector('.show-answer')
let nameAndScore = document.querySelector("name-and-score")
let scoreboardList = document.querySelector('.scoreboard-list')
let goBackButton = document.querySelector('#go-back-btn')
let clearScoreButton = document.querySelector('#clear-score-btn')
let scoreboard = [];
let currentScore = 0;
let startTime = 51;
let userAnswer = null;
let questionNum = 0;


//event
startButton.addEventListener('click', start)
submitButton.addEventListener('click', submitName)
goBackButton.addEventListener('click', goBack)
clearScoreButton.addEventListener('click', clearScore)


const questions = [
  {
    question: '1. Which one is NOT a JavaScript variable?',
    choice: ['1. str', '2. const', '3. var','4. let' ],
    answer: '0'
  },
  {
    question: '2. Which one is NOT a JavaScript array method?',
    choice: ['1. shift()', '2. Array.isArray()', '3. split()','4. pop()' ],
    answer: '2'
  },
  {
    question: '3. What does 2 + "7" return?',
    choice: ['1. "27"', '2. 9', '3. 27','4. "9"' ],
    answer: '0'
  },
  {
    question: '4. Which one is Falsy Values?',
    choice: ['1. {}', '2. []', '3. -1','4. -0' ],
    answer: '3'
  },
  {
    question: '5. What does ("3" == 3) return?',
    choice: ['1. true', '2. false'],
    answer: '0'
  },
  {
    question: '6. What does (!!true) return?',
    choice: ['1. undefined', '2. true', '3. false','4. I don\'t know' ],
    answer: '1'
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
    if(startTime <= -1) {
      clearInterval(intervalKey);
      gameOver()
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
    questionList.appendChild(li)

    li.addEventListener('click', () => {
      userAnswer = li.getAttribute('index')
      if(userAnswer === questions[questionNum].answer) {
        currentScore+=1
        questionList.innerHTML = ''
        showAnswer.innerText = 'Correct!!'
        clearMessage()
      } else {
        startTime-=10;
        questionList.innerHTML = ''
        showAnswer.innerText = 'Wrong!!'
        clearMessage()
      }
      questionNum++;
      setTimeout(displayQuestion,1000)

    })
  })
  }
}

//when are questions are answer or time is over
function gameOver() {
  questionElement.style.display = 'none';
  timerElement.style.display = 'none';
  doneElement.style.display = 'block'
  showScore.innerText = `Your final Score is ${currentScore}/${questions.length}`
}

//function for the username to submit name
function submitName(e) {
  e.preventDefault();
  if(userName.value === '') {
    alert('Please input Name')
  } else {
    var data = JSON.parse(localStorage.getItem('data'));
    if(!data) {
      scoreboard.push({name:userName.value, score: currentScore})
      localStorage.setItem('data', JSON.stringify(scoreboard))
      displayUsernameAndScore(scoreboard)

    } else {
      data.push({name:userName.value, score: currentScore})
      localStorage.setItem('data', JSON.stringify(data))
      displayUsernameAndScore(data)
    }
    // data.push({name:userName.value, score: currentScore});
    // console.log(data)
    // localStorage.setItem('score', JSON.stringify(scoreboard))
    // scoreboardElement.style.display = 'block'
    // doneElement.style.display = 'none';
    // displayUsernameAndScore();
  }
}


//function to clear the correct/wrong message
function clearMessage() {
  // setTimeout(() => showAnswer.innerText = '',1000)
  setTimeout(() => {
    showAnswer.innerText = ''
  },1000)
}

//display username and score
function displayUsernameAndScore(data) {
  doneElement.style.display = 'none'
  scoreboardElement.style.display ='block'
  //sorted by Score
  let sorted = data.sort((a, b) => {
    console.log('a', a.name)
    console.log('b', b.score)
    return b.score - a.score;
  })
  console.log('sorted data', sorted)
  sorted.forEach(user => {
    let eachUser = document.createElement('li');
    eachUser.innerText = `${user.name} - ${user.score}`
    console.log(eachUser)
    console.log('scoreboardList', scoreboardList)
    scoreboardList.appendChild(eachUser);
  })
}


//go back function
function goBack () {
  scoreboardElement.style.display = 'none';
  headerElement.style.display = 'block'
}

//clear Score function
function clearScore() {
  localStorage.removeItem('data');
  scoreboardList.innerHTML = ''
}