// массив карточек мест "из коробки"
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

// добавить карточки мест "из коробки" при загрузке страницы
const container = document.querySelector('.gallery');
const postTemplate = document.querySelector('#post-template');

// РЕДАКТИРОВАТЬ ПРОФИЛЬ объявить переменные
const buttonOpenPopup = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const buttonClosePopup = popup.querySelector('.popup__close-btn');

const form = popup.querySelector('.input');
const popupUserName = popup.querySelector('.input__text_type_name');
const popupUserAbout = popup.querySelector('.input__text_type_occupation');

const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__occupation');

// НОВОЕ МЕСТО объявить переменные
const btnAddPost= document.querySelector('.profile__add-button');
const placePopup = document.querySelector('.place-popup');
const btnExitAddPost = placePopup.querySelector('.popup__close-btn');

const placeForm = placePopup.querySelector('.place-input');
const inputPlaceName = placePopup.querySelector('.input__text_type_place');
const inputPlaceLink = placePopup.querySelector('.input__text_type_link');

const placeName = document.querySelector('.post__name');
const placeImage = document.querySelector('.post__photo');

const imagePopup = document.querySelector('.image-popup');
const btnExitImage = imagePopup.querySelector('.popup__close-btn');


// НОВОЕ МЕСТО открыть попап
const evtOpenPopup = function () {
  placePopup.classList.add('popup_opened');
};

// НОВОЕ МЕСТО закрыть попап
const evtClosePopup = function () {
  placePopup.classList.remove('popup_opened');
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
};

// НОВОЕ МЕСТО слушатели событий - по клику на кнопку добавить или крестик
btnAddPost.addEventListener('click', evtOpenPopup);
btnExitAddPost.addEventListener('click', evtClosePopup);

// рендерим элементы массива
const render = () => {
  initialCards.forEach(card =>{
    const postElement = createCardNode(card.name, card.link);
    container.append(postElement);

    btnAddPost.addEventListener('click', evtOpenPopup);
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

  // кнопка удалить карточку
  const deleteBtn = postElement.querySelector('.post__delete-button');
  deleteBtn.addEventListener('click', deleteCard);

  // ПОПАП С КАРТИНКОЙ открыть
  const evtOpenImage = function (evt) {
    imagePopup.classList.add('popup_opened');

    const imgPopupImg = imagePopup.querySelector('.image-popup__image');
    const imgPopupName = imagePopup.querySelector('.image-popup__title');

    const currentImg = evt.target.closest('.post__photo');
    const currentName = evt.target.closest('.post');
    imgPopupImg.src = currentImg.src;
    imgPopupName.textContent = currentName.textContent;
  };

  const placeImage = postElement.querySelector('.post__photo');
  placeImage.addEventListener('click', evtOpenImage);

  // ПОПАП С КАРТИНКОЙ закрыть
  const evtCloseImage = function () {
    imagePopup.classList.remove('popup_opened');
  };

  btnExitImage.addEventListener('click', evtCloseImage);


  return postElement;
};

// функция удалить карточку
const deleteCard = (evt) => {
  const currentCard = evt.target.closest('.post');
  currentCard.remove();
};

render();


// НОВОЕ МЕСТО добавить новую карточку
function addNewPost (evt) {
  evt.preventDefault();

  const card = createCardNode(inputPlaceName.value, inputPlaceLink.value);
  container.prepend(card);

  evtClosePopup();
};

placeForm.addEventListener('submit', addNewPost);


// РЕДАКТИРОВАТЬ ПРОФИЛЬ открыть попап
const eventOpenPopup = function () {
  popup.classList.add('popup_opened');
  // вставить данные при открытии
  popupUserName.value = userName.textContent;
  popupUserAbout.value = userAbout.textContent;
};

// РЕДАКТИРОВАТЬ ПРОФИЛЬ закрыть попап 
const eventClosePopup = function () {
  popup.classList.remove('popup_opened');
};

// РЕДАКТИРОВАТЬ ПРОФИЛЬ слушатели событий - по клику на кнопку редактировать или крестик
buttonOpenPopup.addEventListener('click', eventOpenPopup);
buttonClosePopup.addEventListener('click', eventClosePopup);

// РЕДАКТИРОВАТЬ ПРОФИЛЬ изменить информацию о пользователе
function editUserInfo (evt) {
  evt.preventDefault();
  userName.textContent = popupUserName.value;
  userAbout.textContent = popupUserAbout.value;

  eventClosePopup();
};

form.addEventListener('submit', editUserInfo);