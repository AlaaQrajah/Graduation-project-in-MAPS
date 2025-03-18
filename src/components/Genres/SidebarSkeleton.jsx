import React from "react";
import "../../App.css";
import "../FilesCss/CssToFilesGenre/CssForSidebarSkeleton.css";

const SidebarSkeleton = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-content-wrapper">
        <div className="skeleton-content">
          <div className="skeleton-button"></div>
          <div className="skeleton-badge"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
