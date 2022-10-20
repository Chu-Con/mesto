// открытие-закрытие попапа

const popupOpenButton = document.querySelector('.info__open-popup');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-btn');

const popupToggle = function () {
  popup.classList.toggle('popup_opened');
};

popupOpenButton.addEventListener('click', popupToggle);
popupCloseButton.addEventListener('click', popupToggle);

// перезаписать информацию о пользователе

let userInfo = document.querySelector('.info');
let userName = userInfo.querySelector('.info__name');
let userAbout = userInfo.querySelector('.info__occupation');

let popupUserName = popup.querySelector('.popup__text_type_name');
let popupUserAbout = popup.querySelector('.popup__text_type_occupation');
let saveUserInfoButton = popup.querySelector('.popup__save-btn');

function autocompletePopupForms() {
  popupUserName.value = userName.textContent; 
  popupUserAbout.value = userAbout.textContent;
};

autocompletePopupForms();


function editUserInfo(evt) {
  evt.preventDefault();
  userName.textContent = popupUserName.value;
  userAbout.textContent = popupUserAbout.value;
  popupToggle();
};

saveUserInfoButton.addEventListener('click', editUserInfo);

popup.addEventListener('keyup', function(evt) {
  if(evt.keyCode == 13){   
    editUserInfo(evt);
  };
});
//keyCode == 13 соответствует кнопке Enter

// при нажатии на крестик введённые значения не сохраняются
popupCloseButton.addEventListener('click', autocompletePopupForms);