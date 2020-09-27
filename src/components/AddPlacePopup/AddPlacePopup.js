import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onUpdateCard }) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateCard({ name, link });
    }

    return (
        <PopupWithForm name="place" title="Новое место" buttonText="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={(e) => handleSubmit(e)}>
            <label className="popup__input">
                <input onChange={(e) => setName(e.target.value)} type="text" className="popup__text popup__text_type_placename" name="popup__text_type_placename" placeholder="Горный Алтай" minLength="1" maxLength="30" required />
                <span className="popup__input-error">Вы пропустили это поле.</span>
            </label>
            <label className="popup__input">
                <input onChange={(e) => setLink(e.target.value)} type="url" className="popup__text popup__text_type_placelink" name="popup__text_type_placelink" placeholder="https://unsplash.com/example.jpg" required />
                <span className="popup__input-error">Введите адрес сайта.</span>
            </label>
        </PopupWithForm>
    );
}

export default AddPlacePopup;