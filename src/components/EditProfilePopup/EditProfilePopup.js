import React, { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const currentUser = React.useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name,
            about: description,
            avatar: currentUser.avatar,
        });
    }

    return (
        <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input onChange={(e) => setName(e.target.value)} type="text" className="popup__text popup__text_type_name" name="popup__text_type_name" placeholder="Имя исследователя" minLength="2" maxLength="40" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__input">
                <input onChange={(e) => setDescription(e.target.value)} type="text" className="popup__text popup__text_type_job" name="popup__text_type_job" placeholder="Профессия исследователя" minLength="2" maxLength="200" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
        </PopupWithForm>
    );
}

export default EditProfilePopup;