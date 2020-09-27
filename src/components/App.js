import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import Footer from './Footer/Footer';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup/AddPlacePopup';
import AddDeletePopup from './AddDeletePopup/AddDeletePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { FormValidator, selectors } from '../utils/formValidator';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cardToDelete, setCardToDelete] = useState({});

  //загрузка с сервера данных пользователя
  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //загрузка карточек с сервера
  useEffect(() => {
    api.getInitialCards()
      .then((items) => {
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);

  //функция добавления и удаления лайков карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLike(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  //открытие попапов редактирования профиля, аватара и добавления нового места
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  //вадидация формы добавления нового места и сброса ошибок валидации при закрытии формы
  useEffect(() => {
    const placeValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_place'));
    placeValidator.enableValidation();

    return placeValidator.formReset();
  }, [isAddPlacePopupOpen])

  //вадидация формы редактирования профиля и сброса ошибок валидации при закрытии формы
  useEffect(() => {
    const profileValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_profile'));
    profileValidator.enableValidation();

    return profileValidator.formReset();
  }, [isEditProfilePopupOpen])

  //вадидация формы редактирования аватара и сброса ошибок валидации при закрытии формы
  useEffect(() => {
    const avatarValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_avatar'));
    avatarValidator.enableValidation();

    return avatarValidator.formReset();
  }, [isEditAvatarPopupOpen])

  //закрытие всех попапов
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setSelectedCard(undefined);
  }

  //открытие попапа с фото карточки по клику на карточку
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //изменение данных пользователя при сабмите формы редактирования профиля
  function handleUpdateUser(user) {
    setIsLoading(true);
    api.sendUserInfo(user)
      .then(() => {
        closeAllPopups();
        setCurrentUser(user);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  //изменение аватара при сабмите формы изменения аватара
  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api.changeAvatar(avatar)
      .then(() => {
        closeAllPopups();
        setCurrentUser({
          name: currentUser.name,
          about: currentUser.about,
          avatar: avatar,
        })
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  //добавление новой карточки при сабмите формы добавления карточки
  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api.postNewCard(card)
      .then(() => {
        setCards([...cards, card]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  //удаление карточки
  function handleCardDelete(card) {
    setDeletePopupOpen(true);
    setCardToDelete(card);
  }

  function cardDelete(){
    api.deleteCard(cardToDelete._id)
      .then(() => {
        setCards(cards.filter(item => item._id !== cardToDelete._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main cards={cards} handleCardLike={(card) => handleCardLike(card)} handleCardDelete={(card) => handleCardDelete(card)} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <EditProfilePopup isLoading={isLoading} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={(user) => handleUpdateUser(user)} />
        <AddPlacePopup isLoading={isLoading} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onUpdateCard={(card) => handleAddPlaceSubmit(card)} />
        <AddDeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} onSubmit={cardDelete} />
        <EditAvatarPopup isLoading={isLoading} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={(avatar) => handleUpdateAvatar(avatar)} />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <Footer />
      </CurrentUserContext.Provider>
    </div>);
}

export default App;
