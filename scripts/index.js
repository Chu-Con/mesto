const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-btn');

let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__occupation');

let form = popup.querySelector('.input');
let popupUserName = popup.querySelector('.input__name');
let popupUserAbout = popup.querySelector('.input__occupation');


// открыть попап
const popupOpenEvent = function () {
  popup.classList.add('popup_opened');
  // вставить данные при открытии
  popupUserName.value = userName.textContent;
  popupUserAbout.value = userAbout.textContent;
};

// закрыть попап
const popupCloseEvent = function () {
  popup.classList.remove('popup_opened');
  // при нажатии на крестик не сохранять введенные значения
  popupUserName.value = '';
  popupUserAbout.value = '';
};

// слушатели событий - по клику на кнопку редактировать или крестик
popupOpenButton.addEventListener('click', popupOpenEvent);
popupCloseButton.addEventListener('click', popupCloseEvent);

// изменить информацию о пользователе
function editUserInfo (evt) {
  evt.preventDefault();
  userName.textContent = popupUserName.value;
  userAbout.textContent = popupUserAbout.value;

  popup.classList.remove('popup_opened');
  // или вызов функции
  // popupCloseEvent();
};

// слушатель нужно навешивать на тег form
form.addEventListener('submit', editUserInfo);