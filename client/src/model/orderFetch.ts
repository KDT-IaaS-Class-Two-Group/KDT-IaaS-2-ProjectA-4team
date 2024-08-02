/**
 * @crystal23733 24.08.01
 * todo 유저의 정보는 추후 토큰으로 대체 필요
 * @param {string} name 유저 더미데이터
 */
export default async (name: string) => {
  try {
    const response = await fetch(`http://localhost:3001/orders/${name}`);
    const responseData = await response.json();
    if (!response.ok) {
      throw new Error(responseData.message || "주문내역 조회 실패");
    }
    return responseData;
  } catch (error) {
    console.error("주문내역 조회 중 클라이언트 오류", error);
    throw error;
  }
};
