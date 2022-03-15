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
const formContent = document.querySelector(".content");
const modalBody = document.querySelector(".modal-body");

const form = document.getElementsByTagName('form')[0];
const closeForm = document.querySelector('.close');
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const emailAddress = document.getElementById('email');
const birthdate = document.getElementById('birthdate');
const amountOfTournaments = document.getElementById('quantity');
const locationInputs = document.querySelectorAll('[type="radio"]');
const locationsBlock = formData[5];
const termsAndConditions = document.getElementById('checkbox1');
const newsletter = document.getElementById('checkbox2');
const submitButton = document.getElementById("submit-button");
const closeFormButton = document.getElementById("close-form");

// ---------------------- MODAL EVENTS ----------------------

// Launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal / Form
closeForm.addEventListener('click', closeModal);
closeFormButton.addEventListener('click', closeModal);
// Form fields Blur events
blurEvent(firstName, 0, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
blurEvent(lastName, 1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
blurEvent(emailAddress, 2, 'Vous devez entrer une adresse email valide');
blurEvent(birthdate, 3, 'Vous devez entrer votre date de naissance.');
blurEvent(amountOfTournaments, 4, 'Vous devez entrer un numero');

// Loop Event Listeners radiobuttons
for (let i = 0; i < locationInputs.length; i++){
  locationInputs[i].addEventListener('change', ($event) =>{
    // @ts-ignore
    if($event.target.checked){
      // @ts-ignore
      return locationInputs[i].value; //registered location
    }
  })
}

// Submit form
submitButton.addEventListener('click', ($event) =>{
  $event.preventDefault();
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
  const registeredFirstName = validateInput(firstName, 0, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
  formResults.prenom = registeredFirstName;
  const registeredLastName = validateInput(lastName, 1, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
  formResults.nomFamille = registeredLastName;
  const registeredEmail = validateInput(emailAddress, 2, 'Vous devez entrer une adresse email valide');
  formResults.mail = registeredEmail;
  const registeredBirthDate = validateInput(birthdate, 3, 'Vous devez entrer votre date de naissance.');
  formResults.DatedeNaissance = registeredBirthDate;
  const registeredAmountOfTournaments = validateInput(amountOfTournaments, 4, 'Vous devez entrer un numero');
  formResults.montantTournoi = registeredAmountOfTournaments;
  const registeredLocation = validateRadioButtons();
  formResults.endroitTournoi = registeredLocation;
  const registeredTerms = validateCheckbox();
  formResults.conditions = registeredTerms;
  // @ts-ignore
  formResults.newsletter = newsletter.value;

  if (registeredFirstName !== undefined && registeredLastName !== undefined && registeredEmail !== undefined && registeredBirthDate !== undefined && registeredAmountOfTournaments !== undefined && registeredLocation !== undefined && registeredTerms !== undefined){
    showConfirmationMessage();
    return formResults;
  }
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
function blurEvent(inputName, formDataNumber, errorMessage){
  inputName.addEventListener('blur', () => {
    validateInput(inputName, formDataNumber, errorMessage);
  })
}

// Input fields Event validation
function validateInput(inputName, formDataNumber, errorMessage){
    if(inputName.checkValidity()){
      removeError(formDataNumber);
      return inputName.value; //registered input value
    } 
    showError(formDataNumber, errorMessage);
    
}

// Radio Buttons location validation
function validateRadioButtons(){
  let radioValidated = 'false';
  for (let i = 0; i < locationInputs.length; i++){
    // @ts-ignore
    if (locationInputs[i].checked){
      radioValidated = 'true';
      removeError(5);
      // @ts-ignore
      return locationInputs[i].value;
    }
  }
  if (radioValidated === 'false'){
    showError(5, 'Vous devez choisir une option.');
    return;
  } 
}  

// Checkbox Terms & Conditions validation
function validateCheckbox(){
  // @ts-ignore
  if (termsAndConditions.checked){
    removeError(6);
    return 'true';
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

// Remove form error message when validated
function removeError(formDataNumber){
  if (typeof formDataNumber === 'number'){
    let errorMessageElement = formData.item(formDataNumber);
    errorMessageElement.removeAttribute('data-error');
    errorMessageElement.removeAttribute('data-error-visible');
    return errorMessageElement;
  }
}

// Show confirmation message after form submit is valid
function showConfirmationMessage(){
  modalBody.removeChild(form);
  submitButton.classList.add('select-hide');
  closeFormButton.classList.remove('select-hide');
  const confirmationMessage = document.createElement('h3');
  confirmationMessage.textContent = 'Merci ! Votre réservation a été reçue.';
  confirmationMessage.classList.add('confirmation-headline');
  modalBody.appendChild(confirmationMessage);
  // @ts-ignore
  formContent.style.paddingBottom = '20px';
}




