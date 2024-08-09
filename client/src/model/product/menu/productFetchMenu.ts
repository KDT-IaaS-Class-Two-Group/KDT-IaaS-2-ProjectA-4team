import url3001Generator from "src/modules/generator/url3001Generator";

export default async () => {
  const EP_PRODUCT = process.env.NEXT_PUBLIC_EP_PRODUCT as string;

  const response = await fetch(url3001Generator(EP_PRODUCT), {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();

  return data;
};
