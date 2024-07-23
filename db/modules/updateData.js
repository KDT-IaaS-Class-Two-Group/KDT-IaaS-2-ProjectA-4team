import mongoose from "mongoose";

/**
 * @yuxincxoi 24.07.23
 * * 하나의 특정 데이터 업데이트
 * @param {string} collection 업데이트 할 컬렉션 이름
 * @param {string} field 업데이트 할 필드 이름
 * @param {string|number|object|array} value 필드에서 찾을 값
 * @param {object} data 변경할 데이터
 */
const updateOneDocument = async (collectionName, field, value, data) => {
  try {
    // * 업데이트할 문서를 찾기 위한 조건을 정의
    const filter = {};
    filter[field] = value;

    // * 컬렉션 가져오기
    const collection = db.collection(collectionName);

    await collection.updateOne(filter, { $set: data }, { new: true });
  } catch (error) {
    console.error("Error : ", error);
  } finally {
    await mongoose.connection.close();
  }
};

/**
 * @yuxincxoi 24.07.23
 * * 여러개의 특정 데이터 업데이트
 * @param {string} collection 업데이트 할 컬렉션 이름
 * @param {string} field 업데이트 할 필드 이름
 * @param {string|number|object|array} value 필드에서 찾을 값
 * @param {object} data 변경할 데이터
 */
const updateAllDocument = async (collectionName, field, value, data) => {
  try {
    // * 업데이트할 문서를 찾기 위한 조건을 정의
    const filter = {};
    filter[field] = value;

    // * 컬렉션 가져오기
    const collection = db.collection(collectionName);

    await collection.updateMany(filter, { $set: data });
  } catch (error) {
    console.error("Error : ", error);
  } finally {
    await mongoose.connection.close();
  }
};

export { updateOneDocument, updateAllDocument };
