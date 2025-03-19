import { useState } from "react";
import usePlatform from "../../hooks/usePlatform";
import "../FilesCss/CssToPlatform/CssForPlatformIconSelector.css";

const PlatformSelector = ({ onSelectPlatform, selectPlatform }) => {
  const [isOpen, setIsOpen] = useState(false); // حالة القائمة المنسدلة
  const { data, error } = usePlatform();

  if (error) return null;

  return (
    <div className="relative inline-block text-left">
      {/* زر القائمة */}
      <button
        id="platformDropdownButton"
        className="platform-button"
        type="button"
        onClick={() => setIsOpen(!isOpen)} // التبديل بين الفتح والإغلاق
      >
        {selectPlatform?.name || "Platforms"}
        <svg
          className="dropdown-icon ml-2 w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div
          id="platformDropdown"
          className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 
                     rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600"
        >
          <ul className="py-2">
            {data.map((platform) => (
              <li
                key={platform.id}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 
                           dark:hover:bg-gray-600"
                onClick={() => {
                  onSelectPlatform(platform);
                  setIsOpen(false); // إغلاق القائمة بعد الاختيار
                }}
              >
                {platform.slug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
