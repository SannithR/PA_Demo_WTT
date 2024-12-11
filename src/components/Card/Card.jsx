import PropTypes from "prop-types";
import React from "react";
import "./card.css";

export const Card = ({ cardVariant }) => {
  return (
    <div className="card">
      <div className="frame-2">
        <div className="HARIMOTO-synthetic">HARIMOTO</div>

        <div className="frame-3">
          <div className="TOMOKAZU-synthetic">TOMOKAZU</div>

          <img src="./image 4.png" alt="Image" />
        </div>
      </div>

      <div className="frame-4">
        <div className="element-synthetic-clone">2</div>

        <img className="line" alt="Line" />

        <div className="element-synthetic-clone">0</div>

        <img className="line" alt="Line" />

        <div className="element-synthetic-clone">0</div>

        <img className="line" alt="Line" />

        <div className="element-synthetic-clone">0</div>

        <img className="line" alt="Line" />

        <div className="element-synthetic-clone">0</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  cardVariant: PropTypes.oneOf(["default"]),
};
