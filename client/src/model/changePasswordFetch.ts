/**
 * @crystal23733 24.08.01
 * @param name 현재 토큰값이 없어 더미데이터로 대체
 * todo 추후 name -> 토큰으로 변경 필요
 * @param password 기존 비밀번호
 * @param changePassword 변경할 비밀번호
 * @returns responseData 응답 값
 */
export default async (password: string, changePassword: string) => {
  const name = ''; // MongoDB에 있는 유저의 name 값을 사용합니다.
  try {
    const response = await fetch("http://localhost:3001/changePassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, changePassword }),
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