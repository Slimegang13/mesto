const profileEdit = document.querySelector(".profile__edit");
const popupEdit = document.querySelector(".popup_type_main");
const popups = document.querySelectorAll(".popup");
const popupCloseButtons = document.querySelectorAll(".popup__close");
const buttonSaveProfile = document.querySelector(".popup__button");
const profileName = document.querySelector(".profile__name");
const profileBio = document.querySelector(".profile__bio");
const inputName = document.querySelector(".popup__input_type_name");
const inputBio = document.querySelector(".popup__input_type_bio");
const popupEditForm = document.querySelector(".popup__form");
const elements = document.querySelector(".elements");
const popupPhoto = document.querySelector(".popup_type_photo");
const addPictureButton = document.querySelector(".profile__add");
const popupAddPic = document.querySelector(".popup_type_addpic");
const popupAddPicForm = document.querySelector(".popup__addpic-form");
const popupAddPicInputName = document.querySelector(".popup__addpic-inputname");
const popupAddPicInputLink = document.querySelector(".popup__addpic-inputlink");
const card = document.querySelector("#card").content;
const cardNameinPopup = document.querySelector(".popup__pic-name");
const cardImageinPopup = document.querySelector(".popup__photo-image");
const postName = popupAddPicInputName.value;
const imgLink = popupAddPicInputLink.value;

initialCards.forEach((element) => {
  renderCard(element, elements);
});

function createCard(name, link) {
  const cardBlock = card.querySelector(".elements__block").cloneNode(true);
  const likeButton = cardBlock.querySelector(".elements__like");
  const cardImg = cardBlock.querySelector(".elements__pic");
  const cardName = cardBlock.querySelector(".elements__pic-name");
  const deleteButton = cardBlock.querySelector(".elements__delete-icon");
  cardImg.src = link;
  cardImg.alt = name;
  cardName.textContent = name;
  likeButton.addEventListener("click", likeCard);
  deleteButton.addEventListener("click", deleteCard);
  cardImg.addEventListener("click", () => openCard(link, name));

  return cardBlock;
}

function openCard(link, name) {
  openPopup(popupPhoto);
  cardImageinPopup.src = link;
  cardNameinPopup.textContent = name;
  cardImageinPopup.alt = name;
}

function renderCard(elem, container) {
  container.prepend(createCard(elem.name, elem.link));
}

function handlerSubmitFormAddNewCard(event) {
  event.preventDefault();
  renderCard(
    {
      name: popupAddPicInputName.value,
      link: popupAddPicInputLink.value,
    },
    elements
  );
  closePopup(popupAddPic);
  popupAddPicInputName.value = "";
  popupAddPicInputLink.value = "";
}

popupAddPicForm.addEventListener("submit", handlerSubmitFormAddNewCard);

function likeCard(event) {
  event.target.classList.toggle("elements__like_active");
}

function deleteCard(event) {
  event.target.closest(".elements__block").remove();
}

function openPopup(element) {
  element.classList.add("popup_opened");
}

function closePopup(element) {
  element.classList.remove("popup_opened");
}

popups.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (event.target === event.currentTarget) {
      closePopup(element);
    }
  });
});

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const currentPopup = button.closest(".popup");
    closePopup(currentPopup);
  });
});

profileEdit.addEventListener("click", function () {
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
});

function profileFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  closePopup(popupEdit);
}

popupEditForm.addEventListener("submit", profileFormHandler);

addPictureButton.addEventListener("click", function () {
  openPopup(popupAddPic);
});
