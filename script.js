'use strict';

let answer = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);

/**
 * On Again Button click => Restore everything
 */
document.querySelector('.again').addEventListener('click', function () {
  resetScreen();
});

document.querySelector('.guess').addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.querySelector('.check').click();
  }
});

/**
 * On Check Button click => check if you win
 */
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score < 1) {
    displayMessage('You Lost the Game');
    return;
  }
  //No INPUT
  if (!guess) {
    displayMessage('No Number');
    return;
  }
  //Correct Answer
  if (guess === answer) {
    displayMessage('Correct Answer');
    if (Number(document.querySelector('.highscore').textContent) < score)
      document.querySelector('.highscore').textContent = score;
    setCorrectAnswer();
  }
  //GUESS is wrong
  else {
    displayMessage(guess < answer ? 'Guess Higher' : 'Guess Lower');
    score--;
    document.querySelector('.score').textContent = score;
  }
});

function displayMessage(content) {
  document.querySelector('.message').textContent = content;
}

function setCorrectAnswer() {
  document.querySelector('.number').textContent = answer;
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
}

function resetScreen() {
  document.querySelector('.score').textContent = '20';
  score = Number(document.querySelector('.score').textContent);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  answer = Math.trunc(Math.random() * 20) + 1;
}
