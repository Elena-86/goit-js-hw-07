const refs = {
    input: document.querySelector("input#name-input"),
    nameOutput: document.querySelector("span#name-output"),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    event.preventDefault();
        if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = "незнакомец";
    }
        else {
        refs.nameOutput.textContent = event.currentTarget.value;
        };
    
}