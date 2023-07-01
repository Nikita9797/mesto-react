import React from "react";
import PopupWithForm from "./PopupWithForm";
import PopupInput from "./PopupInput";
import PopupButton from "./PopupButton";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      name,
      link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="create-card-form"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <PopupInput
        onChange={handleName}
        minLength="2"
        maxLength="30"
        type="text"
        name="name"
        id="title-input"
        placeholder="Название"
      />
      <PopupInput
        onChange={handleLink}
        minLength=""
        maxLength=""
        type="url"
        name="link"
        id="url-input"
        placeholder="Ссылка на картинку"
      />
      <PopupButton title="Сохранить" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
