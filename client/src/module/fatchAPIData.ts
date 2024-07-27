/**
 * @moonhr 24.07.27
 * @param endpoint api받아올 엔드포인트
 * @returns json
 */
export const fetchAPIData = async <T>(endpoint: string): Promise<T> => {
  const response = await fetch(`$http://localhost:3001/${endpoint}`);
  if (!response.ok) {
    throw new Error("Failed to fetch API data");
  }
  return response.json();
};
