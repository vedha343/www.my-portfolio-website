function validateForm() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const organization = document.getElementById('organization').value.trim();

    // Regular expression patterns
    const namePattern = /^[A-Za-z\s]+$/;
    const mobilePattern = /^[0-9]{10}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Name validation
    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    // Mobile number validation
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    // Email validation
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Organization validation
    if (organization === "") {
        alert("Please enter your organization.");
        return false;
    }

    // If all validations pass
    return true;
}
