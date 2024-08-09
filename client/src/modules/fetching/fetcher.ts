import {
  HttpErr,
  methodDefaultThrower,
} from "static/throw/modules/fetching/fetcher.static";
import thrower from "../throw/thrower";
import { TRequestData } from "./fetcher.interface";
import type { HttpMethod } from "ky/distribution/types/options";
import ky from "ky";
import { CustomKyOptions } from "./fetcher.interface";

/**
 * 지정된 메서드와 URL을 사용하여 HTTP 요청을 수행합니다.
 *
 * @async
 * @param {string} url - 요청을 보낼 URL입니다.
 * @param {HttpMethod} method - 사용할 HTTP 메서드입니다. 예: 'get', 'post', 'put', 'delete', 'patch', 'head'.
 * @param {Partial<KyOptions>} [options] - `ky` 요청에 사용할 추가 옵션입니다. 예를 들어, 요청 헤더, 타임아웃 설정 등을 포함할 수 있습니다.
 * @param {TRequestData} [data] - 요청과 함께 보낼 데이터입니다. 주로 'post', 'put', 'patch' 메서드에 사용됩니다.
 * @returns {Promise<Response>} 요청의 응답을 나타내는 `Response` 객체로 해결되는 `Promise`입니다.
 * @throws {Error} 요청 실패 시 또는 지원되지 않는 메서드가 사용된 경우에 발생하는 오류입니다.
 *
 * @example
 * // 예제: GET 요청
 * const response = await makeRequest('https://api.example.com/data', 'get');
 *
 * @example
 * // 예제: POST 요청
 * const response = await makeRequest('https://api.example.com/data', 'post', {
 *   headers: { 'Content-Type': 'application/json' },
 *   timeout: 5000
 * }, { key: 'value' });
 *
 * @example
 * // 예제: PUT 요청과 추가 옵션
 * const response = await makeRequest('https://api.example.com/data/1', 'put', {
 *   headers: { 'Content-Type': 'application/json' }
 * }, { key: 'new value' });
 */
export default async (
  url: string,
  method: HttpMethod = "get",
  options?: Partial<CustomKyOptions>, // options를 첫 번째로 배치
  data?: TRequestData, // data를 두 번째로 배치
): Promise<Response> => {
  try {
    let response: Response;

    // 기본 요청 옵션 설정
    const commonOptions: CustomKyOptions = {
      ...options,
      ...(data && (method === "post" || method === "put" || method === "patch")
        ? { json: data }
        : {}),
    };

    // 메서드에 따른 요청 수행
    switch (method) {
      case "get":
        response = await ky.get(url, commonOptions);
        break;
      case "post":
        response = await ky.post(url, commonOptions);
        break;
      case "put":
        response = await ky.put(url, commonOptions);
        break;
      case "delete":
        response = await ky.delete(url, commonOptions);
        break;
      case "patch":
        response = await ky.patch(url, commonOptions);
        break;
      case "head":
        response = await ky.head(url, commonOptions);
        break;
      default:
        return thrower(methodDefaultThrower);
    }

    // 응답 상태 확인
    if (!response.ok) {
      return thrower(`${HttpErr}: ${response.status}`);
    }

    return response;
  } catch (error) {
    throw error;
  }
};
