import url3001Generator from "src/modules/generator/url3001Generator";

/**
 * @crystal23733 24.08.01
 * @param name
 * @param password 기존 비밀번호
 * @param changePassword 변경할 비밀번호
 * @returns responseData 응답 값
 */
export default async (password: string, changePassword: string) => {
  const EP_CHANGE_PASSWORD = process.env
    .NEXT_PUBLIC_EP_CHANGE_PASSWORD as string;

  const name = ""; // MongoDB에 있는 유저의 name 값을 사용합니다.
  try {
    const response = await fetch(url3001Generator(EP_CHANGE_PASSWORD), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, changePassword }),
      credentials: "include",
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
