const categoriesList = document.querySelectorAll(".item");
console.log(`В списке ${categoriesList.length} категории.`);
console.log(categoriesList.lastElementChild);
const headingText = document.getElementsByTagName("h2");


Array.from(headingText).forEach(element => {
 console.log(element.innerText);   
});



console.log(' ');