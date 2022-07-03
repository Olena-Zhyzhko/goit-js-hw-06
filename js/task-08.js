const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        window.alert(`Всі поля форми мають бути заповнені`);
    } else {
        // Розмістила в цій частині, для того, щоб не скидались вже заповненні поля.
        const formData = { email, password };
        console.log(formData);

        event.currentTarget.reset();
    }

    
}
