const validationInputEl = document.querySelector("#validation-input");




const makeInputValidation = function (event) {
    if (Number(validationInputEl.dataset.length) === event.target.value.length) {
        
        validationInputEl.classList.remove("invalid");
        validationInputEl.classList.add("valid");
        
        console.log("valid");
    } else {
       
        validationInputEl.classList.remove("valid");
        validationInputEl.classList.add("invalid");
       
        console.log("invalid");
    }
};

validationInputEl.addEventListener('blur',makeInputValidation);