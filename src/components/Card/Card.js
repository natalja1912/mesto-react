import React from 'react';

function Card({ name, link, likes, handleCard }) {

    function handleClick() {
        handleCard({ name, link });
    }

    return (
        <div className="place">
            <button className="place__image-button" onClick={handleClick}><img className="place__image" src={link} alt={name} /></button>
            <div className="place__info">
                <p className="place__heading">{name}</p>
                <div className="place__buttons">
                    <button className="place__like-button" aria-label="Мне нравится" type="button"></button>
                    <button className="place__sumoflikes-button" aria-label="Количество лайков" type="button">{likes}</button>
                </div>
            </div>
            <button className="place__delete-button" aria-label="Удалить картинку" type="button"></button>
        </div>
    );
}

export default Card;