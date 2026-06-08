const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const userMessage = document.getElementById("message").value.trim();

    if (name === "" ||
        email === "" ||
        userMessage === ""
    ) 
    { message.textContent =
        "Please complete all fields.";
        return;
    }

    if (!email.includes("@")) {
        message.textContent =
            "Please enter a valid email.";
        return;
    }

    message.textContent =
        "Thank you! Your message has been submitted.";

    form.reset();
});