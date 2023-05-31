
const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

function validateForm(event) {
    const errorMessages = document.querySelectorAll(".form-error");
    let isValid = true;

    errorMessages?.forEach((errorMessage) => {
        errorMessage.innerHTML = "";
    });

    if (!checkLength(fullName.value, 4)) {
        isValid = false;
        addErrorMessage("Please enter your full name.", fullName);
    }

    if (!validateEmail(email.value)) {
        isValid = false;
        addErrorMessage("Please enter a valid email address.", email);
    }

    if (!checkLength(message.value, 24)) {
        isValid = false;
        addErrorMessage("Please enter a message (at least 25 characters).", message);
    }

    if (!checkLength(subject.value, 14)) {
        isValid = false;
        addErrorMessage("Please enter a subject (at least 15 characters).", subject);
    }

    if (isValid) {
        console.log("IT WORKS");
        return true;
    }
}

function addErrorMessage(message, field) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("form-error");
    errorMessage.textContent = message;
    field.classList.add("error");
    field.style.borderColor = "red";
    field.parentNode.insertBefore(errorMessage, field.nextElementSibling);
}

function checkLength(value, len) {
    return value.trim().length >= len;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

let submitButton = document.querySelector("input[type='submit']");

submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const confDialog = document.querySelector(".confirmDialog");
    if (validateForm()) {
        confDialog.style.display = "block";
        form.style.display = "none";
        console.log("form complete");
    } else {
        console.log("Complete form");
        event.preventDefault();
    }
});

fullName.addEventListener("input", () => {
    if (fullName.classList.contains("error")) {
        if (checkLength(fullName.value, 4)) {
            fullName.classList.remove("error");
            const errorMessage = fullName.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains("form-error")) {
                errorMessage.parentNode.removeChild(errorMessage);
            }
            fullName.style.borderColor = "";
        }
    }
});

subject.addEventListener("input", () => {
    if (subject.classList.contains("error")) {
        if (checkLength(subject.value, 14)) {
            subject.classList.remove("error");
            const errorMessage = subject.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains("form-error")) {
                errorMessage.parentNode.removeChild(errorMessage);
            }
            subject.style.borderColor = "";
        }
    }
});

email.addEventListener("input", () => {
    if (email.classList.contains("error")) {
        if (validateEmail(email.value)) {
            email.classList.remove("error");
            const errorMessage = email.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains("form-error")) {
                errorMessage.parentNode.removeChild(errorMessage);
            }
            email.style.borderColor = "";
        }
    }
});

message.addEventListener("input", () => {
    if (message.classList.contains("error")) {
        if (checkLength(message.value, 24)) {
            message.classList.remove("error");
            const errorMessage = message.nextElementSibling;
            if (errorMessage && errorMessage.classList.contains("form-error")) {
                message.parentNode.removeChild(errorMessage);
            }
            message.style.borderColor = "";
        }
    }
});