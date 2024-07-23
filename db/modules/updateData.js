import mongoose from "mongoose";

/**
 * @yuxincxoi 24.07.23
 * * 특정 데이터 업데이트
 * @param {string} collection 업데이트 할 컬렉션 이름
 * @param {string} field 업데이트 할 필드 이름
 * @param {string|number|object|array} value 필드에서 찾을 값
 * @param {object} data 변경할 데이터
 */
const updateOneDocument = async (collection, field, value, data) => {
  try {
    // * 업데이트할 문서를 찾기 위한 조건을 정의
    const filter = {};
    filter[field] = value;

    await collection.findOneAndUpdate(filter, { $set: data }, { new: true });
  } catch {
    console.error("Error : ", err);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = updateOneDocument;
