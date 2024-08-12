import urlJoin from "url-join";

/**
 * @eonduck2 24.08.07
 * * 기본 요청(/)을 사용하여 URL을 조합하는 함수
 *
 * 기본 요청은 /로 설정되어 있습니다.
 *
 * @param {...string} paths - URL 경로 조각. 예를 들어, api, members, 123
 * @returns {string} - 조합된 경로
 *
 */
export default (...paths: string[]): string =>
  urlJoin(process.env.NEXT_PUBLIC_BASE_URL as string, ...paths);
