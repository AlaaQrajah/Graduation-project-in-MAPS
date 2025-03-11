import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <div className="flex space-x-1">
            <div className="w-14 h-9 bg-gray-300  animate-pulse"></div>
          </div>
          <div className="w-10 h-6 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
