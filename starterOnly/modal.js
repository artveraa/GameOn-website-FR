function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const submitBtn = document.querySelector(".btn-submit");
const closeBtn = document.querySelectorAll(".btn-close");
const closeForm = document.querySelectorAll(".close");
const validationMessage = document.querySelector(".formValidation");
const form = document.querySelector('form[name="reserve"]');


// fermer le formulaire

closeForm.forEach(close => {
close.addEventListener('click', e => {
        modalbg.style.display = "none";
        validationMessage.style.display = "none";
    })
});

closeBtn.forEach(closeBtn => {
    closeBtn.addEventListener("click", e => {
        modalbg.style.display = "none";
        validationMessage.style.display = "none";
    })
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

//messages d'erreurs par champs

const prenom = form.querySelector('input[name="first"]');
const nom = form.elements["last"];
const mail = form.elements["email"];
const date = form.elements["birthdate"];
const tournois = form.elements["quantity"];
const city = form.querySelector('input[name="location"]:checked');


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    formData.forEach(formData => {
        formData.querySelectorAll('input').forEach(input => {
            const err = input.closest(".formData").querySelector(".error");
            if (!input.validity.valid) {

                    err.classList.add('show');

            } else {

                    err.classList.remove("show");

            }
        })
    })

    if (form.checkValidity()) {
        modalbg.style.display = "none";
        validationMessage.style.display = "block";
    }

});










