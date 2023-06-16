import React from 'react';
import './PopupButton.css';

function PopupButton({title}) {
  return (
    <button type="submit" className="popup__button">{title}</button>
  );
}

export default PopupButton;