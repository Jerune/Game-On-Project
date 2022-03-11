// ---------------------- Edit Navigation ----------------------
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// ---------------------- DOM Elements ----------------------
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// FORM
const closeForm = document.querySelector('.close');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const emailAddress = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const amountOfTournaments = document.getElementById('quantity');
const locationInputs = document.querySelectorAll('[type="radio"]');
const termsAndConditions = document.getElementById('checkbox1');
const submitButton = document.querySelector(".btn-submit");

// ---------------------- MODAL EVENTS ----------------------

// Launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal 
closeForm.addEventListener('click', closeModal);
// Form fields 
blurEvent(firstName, 'registeredFirstName', 0, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
blurEvent(lastName, 'registeredLastName', 1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
blurEvent(emailAddress, 'registeredEmail', 2, 'Vous devez entrer une adresse email valide');
blurEvent(birthdate, 'registeredBirthDate', 3, 'Vous devez entrer votre date de naissance.');
blurEvent(amountOfTournaments, 'registeredAmountOfTournaments', 4, 'Vous devez entrer un numero');

// Submit form
submitButton.addEventListener('click', () =>{
  let formResults = {
    prenom : '',
    nomFamille : '',
    mail: '',
    DatedeNaissance: '',
    montantTournoi: '',
    endroitTournoi: '',
    conditions: '',
    newsletter: ''
  };

});

// ---------------------- MODAL FUNCTIONS ----------------------

// launch modal form
function launchModal() {
  modalbg.classList.add('block');
}

// close modal form
function closeModal() {
  modalbg.classList.remove('block');
}
// Event Listener for Blur input fields
function blurEvent(inputName, valueVariable, formDataNumber, errorMessage){
  inputName.addEventListener('blur', () => {
    validateInput(inputName, valueVariable, formDataNumber, errorMessage);
  })
}

// Input fields Event Listener & validation
function validateInput(inputName, valueVariable, formDataNumber, errorMessage){
    if(inputName.checkValidity()){
      let valueVariable = inputName.value;
      removeError(formDataNumber);
    } else{
      showError(formDataNumber, errorMessage);
    }
}

// Show form error message
function showError(formDataNumber, errorMessage){
  if (typeof formDataNumber === 'number' && typeof errorMessage === 'string'){
    let errorMessageElement = formData.item(formDataNumber);
    errorMessageElement.setAttribute('data-error', errorMessage);
    errorMessageElement.setAttribute('data-error-visible', 'true');
    return errorMessageElement;
  }
}

function removeError(formDataNumber){
  if (typeof formDataNumber === 'number'){
    let errorMessageElement = formData.item(formDataNumber);
    errorMessageElement.removeAttribute('data-error');
    errorMessageElement.removeAttribute('data-error-visible');
    return errorMessageElement;
  }
}


// ---------------------- FORM VALIDATION ----------------------




