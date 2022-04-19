const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i += 1) {
  const listEl = document.createElement("li");
  listEl.textContent = ingredients[i];
  listEl.classList.add('item');
  console.log(listEl);
  const navEl = document.querySelector('#ingredients');
  navEl.appendChild(listEl);
}