import { useRef } from "react";
import "../../App.css";
const SearchInput = ({ onSearch }) => {
  const ref = useRef(null);
  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <label
        htmlFor="default-search"
        className="text-style dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="input-icon">
          <svg
            className="dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          ref={ref}
          type="search"
          id="default-search"
          className="input-style"
          placeholder="Search ..."
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
