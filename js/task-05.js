const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

outputEl.textContent = 'Anonymus';
inputEl.addEventListener('input', (event) => {
 if (inputEl.value === '') {
     outputEl.textContent = 'Anonymus';
 } else {
         outputEl.textContent = event.currentTarget.value.trim();
}
})