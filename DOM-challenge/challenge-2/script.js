function guessTheNumber() {
  const inputField = document.querySelector('.numberInput');
  const submitButton = document.querySelector('#submitButton');
  const startButton = document.querySelector('#startButton');
  const outputState = document.querySelector('.state');
  const guesses = document.querySelector('.guesses');

  let guessArray = [];

  let randonNumber = randomNumberGenerator();
  const LIMITTEXT = 'Limit is from 1 to 100';
  const SUCCESSMESSAGE = 'Yay! you got a match!!';
  const VALUEHIGHMESSAGE = 'Value too High!!';
  const VALUELOWMESSAGE = 'Value too Low!!';
  const LIMITEXCEEDMESSAGE =
    'You have exceeded the limit, you are only allowed to submit 10 times';

  submitButton.addEventListener('click', submitButtonFunctionality);

  startButton.addEventListener('click', startButtonFunctionality);

  function submitButtonFunctionality() {
    if (Number(inputField.value) > 100 || Number(inputField.value) < 1) {
      outputState.textContent = LIMITTEXT;
      startButton.disabled = false;
      submitButton.disabled = true;
      return;
    }
    if (guessArray.length < 10) {
      guessArray.push(Number(inputField.value));
      if (Number(inputField.value) === randonNumber) {
        outputState.textContent = SUCCESSMESSAGE;
        startButton.disabled = false;
        submitButton.disabled = true;
      } else if (Number(inputField.value) > randonNumber) {
        outputState.textContent = VALUEHIGHMESSAGE;
      } else {
        outputState.textContent = VALUELOWMESSAGE;
      }
      guesses.textContent = guessArray.join(', ');
    } else {
      outputState.textContent = LIMITEXCEEDMESSAGE;
      startButton.disabled = false;
      submitButton.disabled = true;
    }
  }

  function startButtonFunctionality() {
    guesses.textContent = '';
    outputState.textContent = '';
    startButton.disabled = true;
    submitButton.disabled = false;
    inputField.value = '';
    guessArray = [];
    randonNumber = randomNumberGenerator();
  }

  function randomNumberGenerator() {
    return Math.floor(Math.random() * 100);
  }
}
guessTheNumber();
