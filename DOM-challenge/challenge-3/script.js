function letterCaseTransformation() {
  const inputBox = document.querySelector('#inputBox');
  const lowercase = document.querySelector('#lowercase');
  const uppercase = document.querySelector('#uppercase');
  const camelcase = document.querySelector('#camelcase');
  const pascalcase = document.querySelector('#pascalcase');
  const snakecase = document.querySelector('#snakecase');
  const kebabcase = document.querySelector('#kebabcase');
  const trim = document.querySelector('#trim');

  console.log(inputBox);

  inputBox.addEventListener('keyup', function () {
    lowercase.textContent = inputBox.value.toLowerCase();
    uppercase.textContent = inputBox.value.toUpperCase();
    camelcase.textContent = inputBox.value
      .replace(/\s(.)/g, function (a) {
        return a.toUpperCase();
      })
      .replace(/\s/g, '')
      .replace(/^(.)/, function (b) {
        return b.toLowerCase();
      });
    pascalcase.textContent = inputBox.value
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
    snakecase.textContent = inputBox.value
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join('_');
    kebabcase.textContent = inputBox.value
      .replace(/([A-Z])([A-Z])/g, '$1-$2')
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();

    trim.textContent = inputBox.value.split(' ').join('');
  });
}

letterCaseTransformation();
