const profileEdit = document.querySelector('.profile__edit');
const popupEdit = document.querySelector('.popup_type_main'); 
const popups = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.popup__close');
const popupSave = document.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const inputName = document.querySelector('.popup__input_type_name');
const inputBio = document.querySelector('.popup__input_type_bio');
const formElement = document.querySelector('.popup__form');
const elements = document.querySelector('.elements');
const popupPhoto = document.querySelector('.popup_type_photo');
const addPictureButton = document.querySelector('.profile__add');
const popupAddPic = document.querySelector('.popup_type_addpic');
const popupAddPicForm = document.querySelector('.popup__addpic-form')
const popupAddPicInputName = document.querySelector('.popup__addpic-inputname');
const popupAddPicInputLink = document.querySelector('.popup__addpic-inputlink');
const card = document.querySelector('#card').content;
const cardName = document.querySelector('.popup__pic-name');
const cardImg = document.querySelector('.popup__photo-image');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },

];


initialCards.forEach(element => {
    loadCards(element);
})

function loadCards (data) {
    const cardBlock = card.querySelector('.elements__block').cloneNode(true);
    cardBlock.querySelector('.elements__pic').src = data.link;
    cardBlock.querySelector('.elements__pic-name').textContent = data.name;
    elements.append(cardBlock);
    }
    
    
function openPopup(element) {
    element.classList.add('popup_opened');
}

function  closePopup(element)
{
    element.classList.remove('popup_opened');
}

popups.forEach(element => {
    element.addEventListener('click', function(event){
        if (event.target === event.currentTarget){
            closePopup(element);
        }
    })
})

popupCloseButtons.forEach(button => {
    button.addEventListener('click', function(event){
      const currentPopup = button.closest('.popup');
      closePopup(currentPopup);
    })
})

profileEdit.addEventListener('click', function () {
    openPopup(popupEdit);
    inputName.value = profileName.textContent;
    inputBio.value = profileBio.textContent;
});


// Отправка формы в попапе
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileBio.textContent = inputBio.value;
    closePopup(popupEdit);
}

formElement.addEventListener('submit', formSubmitHandler);

addPictureButton.addEventListener('click', function () {
    openPopup(popupAddPic);
})


// Функция добавления фото
function addCard(event) {
    event.preventDefault();
    const postName = popupAddPicInputName.value;
    const imgLink = popupAddPicInputLink.value;
    const cardBlock = card.querySelector('.elements__block').cloneNode(true);
    cardBlock.querySelector('.elements__pic').src = imgLink;
    cardBlock.querySelector('.elements__pic-name').textContent = postName;
    elements.prepend(cardBlock)
    closePopup(popupAddPic);
}


popupAddPicForm.addEventListener('submit', addCard)

elements.addEventListener('click', (event)=> {
    if (event.target.classList.contains('elements__delete-icon')){
        event.target.closest('.elements__block').remove();
    }
   else  if (event.target.classList.contains('elements__like')){
    event.target.classList.toggle('elements__like_active');
    }
   else if (event.target.classList.contains('elements__pic')) {
    openPopup(popupPhoto)
cardImg.src = event.target.src;
const name = event.target.parentNode.childNodes[5].childNodes[1].textContent;
cardName.textContent = name;
    }
 
})


