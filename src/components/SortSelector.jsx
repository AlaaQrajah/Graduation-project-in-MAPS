import { useState } from "react";
import "./FilesCss/CssForSpinner.css";

const SortSelector = ({ onSelectSortOrder, selectSortOrder }) => {
  const [isOpen, setIsOpen] = useState(false); // حالة القائمة

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-release", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortLabel =
    sortOrders.find((order) => order.value === selectSortOrder)?.label ||
    "Relevance";

  return (
    <div className="relative inline-block text-left">
      {/* زر القائمة */}
      <button
        id="sortDropdownButton"
        className="sortDropdown"
        type="button"
        onClick={() => setIsOpen(!isOpen)} // التبديل بين الفتح والإغلاق
      >
        Order by: {selectedSortLabel}
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
          className="ml-2 w-4 h-4"
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
          id="sortDropdown"
          className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 
                     rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600"
        >
          <ul className="py-2">
            {sortOrders.map((order) => (
              <li
                key={order.value}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200 
                           dark:hover:bg-gray-600"
                onClick={() => {
                  onSelectSortOrder(order.value);
                  setIsOpen(false); // إغلاق القائمة بعد الاختيار
                }}
              >
                {order.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
