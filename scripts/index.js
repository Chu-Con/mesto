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

// добавить карточки "из коробки" при загрузке страницы 
const container = document.querySelector('.gallery');
const postTemplate = document.querySelector('#post-template');

const render = () => {
  initialCards.forEach(Card =>{
    const postElement = createCardNode(Card.name, Card.link);
    container.append(postElement);
  })
}

const createCardNode = (name, link) => {
  const postElement = postTemplate.content.cloneNode(true);

  postElement.querySelector('.post__name').textContent = name;
  postElement.querySelector('.post__photo').src = link;

  // ставить лайк
  const postLike = postElement.querySelector('.post__like-button');
  postLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('post__like-button_active');
  });

  return postElement;
}

render();

//РЕДАКТИРОВАТЬ ПРОФИЛЬ////////////////////////////////////////////////////


const buttonOpenPopup = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close-btn');

let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__occupation');

let form = popup.querySelector('.input');
let popupUserName = popup.querySelector('.input__text_type_name');
let popupUserAbout = popup.querySelector('.input__text_type_occupation');


// подумать над названием функций openPopupEvent и closePopupEvent
// открыть попап РЕДАКТИРОВАТЬ ПРОФИЛЬ
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

form.addEventListener('submit', editUserInfo);


//НОВОЕ МЕСТО/////////////////////////////////////////////////////////////////

// const btnAddPost= document.querySelector('.profile__add-button');
// const placePopup = document.querySelector('.place-popup');
// const btnExitAddPost = placePopup.querySelector('.popup__close-btn');

// let placeName = document.querySelector('.post__name');

// // let form = popup.querySelector('.input');
// let inputPlaceName = placePopup.querySelector('.input__text_type_place');
// let inputPlaceLink = placePopup.querySelector('.input__text_type_link');

// // открыть попап НОВОЕ МЕСТО
// const evtOpenPopup = function () {
//   placePopup.classList.add('popup_opened');
// };

// // закрыть попап 
// const evtClosePopup = function () {
//   placePopup.classList.remove('popup_opened');
// };

// // слушатели событий - по клику на кнопку добавить или крестик
// btnAddPost.addEventListener('click', evtOpenPopup);
// btnExitAddPost.addEventListener('click', evtClosePopup);


const btnAddPost= document.querySelector('.profile__add-button');
const placePopup = document.querySelector('.place-popup');
const btnExitAddPost = placePopup.querySelector('.popup__close-btn');

let placeName = document.querySelector('.post__name');
let placeImage = document.querySelector('.post__photo');


let inputPlaceName = placePopup.querySelector('.input__text_type_place');
let inputPlaceLink = placePopup.querySelector('.input__text_type_link');

// открыть попап
const evtOpenPopup = function () {
  placePopup.classList.add('popup_opened');
};

// закрыть попап 
const evtClosePopup = function () {
  placePopup.classList.remove('popup_opened');
};

// слушатели событий - по клику на кнопку добавить или крестик
btnAddPost.addEventListener('click', evtOpenPopup);
btnExitAddPost.addEventListener('click', evtClosePopup);

// добавить новую карточку
// function addNewPost (evt) {
//   evt.preventDefault();
//   placeName.textContent = inputPlaceName.value;
//   userAbout.src = inputPlaceLink.value;

//   evtClosePopup();
// };

// form.addEventListener('submit', addNewPost);