
const inputRef = document.querySelector("#name-input");
const outInput = document.querySelector("#name-output");
const h1El = document.querySelector("h1");

const onInputChange = event =>
    inputRef.value === "" ? outInput.textContent = "Anonymous" : outInput.textContent = event.target.value;

inputRef.addEventListener("input", onInputChange);