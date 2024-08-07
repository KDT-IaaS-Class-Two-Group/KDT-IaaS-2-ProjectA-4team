/**
 * @function filterData
 * @description 검색어를 기반으로 데이터를 필터링하는 함수
 * @param {T[]} data - 필터링할 데이터
 * @param {string} query - 검색어
 * @param {keyof T} searchKey - 검색할 데이터 키
 * @returns {T[]} 필터링된 데이터
 */
const filterData = <T extends object>(
  data: T[],
  query: string,
  searchKey: keyof T
): T[] => {
  const lowerCaseQuery = query.toLowerCase();
  return data.filter((item) => {
    const value = (item[searchKey] as unknown as string).toLowerCase();
    return value.includes(lowerCaseQuery);
  });
};

export default filterData;