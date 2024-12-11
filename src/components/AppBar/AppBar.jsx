import PropTypes from "prop-types";
import React from "react";
import "./app-bar.css";

export const AppBar = ({ appbarVariant, className }) => {
  return (
    <div className={`app-bar ${className}`}>
      <div className="frame">
        <div className="logo">
          <img src="./logo.png" alt="Logo" />

          <img src="./wtt.png" alt="Wtt" />
        </div>
      </div>

      <img className="vector" alt="Vector" />

      <div className="div">
        <p className="WTT-FINALS-MEN-DOHA">WTT FINALS MEN DOHA 2023</p>

        <p className="element-JANUARY-MAY">
          03 JANUARY - 05 MAY 2024&nbsp;&nbsp;|&nbsp;&nbsp;DOHA, QAT
        </p>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  appbarVariant: PropTypes.oneOf(["default"]),
};
