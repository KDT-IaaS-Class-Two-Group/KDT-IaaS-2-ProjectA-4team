import urlJoin from "url-join";

/**
 * @eonduck2 24.08.07
 * * 기본 URL(localhost:3001)을 사용하여 URL을 조합하는 함수
 *
 * 기본 URL은 http://localhost:3001로 설정되어 있습니다.
 * 이 함수를 사용하면 기본 URL과 여러 경로를 조합하여 유효한 URL을 생성할 수 있습니다.
 *
 * @param {...string} paths - URL 경로 조각. 예를 들어, api, members, 123
 * @returns {string} - 조합된 URL. 예를 들어, http://localhost:3001/api/members/123
 *
 * @example
 * const url = defaultUrlGenerator('api', 'members', '123');
 */
export default (...paths: string[]): string =>
  urlJoin(process.env.NEXT_PUBLIC_SERVER_URL as string, ...paths);
