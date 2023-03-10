
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstNameInput = document.getElementById("firstName");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const phoneInput = document.getElementById("phone");

    const formData = {
        firstName: firstNameInput.value,
        password: passwordInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
    }

    const errors = {
        firstName: false,
        password: false,
        email: false,
        phone: false,
    }

    const firstNameError = document.getElementById('firstNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const phoneError = document.getElementById('phoneError');

    firstNameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';
    phoneError.style.display = 'none';


    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/
    const passwordRegex = /^\d{3} Rue [A-Z][a-z]+ [A-Z][a-z]+,[ ]\d{5} [A-Z][a-z]+ [A-Z][a-z]+/;

    
    if (!formData.firstName || !nameRegex.test(formData.firstName)) {
        errors.firstName = true;
        firstNameError.style.display = 'block';
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = true;
        emailError.style.display = 'block';
    }
    if (!formData.password || !passwordRegex.test(formData.password)) {
        errors.password = true;
        passwordError.style.display = 'block';
    }
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
        errors.phone = true;
        phoneError.style.display = 'block';
    }

    if (!Object.values(errors).includes(true)) {
    console.log(formData)
    contactForm.reset()
    }
})



