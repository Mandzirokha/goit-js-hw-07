const input = document.querySelector('#name-input');
const name = document.querySelector('span#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  name.textContent = event.currentTarget.value;
  if (name.textContent === '') {
    name.textContent = 'незнакомец';
  }
}
