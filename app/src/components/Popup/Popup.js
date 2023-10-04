import React from "react";
import "./Popup.css";
import { Button } from "../StyledComponents/Button.tsx";
import { hidePopup } from "./popupSlice";
import { useDispatch, useSelector } from "react-redux";

export const Popup = ({title}) => {
  const dispatch = useDispatch();
  const {visible, text} = useSelector(state => state.popup);
  if (!visible) return null
  
  return (
    <div className="popup-container">
     <div className="popup-body">
      <h1 className="popup-title">{title}</h1>
      <p className="popup-text">{text}</p>
      <Button onClick={() => dispatch(hidePopup())}>Close X</Button>
     </div>
    </div>
  );
};