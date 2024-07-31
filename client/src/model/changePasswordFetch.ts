/**
 * @crystal23733 24.07.31
 * @param password 기존 비밀번호
 * @param changePassword 변경할 비밀번호
 * @returns responseData 응답 값
 */
export default async (password: string, changePassword: string) => {
  try {
    const response = await fetch("http://localhost:3001/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, changePassword }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "비밀번호 변경요청 실패");
    }
    console.log(responseData);
    return responseData;
  } catch (error) {
    throw error;
  }
};
