let inputEl = document.querySelector('#validation-input');
const input = document.querySelector('input');
let inputLength = inputEl.dataset.length;

inputEl.addEventListener('change', e => {
    const textInput = e.target.value;

    if (textInput.length === + inputLength) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
    } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
    }
});