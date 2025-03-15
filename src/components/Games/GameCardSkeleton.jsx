import React from "react";
import "../../App.css";
const GameCardSkeleton = () => {
  return (
    <div className=" game-card-skeleton max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" game-card-image rounded-t-lg bg-gray-300 w-full h-60 animate-pulse"></div>
      <div className="game-card-content p-5">
        <div className="game-card-title h-6 bg-gray-300 rounded-md mb-4 w-3/4 animate-pulse"></div>
        <div className="game-card-icons flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="icon-placeholder w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="icon-placeholder w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="icon-placeholder w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
          </div>
          <div className="button-placeholder w-10 h-6 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
