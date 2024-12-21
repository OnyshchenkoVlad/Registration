const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const showPassword = document.getElementById('showPassword');
const submitButton = document.getElementById('submitButton');

const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

const validateName = (name) => /^[A-ZА-ЯІЇЄҐ][a-zа-яієїґ]*$/.test(name);
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password) => {
    return (
        password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*]/.test(password)
    );
};

const checkValidity = () => {
    let isValid = true;

    if (!validateName(firstName.value)) {
        firstName.classList.add('invalid');
        firstNameError.textContent = "Ім'я має починатися з великої літери.";
        firstNameError.style.display = 'block';
        isValid = false;
    } else {
        firstName.classList.remove('invalid');
        firstNameError.style.display = 'none';
    }

    if (!validateName(lastName.value)) {
        lastName.classList.add('invalid');
        lastNameError.textContent = "Прізвище має починатися з великої літери.";
        lastNameError.style.display = 'block';
        isValid = false;
    } else {
        lastName.classList.remove('invalid');
        lastNameError.style.display = 'none';
    }

    if (!validateEmail(email.value)) {
        email.classList.add('invalid');
        emailError.textContent = "Неправильний формат електронної пошти.";
        emailError.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('invalid');
        emailError.style.display = 'none';
    }

    if (!validatePassword(password.value)) {
        password.classList.add('invalid');
        passwordError.textContent = "Пароль має містити 8 символів.";
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('invalid');
        passwordError.style.display = 'none';
    }

    submitButton.disabled = !isValid;
};

firstName.addEventListener('input', checkValidity);
lastName.addEventListener('input', checkValidity);
email.addEventListener('input', checkValidity);
password.addEventListener('input', checkValidity);

showPassword.addEventListener('change', () => {
    password.type = showPassword.checked ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Дані успішно надіслані!');
});
