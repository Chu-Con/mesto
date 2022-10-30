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
const btnEditProfile = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupEditProfile = document.querySelector('.popup-edit');
const btnCloseEditProfile = popup.querySelector('.popup__close-btn');

const formEditPopup = popup.querySelector('.input-edit');
const inputUserName = popupEditProfile.querySelector('.input__text_type_name');
const inputUserAbout = popupEditProfile.querySelector('.input__text_type_occupation');

const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__occupation');

// НОВОЕ МЕСТО объявить переменные
const btnOpenAddPost= document.querySelector('.profile__add-btn');
const placePopup = document.querySelector('.popup-place');
const btnCloseAddPost = placePopup.querySelector('.popup__close-btn');

const placeForm = placePopup.querySelector('.input-place');
const inputPlaceName = placePopup.querySelector('.input__text_type_place');
const inputPlaceLink = placePopup.querySelector('.input__text_type_link');

const imagePopup = document.querySelector('.popup-image');
const btnExitImage = imagePopup.querySelector('.popup__close-btn');


// НОВОЕ МЕСТО открыть попап
const openAddPost = function () {
  placePopup.classList.add('popup_opened');
};

// НОВОЕ МЕСТО закрыть попап
const closeAddPost = function () {
  placePopup.classList.remove('popup_opened');
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
};

// НОВОЕ МЕСТО слушатели событий - по клику на кнопку добавить или крестик
btnOpenAddPost.addEventListener('click', openAddPost);
btnCloseAddPost.addEventListener('click', closeAddPost);

// рендерим элементы массива
const render = () => {
  initialCards.forEach((card) => {
    const postPlaceCard = createCardNode(card.name, card.link);
    container.append(postPlaceCard);

    // btnOpenAddPost.addEventListener('click', openAddPost);
  });
}

const createCardNode = (name, link) => {
  const postCard = postTemplate.content.cloneNode(true);

  postCard.querySelector('.post__name').textContent = name;
  postCard.querySelector('.post__photo').src = link;
  postCard.querySelector('.post__photo').alt = name;

  // ставить лайк
  const postLike = postCard.querySelector('.post__like-button');
  postLike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('post__like-button_type_active');
  });

  // кнопка удалить карточку
  const deleteBtn = postCard.querySelector('.post__delete-btn');
  deleteBtn.addEventListener('click', deletePostCard);

  // ПОПАП С КАРТИНКОЙ открыть
  const openPopupImage = function (evt) {
    imagePopup.classList.add('popup_opened');

    const imgPopupImg = imagePopup.querySelector('.popup-image__img');
    const imgPopupTitle = imagePopup.querySelector('.popup-image__title');

    const currentPostImg = evt.target.closest('.post__photo');
    const currentPostName = evt.target.closest('.post');
    imgPopupImg.src = currentPostImg.src;
    imgPopupImg.alt = currentPostName.textContent;
    imgPopupTitle.textContent = currentPostName.textContent;
  };

  const placeImage = postCard.querySelector('.post__photo');
  placeImage.addEventListener('click', openPopupImage);

  // ПОПАП С КАРТИНКОЙ закрыть
  const closePopupImage = function () {
    imagePopup.classList.remove('popup_opened');
  };

  btnExitImage.addEventListener('click', closePopupImage);


  return postCard;
};

// функция удалить карточку
const deletePostCard = (evt) => {
  const currentPostCard = evt.target.closest('.post');
  currentPostCard.remove();
};

render();


// НОВОЕ МЕСТО добавить новую карточку
function addNewPost (evt) {
  evt.preventDefault();

  const card = createCardNode(inputPlaceName.value, inputPlaceLink.value);
  container.prepend(card);

  closeAddPost();
};

placeForm.addEventListener('submit', addNewPost);


// РЕДАКТИРОВАТЬ ПРОФИЛЬ открыть попап
const openEditProfile = function () {
  popup.classList.add('popup_opened');
  // вставить данные при открытии
  inputUserName.value = userName.textContent;
  inputUserAbout.value = userAbout.textContent;
};

// РЕДАКТИРОВАТЬ ПРОФИЛЬ закрыть попап
const closeEditProfile = function () {
  popup.classList.remove('popup_opened');
};

// РЕДАКТИРОВАТЬ ПРОФИЛЬ слушатели событий - по клику на кнопку редактировать или крестик
btnEditProfile.addEventListener('click', openEditProfile);
btnCloseEditProfile.addEventListener('click', closeEditProfile);

// РЕДАКТИРОВАТЬ ПРОФИЛЬ изменить информацию о пользователе
function editUserInfo (evt) {
  evt.preventDefault();
  userName.textContent = inputUserName.value;
  userAbout.textContent = inputUserAbout.value;

  closeEditProfile();
};

formEditPopup.addEventListener('submit', editUserInfo);