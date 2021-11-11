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
const validationMessage = document.querySelector(".formValidation");
const closeForm = document.querySelector(".close");
const form = document.querySelector('form[name="reserve"]');


// fermer le formulaire

closeForm.addEventListener('click', e => {
  modalbg.style.display = "none";
  validationMessage.style.display = "none";
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
const allInput = form.querySelectorAll('input');


submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  allInput.forEach(input => {
    let error = input.closest(".formData").querySelector('.error');
    if (!input.validity.valid){
      error.classList.add('show');
    }
  })

});










