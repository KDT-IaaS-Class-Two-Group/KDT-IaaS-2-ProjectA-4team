import fetcher from "src/modules/fetching/fetcher";
import serverUrlGenerator from "src/modules/generator/serverUrlGenerator";
import { unknownErrMessage } from "static/error/unknown/unknownErr.static";
import { changePasswordError } from "static/hooks/password/changePasswordFetch.static";

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
      throw new Error(
        responseData.message || changePasswordError,
      );
    }

    return responseData;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(unknownErrMessage);
  }
};
