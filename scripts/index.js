let profileEdit = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let popupSave = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileBio = document.querySelector('.profile__bio');
let inputName = document.querySelector('.popup__input_type_name');
let inputBio = document.querySelector('.popup__input_type_bio');
let formElement = document.querySelector('.popup__form');


// Открытие Popup 
profileEdit.addEventListener('click', function () {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputBio.value = profileBio.textContent;
});

// Закрытие Popup
popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

// Отправка формы в попапе
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileBio.textContent = inputBio.value;
    popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler);







