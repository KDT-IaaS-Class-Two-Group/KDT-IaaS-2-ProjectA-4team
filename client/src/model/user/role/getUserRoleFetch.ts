import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";

export default async (): Promise<number> => {
  const EP_U_INFO = process.env.NEXT_PUBLIC_EP_U_INFO as string;

  try {
    const response = await fetcher(serverUrlGenerator(EP_U_INFO), "get", {
      credentials: "include",
    });

    const data = await response.json();
    return data.roleID; // 예: 'admin' 또는 'user'
  } catch (error) {
    throw error;
  }
};
