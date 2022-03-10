"use strict";

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
var modalbg = document.querySelector(".bground");
var modalBtn = document.querySelectorAll(".modal-btn");
var formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach(function (btn) {
  return btn.addEventListener("click", launchModal);
});

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
