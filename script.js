

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("leadForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const country = document.getElementById("country").value;

        let isValid = true;
        let errorMessage = "";

        if (name.length < 3) {
            isValid = false;
            errorMessage += "❌ Name must be at least 3 characters long.\n";
        }

     
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            isValid = false;
            errorMessage += "❌ Enter a valid email address.\n";
        }

       
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phonePattern.test(phone)) {
            isValid = false;
            errorMessage += "❌ Enter a valid phone number (10-15 digits).\n";
        }

   
        if (country === "Select Country Preference") {
            isValid = false;
            errorMessage += "❌ Please select a country.\n";
        }

        if (isValid) {
            alert("✅ Form submitted successfully!");
            form.reset(); 
        } else {
            alert(errorMessage);
        }
    });
});
