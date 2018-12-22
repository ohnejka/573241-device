var contactUs = document.querySelector(".button-contact-us");
var contactPopup = document.querySelector(".modal-contact-us");
var closePopup = document.querySelector(".close-button");
var nameField = contactPopup.querySelector("[name=letter-name]");
var form = contactPopup.querySelector(".contact-us-form");
var emailField = contactPopup.querySelector("[name=letter-email]");
var textField = contactPopup.querySelector("[name=letter-content]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("nameField");
  storageEmail = localStorage.getItem("emailField");
} catch (err) {
  isStorageSupport = false;
}

contactUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.add("popup-show");

  if (storageName) {
    nameField.value = storageName;
    emailField.focus();
  }

  if (storageName && storageEmail) {
    nameField.value = storageName;
    emailField.value = storageEmail;
    textField.focus();
  }

  nameField.focus();
});

closePopup.addEventListener("click", function(evt) {
  evt.preventDefault();
  contactPopup.classList.remove("popup-show");
  contactPopup.classList.remove("popup-error");
});

form.addEventListener("submit", function(evt) {
  if (!nameField.value || !emailField.value || !textField.value) {
    evt.preventDefault();
    contactPopup.classList.remove("popup-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", nameField);
      localStorage.setItem("email", emailField);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (contactPopup.classList.contains("popup-show")) {
      contactPopup.classList.remove("popup-show");
    }
  }
});

var findUs = document.querySelector(".contacts-show-map");
var mapPopup = document.querySelector(".modal-show-map");
var mapClose = mapPopup.querySelector(".close-button");

findUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("popup-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("popup-show")) {
      mapPopup.classList.remove("popup-show");
    }
  }
});
