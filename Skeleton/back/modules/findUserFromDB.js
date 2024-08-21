/**
 * @eonduck2 24.07.19
 * * 컬렉션과 값을 받아서 특정 유저가 존재하는지 확인
 * @param { string } collection 대상이 되는 컬렉션
 * @param { string } userId 비교하기 위한 유저 ID 값
 * @returns { boolean } 존재한다면 참, 존재하지 않는다면 거짓
 * ! 아직은 사용되지 않고 server에서 한 번에 처리되고 있음
 */
module.exports = async (collection, userId) => {
  try {
    const user = await collection.findOne({ id: userId });
    return user !== null; // user가 존재하면 true, 존재하지 않으면 false를 반환합니다.
  } catch (error) {
    throw new Error("Error checking user existence:", error);
  }
};
