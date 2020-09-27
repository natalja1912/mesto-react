import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const currentUser = React.useContext(CurrentUserContext);
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input ref={avatarRef} type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
                <span className="popup__input-error">Введите адрес сайта.</span>
            </label>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;