function counterApp() {
  const countNumber = document.querySelector('.countNumber');
  const decrement = document.querySelector('.button__minus');
  const increment = document.querySelector('.button__add');
  const inputBox = document.querySelector('.inputBox');
  const resetButton = document.querySelector('.button__reset');

  decrement.addEventListener('click', decrementFunc);

  increment.addEventListener('click', incrementFunc);

  resetButton.addEventListener('click', reset);

  function reset() {
    countNumber.textContent = 0;
    inputBox.value = 1;
  }

  function decrementFunc() {
    countNumber.textContent =
      Number(countNumber.textContent) - Number(inputBox.value);
  }

  function incrementFunc() {
    countNumber.textContent =
      Number(countNumber.textContent) + Number(inputBox.value);
  }
}
counterApp();
