import React from "react";
import "./Card.css";
import cardTrashIcon from "../images/trash.svg";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card" onClick={handleClick}>
      <div
        style={{ backgroundImage: `url(${card.link})` }}
        className="card__image"
      ></div>
      <img
        src={cardTrashIcon}
        alt="Иконка для удаления карточки"
        className="card__trash"
      />
      <div className="card__flex-row">
        <h2 className="card__text">{card.name}</h2>
        <div className="card__like-flex">
          <button className="card__like" type="button"></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
