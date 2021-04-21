const categoriesList = document.querySelector("ul#categories").children;
 
console.log(`В списке ${categoriesList.length} категории.`);

function getcategoriesQuantityList(categoriesList) {
   Array.from(categoriesList).forEach(category => {
      const headingText = category.firstElementChild;
        const categoriesQuantity = category.lastElementChild.childElementCount;
 console.log(`
  Категория: ${headingText.innerText}
  Количество элементов: ${categoriesQuantity}
    `);
    });
}

getcategoriesQuantityList(categoriesList);
