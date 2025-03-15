import React from "react";

const SidebarSkeleton = () => {
  return (
    <div className="max-w-sm bg-gray-800 dark:bg-white border border-gray-200 dark:border-gray-700 rounded-lg shadow p-4 transition-colors">
      <div className="p-5">
        <div className="flex items-center gap-1">
          <div className="w-14 h-9 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
          <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSkeleton;
