const inputEl = document.querySelector('#validation-input');

console.log(inputEl.value);


inputEl.addEventListener('input', (event) => {
    inputEl.addEventListener('blur', (event) => {
        const simbols = inputEl.value.split("").length;
        console.log(simbols);
        
        if (simbols === 6) {
        inputEl.classList.add("valid");
    } else { inputEl.classList.add("invalid");}
})
})

