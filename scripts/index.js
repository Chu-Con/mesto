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
  }
];

const buttonOpenPopup = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close-btn');

let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__occupation');

let form = popup.querySelector('.input');
let popupUserName = popup.querySelector('.input__text_type_name');
let popupUserAbout = popup.querySelector('.input__text_type_occupation');


// открыть попап
const eventOpenPopup = function () {
  popup.classList.add('popup_opened');
  // вставить данные при открытии
  popupUserName.value = userName.textContent;
  popupUserAbout.value = userAbout.textContent;
};

// закрыть попап
const eventClosePopup = function () {
  popup.classList.remove('popup_opened');
};

// слушатели событий - по клику на кнопку редактировать или крестик
buttonOpenPopup.addEventListener('click', eventOpenPopup);
buttonClosePopup.addEventListener('click', eventClosePopup);

// изменить информацию о пользователе
function editUserInfo (evt) {
  evt.preventDefault();
  userName.textContent = popupUserName.value;
  userAbout.textContent = popupUserAbout.value;

  eventClosePopup();
};

// слушатель нужно навешивать на тег form
form.addEventListener('submit', editUserInfo);