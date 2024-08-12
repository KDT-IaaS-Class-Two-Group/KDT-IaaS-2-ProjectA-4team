import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async () => {
  const EP_PRODUCTS = process.env.NEXT_PUBLIC_EP_PRODUCTS as string;

  const response = await fetcher(serverUrlGenerator(EP_PRODUCTS), "get", {
    credentials: "include",
  });

  const data = await response.json();

  return data;
};
