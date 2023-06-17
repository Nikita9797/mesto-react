import React from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import PopupInput from "./PopupInput";
import PopupButton from "./PopupButton";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={() => handleEditProfileClick()}
          onAddPlace={() => handleAddPlaceClick()}
          onEditAvatar={() => handleEditAvatarClick()}
          onCardClick={(card) => handleCardClick(card)}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Редактировать профиль"
        name="user-info-form"
        isOpen={isEditProfilePopupOpen}
        onClose={() => closeAllPopups()}
      >
        <PopupInput
          minLength="2"
          maxLength="40"
          type="text"
          name="name"
          id="name-input"
          placeholder="Введите имя"
        />
        <PopupInput
          minLength="2"
          maxLength="200"
          type="text"
          name="status"
          id="status-input"
          placeholder="Введите профессию"
        />
        <PopupButton title="Сохранить" />
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="create-card-form"
        isOpen={isAddPlacePopupOpen}
        onClose={() => closeAllPopups()}
      >
        <PopupInput
          minLength="2"
          maxLength="30"
          type="text"
          name="name"
          id="title-input"
          placeholder="Название"
        />
        <PopupInput
          minLength=""
          maxLength=""
          type="url"
          name="link"
          id="url-input"
          placeholder="Ссылка на картинку"
        />
        <PopupButton title="Сохранить" />
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={() => closeAllPopups()} />
      <PopupWithForm
        title="Вы уверены?"
        name="delete-card-form"
        onClose={() => closeAllPopups()}
      >
        <PopupButton title="Да" />
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="set-avatar-form"
        isOpen={isEditAvatarPopupOpen}
        onClose={() => closeAllPopups()}
      >
        <PopupInput
          minLength=""
          maxLength=""
          type="url"
          name="src"
          id="src-input"
          placeholder="Ссылка на картинку"
        />
        <PopupButton title="Сохранить" />
      </PopupWithForm>
    </div>
  );
}

export default App;
