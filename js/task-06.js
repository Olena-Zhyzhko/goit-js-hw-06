const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', (event) => {
    const simbols = inputEl.value.split("").length;
    console.log(simbols === inputEl.dataset.length);
    
    if (simbols === Number(inputEl.dataset.length)) {
        inputEl.classList.toggle("valid"); 
        inputEl.classList.remove("invalid");
    } else {
        if (inputEl.classList.contains("invalid")) {
            inputEl.classList.remove("invalid");
        } 
        inputEl.classList.toggle("invalid");
        inputEl.classList.remove("valid");}
})

