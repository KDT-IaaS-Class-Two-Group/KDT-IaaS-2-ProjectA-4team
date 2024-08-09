import { TFetcher } from "./fetcher.interface";
import { TRequestData } from "./fetcher.interface";

/**
 * @eonduck2 24.08.09
 * * 지정된 메서드와 URL을 사용하여 HTTP 요청을 수행합니다.
 *
 * @async
 * @param {string} url - 요청을 보낼 URL
 * @param {TFetcher} method - 사용할 HTTP 메서드 (예: 'get', 'post', 'put', 'delete')
 * @param {TRequestData} [data] - 요청과 함께 보낼 데이터 (POST 및 PUT 메서드용)
 * @returns {Promise<Response>} Response 객체로 해결되는 Promise
 * @throws {Error} 요청 실패 시 또는 지원되지 않는 메서드 사용 시 오류 발생
 */
export default async (url: string, method: TFetcher, data?: TRequestData) => {
  try {
    const { default: ky } = await import("@toss/ky");

    let response: Response;
    switch (method) {
      case "get":
        response = await ky.get(url);
        break;
      case "post":
        response = await ky.post(url, { json: data });
        break;
      case "put":
        response = await ky.put(url, { json: data });
        break;
      case "delete":
        response = await ky.delete(url);
        break;
      default:
        throw new Error(`Unsupported method: ${method}`);
    }

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
};
