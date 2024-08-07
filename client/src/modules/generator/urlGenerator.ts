import urlJoin from "url-join";

/**
 * @eonduck2 24.08.07
 * * URL을 조합하는 함수
 *
 * 주어진 baseURL과 여러 경로를 조합하여 유효한 URL을 생성합니다.
 * 경로들은 슬래시(`/`)로 구분되어 결합됩니다.
 *
 * @param {string} baseURL - 기본 URL 또는 도메인. 예를 들어, `http://localhost:3001`
 * @param {...string} paths - URL 경로 조각. 예를 들어, `api`, `members`, `123`
 * @returns {string} - 조합된 URL. 예를 들어, `http://localhost:3001/api/members/123`
 *
 * @example
 * const url = urlGenerator('http://localhost:3001', 'api', 'members', '123');
 */
export default (baseURL: string, ...paths: string[]): string =>
  urlJoin(baseURL, ...paths);
