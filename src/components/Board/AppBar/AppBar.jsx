import PropTypes from "prop-types";
import React from "react";
import "./app-bar.css";

export const AppBar = ({ appbarVariant, className }) => {
  return (
    <div className={`app-bar2 ${className}`}>
      <div className="frame">
        <div className="logo">
          <img className="img" src="./logo.png" alt="Logo" />

          <img className="WTT-2" src="./wtt.png" alt="Wtt" />
        </div>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  appbarVariant: PropTypes.oneOf(["default"]),
};
