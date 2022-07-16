/*
  Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и
  нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
  <div id="controls">
    <input type="number" min="1" max="100" step="1" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
  </div>
  <div id="boxes"></div>
  Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.
      Размеры самого первого <div> - 30px на 30px.
      Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
      Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
      function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.
*/

const inputRef = document.querySelector('#controls > input[type="number"]');
const createButton = document.querySelector('#controls button[data-create]');
const destroyButton = document.querySelector('#controls button[data-destroy]');
const container = document.getElementById('boxes');

createButton.addEventListener('click', onCreate);
destroyButton.addEventListener('click', onDestroy);

function onCreate() {
  createBoxes(inputRef.value);
}

function onDestroy() {
  container.innerHTML = '';
}


function createBoxes(amount) {

  const existingCount = container.childElementCount;

  const collections = [];

  for(let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.height = `${30 + existingCount * 10 + i*10}px`;
    div.style.width = `${30 + existingCount * 10 + i*10}px`;
    div.style.backgroundColor = getRandomHexColor();
    collections.push(div);
  }

  container.append(...collections);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}