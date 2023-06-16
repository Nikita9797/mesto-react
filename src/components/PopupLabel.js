import React from 'react';
import './PopupLabel.css';

function PopupLabel({minLength, maxLength, type, name, id, placeholder}) {
  return (
    <label className="popup__field">
        <input minLength={minLength} maxLength={maxLength} name={name} id={id} type={type} className="popup__input-text popup__input-text_el_name" placeholder={placeholder} required />
        <span className={`${id}-error popup__input-text-error`}></span>
    </label>
  );
}

export default PopupLabel;