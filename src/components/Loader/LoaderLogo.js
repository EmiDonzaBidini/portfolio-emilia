import React from "react";
import "./LoaderLogo.css";

function LoaderLogo(props) {
  return (
    <div className="logo-container">
      <div
        className="logo-icon"
        style={{ backgroundColor: props.theme.text }}
      />
      <h1 className="logo-text" style={{ color: props.theme.text }}>
        Emilia Donza Bidini
      </h1>
    </div>
  );
}

export default LoaderLogo;
