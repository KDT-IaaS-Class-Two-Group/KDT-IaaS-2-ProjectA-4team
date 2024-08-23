import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

/**
 * @yuxincxoi 24.08.02
 * * 제품 데이터 가져오기
 * @returns array 제품 데이터
 */

export default async () => {
  const EP_PRODUCTS = process.env.NEXT_PUBLIC_EP_PRODUCTS as string;

  const response = await fetcher(serverUrlGenerator(EP_PRODUCTS), "get", {
    credentials: "include",
  });

  const data = await response.json();

  return data;
};
