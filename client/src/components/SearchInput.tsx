import React from "react";

const SearchInput: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <input type="text" placeholder="검색할 내용을 입력해주세요" className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out"/>
    </div>
  );
}

export default SearchInput;