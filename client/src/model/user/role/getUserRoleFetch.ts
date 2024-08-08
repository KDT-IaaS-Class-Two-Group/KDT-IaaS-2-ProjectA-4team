export default async (): Promise<number> => {
  try {
    const response = await fetch("http://localhost:3001/user-info", {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error("사용자 역할 정보를 가져오는 데 실패했습니다.");
    }
    const data = await response.json();
    return data.roleID; // 예: 'admin' 또는 'user'
  } catch (error) {
    console.error("사용자 역할 정보 가져오기 중 오류:", error);
    throw error;
  }
};
