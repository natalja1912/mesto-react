import React, { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import PopupWithForm from './PopupWithForm/PopupWithForm';
import ImagePopup from './ImagePopup/ImagePopup';
import Footer from './Footer/Footer';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(card){
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__input">
          <input type="text" className="popup__text popup__text_type_name" name="popup__text_type_name" placeholder="Имя исследователя" minLength="2" maxLength="40" required />
          <span className="popup__input-error">Вы пропустили это поле.</span>
        </label>
        <label className="popup__input">
          <input type="text" className="popup__text popup__text_type_job" name="popup__text_type_job" placeholder="Профессия исследователя" minLength="2" maxLength="200" required />
          <span className="popup__input-error">Вы пропустили это поле.</span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="place" title="Новое место" buttonText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__input">
          <input type="text" className="popup__text popup__text_type_placename" name="popup__text_type_placename" placeholder="Горный Алтай" minLength="1" maxLength="30" required />
          <span className="popup__input-error">Вы пропустили это поле.</span>
        </label>
        <label className="popup__input">
          <input type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
          <span className="popup__input-error">Введите адрес сайта.</span>
        </label>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" buttonText="Да" onClose={closeAllPopups}>
      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__input">
          <input type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
          <span className="popup__input-error">Введите адрес сайта.</span>
        </label>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <Footer />
    </div>);
}

export default App;
