let controlFont = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFont.oninput = function() {
text.style.fontSize = controlFont.value + "px";
};