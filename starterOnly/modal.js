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
const closeForm = document.querySelector('.close');

// MODAL EVENTS

// Launch modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Close modal 
closeForm.addEventListener('click', closeModal);

// MODAL FUNCTIONS

// launch modal form
function launchModal() {
  modalbg.classList.add('block');
}

// close modal form
function closeModal() {
  modalbg.classList.remove('block');
}




