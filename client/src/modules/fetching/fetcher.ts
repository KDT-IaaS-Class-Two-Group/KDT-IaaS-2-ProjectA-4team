import { TFetcher } from "./fetcher.interface";
import { TRequestData } from "./fetcher.interface";

export default async (url: string, method: TFetcher, data?: TRequestData) => {
  try {
    const { default: ky } = await import("@toss/ky");
    const casedMethod = method.toLowerCase();

    let response: Response;
    switch (casedMethod) {
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
        throw new Error(`Unsupported method: ${casedMethod}`);
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
