// import React from "react";
// import { AppBar } from "../AppBar/AppBar";
// import { Card } from "../Card/Card";
// import "./style.css";

// export default function Board  () {
//   return (
//     <div className="single-player-board2">
//       <AppBar appbarVariant="default" className="app-bar-instance" />
//       <div className="div">
//         <Card
//           cardVariant="default"
//           imgSrc="/singleboardImage.png" 
//           text="Single Player Board"
//         />
//         <Card
//           cardVariant="default"
//           imgSrc="/MultiboardImage.png" 
//           text="Multi Player Board"
//         />
//       </div>
//     </div>
//   );
// };
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { AppBar } from "../AppBar/AppBar";
import { Card } from "../Card/Card";
import "./style.css";

export default function Board() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCardClick = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="single-player-board2">
      <AppBar appbarVariant="default" className="app-bar-instance" />
      <div className="div">
        <Card
          cardVariant="default"
          imgSrc="/singleboardImage.png"
          text="Single Player Board"
          onClick={() => handleCardClick("/singleplayer")} // Navigate to /singleplayer
        />
        <Card
          cardVariant="default"
          imgSrc="/MultiboardImage.png"
          text="Multi Player Board"
          onClick={() => handleCardClick("/multiplayer")} // Navigate to /multiplayer
        />
      </div>
    </div>
  );
}

