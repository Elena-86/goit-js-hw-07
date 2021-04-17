const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsContainerEl = document.querySelector("ul#ingredients");

const makeListContent = ingredients => {
  return ingredients.map(ingredient => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;

    return listEl;
  });

};

const elements = makeListContent(ingredients);
ingredientsContainerEl.append(...elements);
console.log(ingredientsContainerEl);