const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

const listEl = ingredients.map(ingredient => {
  const elementEl = document.createElement('li');
  elementEl.textContent = ingredient;
  elementEl.classList.add('item');

  return elementEl;
})

ingredientsList.append(...listEl);
console.log(ingredientsList);
