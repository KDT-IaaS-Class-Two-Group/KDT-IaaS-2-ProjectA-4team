import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async (
  email: string,
  products: Array<{ productName: string; quantity: number }>,
  saleDate: string,
) => {
  const EP_SALES = process.env.NEXT_PUBLIC_EP_SALES as string;
  const EP_SALE_HISTORY = process.env.NEXT_PUBLIC_EP_SALE_HISTORY as string;
  const LOG = process.env.NEXT_PUBLIC_LOG as string;
  const LOG_PURCHASE = process.env.NEXT_PUBLIC_LOG_PURCHASE as string;

  const response = await fetcher(
    serverUrlGenerator(EP_SALES, EP_SALE_HISTORY),
    "post",
    {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        products,
        saleDate,
      }),
      credentials: "include",
    },
  );

  try {
    await fetcher(serverUrlGenerator(LOG, LOG_PURCHASE), "post", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, products, saleDate }),
      credentials: "include",
    });
  } catch (error) {
    console.log("재고추가 중 에러 발생:", error);
  }

  const data = await response.json();

  return data;
};
