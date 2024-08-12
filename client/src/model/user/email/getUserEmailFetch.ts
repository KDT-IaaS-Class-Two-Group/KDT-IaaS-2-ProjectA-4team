export default async (): Promise<string> => {
  try {
    const response = await fetch("http://localhost:3001/getUserEmail", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("사용자 이메일을 가져오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
