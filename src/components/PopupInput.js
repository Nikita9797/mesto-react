import React from "react";
import "./PopupInput.css";

function PopupInput({ inputRef, ...props }) {
  return (
    <label className="popup__field">
      <input
        className="popup__input-text popup__input-text_el_name"
        ref={inputRef}
        required
        {...props}
      />
      <span className={`${props.id}-error popup__input-text-error`}></span>
    </label>
  );
}

export default PopupInput;
