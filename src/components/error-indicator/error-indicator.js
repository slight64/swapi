import React from "react";
import icon from './close.png'
import './error-indicator.css'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon} alt='error icon'/>
      <span>There is some error, but we already working on it</span>
    </div>
  );
};

export default ErrorIndicator