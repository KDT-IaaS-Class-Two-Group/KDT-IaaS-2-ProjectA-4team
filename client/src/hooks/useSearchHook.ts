import { useState, useCallback } from "react";

/**
 * @function useSearch
 * @description 검색어를 관리하는 훅
 * @returns [searchQuery, setSearchQuery] 검색어 상태와 설정 함수
 */
const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return [searchQuery, handleSearch] as const;
};

export default useSearch;
