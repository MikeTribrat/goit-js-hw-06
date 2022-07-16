//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
//Для генерации случайного цвета используй функцию getRandomHexColor.

const bodyEl = document.body;
const spanRef = document.querySelector('.color');
const btnRef = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

btnRef.addEventListener('click', onButton);

function onButton(event) { 
  const color = `${getRandomHexColor()}`;
  bodyEl.style.background = color;
  spanRef.textContent = color;
};