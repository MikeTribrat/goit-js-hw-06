let counterValue = 0;

const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

decrement.addEventListener('click', () => {
    counterValue = counterValue - 1;
    value.textContent = counterValue;
});
increment.addEventListener('click', () => {
    counterValue = counterValue + 1;
    value.textContent = counterValue;
});