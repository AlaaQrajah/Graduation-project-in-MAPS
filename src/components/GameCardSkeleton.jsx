import React from "react";
import "../App.css"; // استيراد ملف CSS

const GameCardSkeleton = () => {
  return (
    <div className="game-card-skeleton">
      <div className="game-card-image"></div>
      <div className="game-card-content">
        <div className="game-card-title"></div>
        <div className="game-card-icons">
          <div className="icon-placeholder"></div>
          <div className="icon-placeholder"></div>
          <div className="icon-placeholder"></div>
          <div className="button-placeholder"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
