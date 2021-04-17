const categoriesList = categories.children;
console.log(`В списке ${categoriesList.length} категории.`);
for (let i = 0; i < categoriesList.length; i += 1) {
    const listElement = categoriesList[i];
    const headingText = listElement.querySelector("h2");
    const categoriesQuantity = listElement.querySelector("ul").children.length;
    console.log(`
    Категория: ${headingText.innerText}
    Количество элементов: ${categoriesQuantity}
    `);
};
