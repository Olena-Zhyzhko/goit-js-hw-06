const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

outputEl.textContent = inputEl.value; 

outputEl.textContent = 'Anonymus';
inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value.trim();
 if (inputEl.value === '') {
     outputEl.textContent = 'Anonymus'
};
})