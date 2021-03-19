'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

document.querySelector('.btn.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', '⛔ No number');
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct number');
    displayMessage('.number', secretNumber);
    document.querySelector('.btn.check').disabled = true;
    displayMessage('.btn.check', '🎉 WIN!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayMessage('.highscore', highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayMessage('.score', score);
      displayMessage(
        '.message',
        guess > secretNumber ? '⏫ Too high' : '⏬ Too low'
      );
    } else {
      displayMessage('.score', 0);
      displayMessage('.message', '😢 You lost the game!');
    }
  }
});

document.querySelector('.btn.again').addEventListener('click', () => {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.btn.check').disabled = false;
  document.querySelector('.btn.check').textContent = 'Check!';
  displayMessage('.score', score);
  displayMessage('.message', 'Start guessing...');
  displayMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
