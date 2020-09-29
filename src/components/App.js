import React, { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
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

  /**
 * return cards and initial user info from the server
 */
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, items]) => {
        setCurrentUser(user);
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);

  /**
 * change number of likes in the card and send card likes info to the server
 * @param   {object} card  card being clicked
 */
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLike(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  /**
* open popup that edits user data
*/
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  /**
 * open popup that edits avatar link
 */
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  /**
* open popup that adds new card
*/
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  /**
 * enable validation for the form that adds new card by creating 
 * new instance of FormValidator class
 * @return  {function}   method that resets the form
 */
  useEffect(() => {
    const placeValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_place'));
    placeValidator.enableValidation();

    return placeValidator.formReset();
  }, [isAddPlacePopupOpen])


  /**
   * enable validation for the form that edits profile by creating 
   * new instance of FormValidator class
   * @return  {function}   method that resets the form
   */
  useEffect(() => {
    const profileValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_profile'));
    profileValidator.enableValidation();

    return profileValidator.formReset();
  }, [isEditProfilePopupOpen])


  /**
   * enable validation for the form that edits avatar by creating 
   * new instance of FormValidator class
   * @return  {function}   method that resets the form
   */
  useEffect(() => {
    const avatarValidator = new FormValidator(selectors, document.querySelector('.popup__container_type_avatar'));
    avatarValidator.enableValidation();

    return avatarValidator.formReset();
  }, [isEditAvatarPopupOpen])

  /**
   * close all popups 
   */
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeletePopupOpen(false);
    setSelectedCard(undefined);
  }

  /**
   * open popup that enlarges the picture while clicking on the card 
   */
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  /**
    * change user data on web-site and send new user data to the server 
    */
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

  /**
  * change avatar data on web-site and send new avatar data to the server 
  */
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

  /**
      * add new card to the server and change array of cards shown on the web-site
      */
  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api.postNewCard(card)
      .then((newCard) => {
        setCards([newCard,...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }

  /**
    * delete card
    */
  function handleCardDelete(card) {
    setDeletePopupOpen(true);
    setCardToDelete(card);
  }
  /**
     * delete card on the server and change array of cards shown on the web-site
     */
  function cardDelete() {
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
