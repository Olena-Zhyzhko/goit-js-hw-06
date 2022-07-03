const inputEl = document.querySelector('#font-size-control');


inputEl.addEventListener('input', (event) => {
    const textEl = document.querySelector('#text');
    textEl.style.fontSize = `${inputEl.value}px`;
})