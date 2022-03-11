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
const locationsBlock = formData[5];
const termsAndConditions = document.getElementById('checkbox1');
const submitButton = document.querySelector(".btn-submit");

// ---------------------- VARIABLES ----------------------

let registeredFirstName = '';
let registeredLastName = '';
let registeredEmail = '';
let registeredBirthDate = '';
let registeredAmountOfTournaments = '';
let registeredLocation = '';
let registeredTerms = '';
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

// Loop Event Listeners radiobuttons
for (let i = 0; i < locationInputs.length; i++){
  locationInputs[i].addEventListener('change', ($event) =>{
    if($event.target.checked){
      registeredLocation = locationInputs[i].value;
      return registeredLocation;
    }
  })
}

// Submit form
submitButton.addEventListener('click', (data) =>{
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
  
  // Run validations
  validateInput(firstName, 'registeredFirstName', 0, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  validateInput(lastName, 'registeredLastName', 1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  validateInput(emailAddress, 'registeredEmail', 2, 'Vous devez entrer une adresse email valide');
  validateInput(birthdate, 'registeredBirthDate', 3, 'Vous devez entrer votre date de naissance.');
  validateInput(amountOfTournaments, 'registeredAmountOfTournaments', 4, 'Vous devez entrer un numero');
  validateRadioButtons();
  validateCheckbox();

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

// Input fields Event validation
function validateInput(inputName, valueVariable, formDataNumber, errorMessage){
    if(inputName.checkValidity()){
      valueVariable = inputName.value;
      removeError(formDataNumber);
      return valueVariable;
    } else{
      showError(formDataNumber, errorMessage);
    }
}

// Radio Buttons location validation
function validateRadioButtons(){
  let radioValidated = 'false';
  for (let i = 0; i < locationInputs.length; i++){
    if (locationInputs[i].checked){
      radioValidated = 'true';
    }
  }
  if (radioValidated === 'false'){
    showError(5, 'Vous devez choisir une option.');
  } else{
    removeError(5);
  }
}  

// Checkbox Terms & Conditions validation
function validateCheckbox(){
  if (termsAndConditions.checked){
    removeError(6);
  } else{
    showError(6, 'Vous devez vérifier que vous acceptez les termes et conditions.');
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




