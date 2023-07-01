import React from "react";
import PopupWithForm from "./PopupWithForm";
import PopupInput from "./PopupInput";
import PopupButton from "./PopupButton";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef("");

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="set-avatar-form"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <PopupInput
        minLength=""
        maxLength=""
        type="url"
        name="src"
        id="src-input"
        placeholder="Ссылка на картинку"
        inputRef={inputRef}
      />

      <PopupButton title="Сохранить" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
