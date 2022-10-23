const popupOpenButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-btn');

let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__occupation');

let form = popup.querySelector('.input');
let popupUserName = popup.querySelector('.input__name');
let popupUserAbout = popup.querySelector('.input__occupation');

// автозаполнение формы
function autocompletePopupForms() {
  userName.textContent = popupUserName.value;
  userAbout.textContent = popupUserAbout.value;
};

// открыть попап
const popupOpenEvent = function () {
  popup.classList.add('popup_opened');
  autocompletePopupForms();
  // при открытии попапа предполагается, что форма автозаполняется
};

// закрыть попап
const popupCloseEvent = function () {
  popup.classList.remove('popup_opened');
};

// слушатели событий - по клику на кнопку редактировать или крестик
popupOpenButton.addEventListener('click', popupOpenEvent);
popupCloseButton.addEventListener('click', popupCloseEvent);

// изменить информацию о пользователе

function editUserInfo (evt) {
  evt.preventDefault();
  autocompletePopupForms();

  popupCloseEvent();
};

// слушатель нужно навешивать на тег form
form.addEventListener('submit', editUserInfo);


// НЕ РАБОТАЕТ:
// 1. При первом открытии форма не заполнена
// 2. При первом закрытии незаполненные поля формы "обнуляют" значения или сохраняют пустые
// 3. При закрытии через крестик и новом открытии несохраненные данные в форме остаются
// 4. При последующих открытиях форма зааполена последними введенными данными, не данными со страницы
