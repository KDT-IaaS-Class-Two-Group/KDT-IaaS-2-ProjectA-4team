export default async () => {
  try {
    const response = await fetch("http://localhost:3001/product");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
