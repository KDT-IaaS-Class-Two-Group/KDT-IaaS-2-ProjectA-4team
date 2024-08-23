/**
 * @crystal23733
 * @date 24.08.07
 * @function filterData
 * @description 검색어를 기반으로 데이터를 필터링하는 함수입니다.
 *
 * 이 함수는 주어진 데이터 배열에서 검색어와 일치하는 항목을 필터링합니다.
 * 데이터 항목의 특정 키에서 검색어를 포함하고 있는지 확인하여 필터링합니다.
 *
 * @param {T[]} data - 필터링할 데이터 배열입니다. 각 데이터 항목은 제네릭 타입 `T`를 따릅니다.
 * @param {string} query - 검색어로 사용될 문자열입니다. 이 검색어를 기준으로 데이터를 필터링합니다.
 * @param {keyof T} searchKey - 데이터 항목에서 검색할 키입니다. 이 키의 값이 검색어를 포함하는지 검사합니다.
 *
 * @returns {T[]} - 검색어와 일치하는 데이터 항목으로 필터링된 배열을 반환합니다.
 *
 * @template T - 데이터 항목의 타입을 지정하는 제네릭 타입입니다.
 */
const filterData = <T extends object>(
  data: T[],
  query: string,
  searchKey: keyof T,
): T[] => {
  const lowerCaseQuery = query.toLowerCase();
  return data.filter((item) => {
    const value = (item[searchKey] as unknown as string).toLowerCase();
    return value.includes(lowerCaseQuery);
  });
};

export default filterData;
