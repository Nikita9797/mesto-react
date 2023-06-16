import React from 'react';
import "./Main.css";
import profilePenIcon from "../images/pen.svg";
import addButtonPlusIcon from "../images/plus.svg";
import { api } from '../utils/Api';
import Card from './Card';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = React.useState("")
    const [userDescription, setUserDescription] = React.useState("")
    const [userAvatar, setUserAvatar] = React.useState("")
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        .catch((err) => {
            console.log(err);
        })    
    }, [])

    React.useEffect(() => {
        api.getInitialCards()
        .then(res => {
            setCards(res)
        })
        .catch((err) => {
            console.log(err);
        })    
    }, [])

  return (
    <main className="content">
        <section className="profile content__profile">
            <div className="profile__image" onClick={onEditAvatar} style={{ backgroundImage: `url(${userAvatar})` }}>
                <div className="profile__overlay"></div>
            </div>
            <div className="profile__info">
                <div className="profile__info-row">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile} type="button">
                        <img className="profile__pen-icon" src={profilePenIcon} alt="Иконка редактирования" />
                    </button>
                </div>
                <p className="profile__status">{userDescription}</p>
            </div>
            <button className="add-button" onClick={onAddPlace} type="button">
                <img className="add-button__plus-icon" src={addButtonPlusIcon} alt="Иконка плюс" />
            </button>
        </section>
        <section className="gallery">
            <ul className="cards">
                {cards.map(item => (
                    <Card card={item} onCardClick={onCardClick} key={item._id} />
                ))}
            </ul>
        </section>
    </main>
  );
}

export default Main;