// import PropTypes from "prop-types";
// import React from "react";
// import "./card.css";

// export const Card = ({
//   cardVariant,
//  imgSrc,
//   text = "Multi Player Board",
// }) => {
//   return (
//     <div className="card2">

//     <img className="mask-group" src={imgSrc} alt={text} />

//       <div className="multi-player-board">{text}</div>
//     </div>
//   );
// };

// Card.propTypes = {
//   cardVariant: PropTypes.oneOf(["default"]),
//   text: PropTypes.string,
// };
import PropTypes from "prop-types";
import React from "react";
import "./card.css";

export const Card = ({
  cardVariant,
  imgSrc,
  text = "Multi Player Board",
  onClick, // Add onClick prop
}) => {
  return (
    <div className="card2" onClick={onClick} style={{ cursor: "pointer" }}> {/* Add onClick and pointer cursor */}
      <img className="mask-group" src={imgSrc} alt={text} />
      <div className="multi-player-board">{text}</div>
    </div>
  );
};

Card.propTypes = {
  cardVariant: PropTypes.oneOf(["default"]),
  text: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  onClick: PropTypes.func, // Add prop type for onClick
};

