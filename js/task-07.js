const inputElement = document.querySelector("input#font-size-control");
const textEl = document.querySelector("span#text");

const onInputChange = function (event) {
    textEl.style.fontSize = event.currentTarget.value + 'px';
}

inputElement.addEventListener("input", onInputChange);
