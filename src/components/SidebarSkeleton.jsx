import React from "react";
import "../App.css";
const SidebarSkeleton = () => {
  return (
    <div className="sidebar-skeleton">
      <div className="p-5">
        <div className="skeleton-content">
          <div className="flex space-x-1">
            <div className="skeleton-button "></div>
          </div>
          <div className=" skeleton-badge  "></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
