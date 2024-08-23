import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import { unknownErrMessage } from "static/error/unknown/unknownErr.static";
import { changePasswordError } from "static/hooks/password/changePasswordFetch.static";

/**
 * @crystal23733
 * @date 24.08.01
 *
 * 사용자의 비밀번호를 변경하는 요청을 처리하는 함수입니다.
 *
 * @param {string} password - 현재 비밀번호입니다. 사용자 인증을 위해 필요합니다.
 * @param {string} changePassword - 새로 변경할 비밀번호입니다.
 *
 * @returns {Promise<any>} - 서버로부터 받은 응답 데이터를 반환합니다. 응답 데이터의 형식은 서버에서 정의한 형식에 따릅니다.
 *
 * @throws {Error} - 요청 처리 중 오류가 발생할 경우 해당 오류를 던집니다. 응답 상태가 성공적이지 않거나, 네트워크 오류가 발생할 경우 오류 메시지를 던집니다.
 */
export default async (password: string, changePassword: string) => {
  const EP_CHANGE_PASSWORD = process.env
    .NEXT_PUBLIC_EP_CHANGE_PASSWORD as string;

  try {
    const response = await fetcher(
      serverUrlGenerator(EP_CHANGE_PASSWORD),
      "post",
      {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, changePassword }),
        credentials: "include",
      },
    );

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || changePasswordError);
    }

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(unknownErrMessage);
  }
};
