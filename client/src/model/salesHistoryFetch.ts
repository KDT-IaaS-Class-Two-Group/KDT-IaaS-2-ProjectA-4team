export default async (
  id: number,
  memberID: number,
  productID: number,
  productName: string,
  unitPrice: number,
  quantity: number,
  totalPrice: number,
) => {
  const response = await fetch("http://localhost:3001/salehistory", {
    method: "POST",
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

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
