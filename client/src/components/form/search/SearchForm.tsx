import React, { ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "../../input/Input";
import SearchFormProps from "src/interfaces/components/form/search/SearchForm.interface";

/**
 * `SearchForm`
 *
 * 이 컴포넌트는 사용자로부터 검색어를 입력받아 검색을 수행하는 폼을 렌더링합니다.
 * 사용자가 입력한 검색어는 폼 제출 시 부모 컴포넌트로 전달됩니다.
 * 검색 아이콘이 포함된 제출 버튼이 있으며, 입력 필드와 버튼은 스타일링되어 있습니다.
 *
 * @component
 *
 * @param {SearchFormProps} props - `SearchForm` 컴포넌트에 전달되는 속성입니다.
 * @param {function} props.onSearch - 검색어를 부모 컴포넌트로 전달하는 콜백 함수입니다.
 *
 * @returns {JSX.Element} - 검색 폼을 렌더링하는 JSX 요소를 반환합니다.
 *
 * @description
 * 이 컴포넌트는 다음과 같은 구조로 되어 있습니다:
 * - 입력 필드 (`InputComponent`): 사용자가 검색어를 입력할 수 있는 필드입니다.
 * - 제출 버튼: 검색 아이콘이 있는 버튼으로, 클릭 시 폼이 제출됩니다.
 *
 * 사용자는 입력 필드에 검색어를 입력하고, 제출 버튼을 클릭하여 검색을 수행할 수 있습니다.
 * 검색어는 `onSearch` 콜백 함수를 통해 부모 컴포넌트로 전달됩니다.
 *
 * @crystal23733
 * @date 24.08.07
 */
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = React.useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(query); // 검색어를 부모 컴포넌트로 전달
  };

  return (
    <div className="flex justify-end pb-4">
      <form
        className="w-80 max-w-md flex items-center border border-gray-300 rounded-lg shadow-sm overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <InputComponent
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-yan-500 focus:border-cyan-500"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 flex items-center px-4 py-2 text-white bg-cyan-500 border-none rounded-r-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
