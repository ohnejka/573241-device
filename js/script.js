var contactUs = document.querySelector('.button-contact-us');
var contactPopup = document.querySelector('.modal-contact-us');
var closePopup = document.querySelector('.close-button');
var nameField = contactPopup.querySelector('[name=letter-name]');
var form = contactPopup.querySelector('.contact-us-form');
var emailField = contactPopup.querySelector('[name=letter-email]');
var textField = contactPopup.querySelector('[name=letter-content]');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

try {
	storageName = localStorage.getItem('nameField');
	storageEmail = localStorage.getItem('emailField');
} catch (err) {
	isStorageSupport = false;
}

contactUs.addEventListener('click', function(evt) {

	evt.preventDefault();
	contactPopup.classList.add('popup-show');

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

closePopup.addEventListener('click', function (evt) {
	evt.preventDefault();
	contactPopup.classList.remove('popup-show');
	contactPopup.classList.remove('popup-error');

});


form.addEventListener('submit', function(evt) {

	if(!nameField.value || !emailField.value || !textField.value) {
		evt.preventDefault();
		contactPopup.classList.remove('popup-error');
		contactPopup.offsetWidth = contactPopup.offsetWidth;
		contactPopup.classList.add('popup-error');
	} else {

		if(isStroageSupport) {
			localStorage.setItem('name', nameField);
			localStorage.setItem('email', emailField);
		}
		
	}
});

