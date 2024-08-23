import { useState, useCallback } from "react";

/**
 * @crystal23733
 * @date 24.08.09
 *
 * `useSearch` 훅은 검색어를 관리하는 상태 훅입니다.
 *
 * @returns {
 *   searchQuery: string;        // 현재 검색어 상태
 *   handleSearch: (query: string) => void; // 검색어를 업데이트하는 함수
 * }
 *
 * @function
 */
const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return [searchQuery, handleSearch] as const;
};

export default useSearch;
