'use strict';
const result = document.querySelector('.winnerResult');
const dice1Image = document.querySelector('.dice1');
const dice2Image = document.querySelector('.dice2');

const randomNumberForPlayer1 = Math.floor(Math.random() * 6 + 1);

const randomNumberForPlayer2 = Math.floor(Math.random() * 6 + 1);

const gameInit = () => {
  dice1Image.setAttribute('src', `./images/dice${randomNumberForPlayer1}.png`);
  dice2Image.setAttribute('src', `./images/dice${randomNumberForPlayer2}.png`);
  if (randomNumberForPlayer1 > randomNumberForPlayer2) {
    result.textContent = 'Player 1 is winner!';
  } else if (randomNumberForPlayer1 < randomNumberForPlayer2) {
    result.textContent = 'Player 2 is winner!';
  } else {
    result.textContent = 'Draw';
  }
};

gameInit();
