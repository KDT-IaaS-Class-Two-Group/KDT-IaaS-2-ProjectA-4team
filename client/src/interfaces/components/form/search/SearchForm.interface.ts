/**
 * @crystal23733
 * @date 24.08.09
 *
 * `SearchFormProps`는 `SearchForm` 컴포넌트에 전달되는 속성을 정의합니다.
 *
 * @interface
 *
 * @property {function} onSearch - 검색어를 부모 컴포넌트로 전달하는 콜백 함수.
 * @param {string} query - 검색어 문자열.
 */

export default interface SearchFormProps {
  onSearch: (query: string) => void;
}
