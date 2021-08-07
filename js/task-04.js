const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;
incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
});

decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
});
