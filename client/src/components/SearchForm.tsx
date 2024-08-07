import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./Input";

const SearchForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <form className="w-full max-w-md flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden">
        <div className="relative w-full">
          <InputComponent
            type="text"
            placeholder="검색어를 입력하세요..."
            className="w-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-4 py-2 text-white bg-blue-500 border-none rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
            title="Search"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
