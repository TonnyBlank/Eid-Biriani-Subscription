document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let valid = true;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("nameError").textContent = "Please enter your name";
        valid = false;
    }

    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        valid = false;
    }

    let phone = document.getElementById("phone").value.trim();
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits";
        valid = false;
    }

    let password = document.getElementById("password").value.trim();
    let passwordPattern = /^(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long and contain a number";
        valid = false;
    }

    if (valid) {
        alert("Thank you for subscribing! Come to MMUst and get your free Biriani");
    }
});