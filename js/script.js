const menuButton = document.querySelector('.menu-button');
const navbar = document.querySelector('.navbar');

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.getElementById('registerButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const password = document.getElementById('password').value.trim();
    let errors = [];

    
    document.getElementById('errorMessages').innerHTML = '';

 
    if (!firstName) {
        errors.push("First name is required");
    }
    if (!lastName) {
        errors.push("Last name is required");
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errors.push("Please enter a valid email");
    }
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
        errors.push("Phone number must be 10 digits");
    }
    if (!password || password.length < 8) {
        errors.push("Password must be at least 8 characters");
    }

  
    if (errors.length > 0) {
        const errorContainer = document.getElementById('errorMessages');
        errorContainer.style.color = "red";
        errorContainer.style.marginTop = "20px";
        errors.forEach(function(error) {
            const errorElement = document.createElement('div');
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
    } else {
        console.log({
            firstName,
            lastName,
            email,
            phoneNumber,
            password
        });
    }
});