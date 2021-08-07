const inputForm = document.querySelector('#validation-input');
const lengthForm = inputForm.getAttribute('data-length');

inputForm.addEventListener('blur', () => {
  if (inputForm.value.length === parseInt(lengthForm)) {
    inputForm.classList.add('valid');
    inputForm.classList.remove('invalid');
  } else {
    inputForm.classList.add('invalid');
  }
});
