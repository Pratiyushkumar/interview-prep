const phoneNumber = document.getElementById('inputBox');

phoneNumber.addEventListener('input', () => {
  formattedString(phoneNumber.value);
});

function formattedString(str) {
  if (str.length === 3) {
    phoneNumber.value = `+(${str})-`;
  }
}
