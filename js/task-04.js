const counterValue = {
    value: 0,
    decrement() {
        this.value -= 1;
    },
    
    increment() {
        this.value += 1;
    },
};


const counterValueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    counterValueEl.textContent = counterValue.value;
});


incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    counterValueEl.textContent = counterValue.value;
});
