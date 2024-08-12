import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async (
  memberID: string,
  products: Array<{ productID: string; quantity: number }>,
  totalPrice: number,
  saleDate: string,
) => {
  const EP_SALE_HISTORY = process.env.NEXT_PUBLIC_EP_SALE_HISTORY as string;

  const response = await fetcher(serverUrlGenerator(EP_SALE_HISTORY), "post", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      memberID,
      products,
      totalPrice,
      saleDate,
    }),
    credentials: "include",
  });

  const data = await response.json();

  return data;
};
