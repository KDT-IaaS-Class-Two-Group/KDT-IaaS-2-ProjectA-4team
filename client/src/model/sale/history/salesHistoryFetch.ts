import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async (
  id: number,
  memberID: number,
  productID: number,
  productName: string,
  unitPrice: number,
  quantity: number,
  totalPrice: number,
) => {
  const EP_SALE_HISTORY = process.env.NEXT_PUBLIC_EP_SALE_HISTORY as string;

  const response = await fetcher(serverUrlGenerator(EP_SALE_HISTORY), "post", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      memberID,
      productID,
      productName,
      unitPrice,
      quantity,
      totalPrice,
    }),
  });

  const data = await response.json();

  return data;
};
