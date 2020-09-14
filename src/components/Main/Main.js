import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import Card from '../Card/Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = useState('https://www.bagira.guru/images/joomgallery/originals/lyudi_18/foto_zhak_iv_kusto__-_interesnie_fakti_20190810_2078596433.jpg');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, items]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="cover">
        <div className="cover__profile">
          <button className="cover__image" style={{ backgroundImage: `url(${userAvatar})` }} onClick={onEditAvatar}></button>
          <div className="cover__heading-info">
            <h1 className="cover__heading">{userName}</h1>
            <button className="cover__edit" onClick={onEditProfile} aria-label="Редактировать" type="button"></button>
          </div>
          <p className="cover__subheading">{userDescription}</p>
        </div>
        <button className="cover__add" onClick={onAddPlace} aria-label="Добавить" type="button"></button>
      </section>
      <section className="places">
        {cards.map((item) => (<Card key={item._id} name={item.name} link={item.link} likes={item.likes.length} handleCard={onCardClick}/>))}
      </section>
    </main>
  );
}

export default Main;