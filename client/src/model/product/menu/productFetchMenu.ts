import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async () => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;

  const response = await fetcher(serverUrlGenerator(EP_PRODUCT));

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
