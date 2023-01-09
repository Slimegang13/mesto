let profileEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let inputName = document.querySelector('.popup__input_name');
let inputBio = document.querySelector('.popup__input_bio');

profileEdit.addEventListener('click', function () {

    popup.classList.add('popup_opened');

});

popupClose.addEventListener('click', function () {

    popup.classList.remove('popup_opened');

});

let formElement = document.querySelector('.popup__form');
function formSubmitHandler(evt) {
    evt.preventDefault();
    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_bio');
    profileName.textContent = inputName.value;
    profileBio.textContent = inputBio.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);







