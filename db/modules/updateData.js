import mongoose from "mongoose";

const updateOneDocument = async (collection, field, value, data) => {
  try {
    // * 업데이트할 문서를 찾기 위한 조건을 정의
    const filter = {};
    filter[field] = value;
  } catch {
    console.error("Error : ", err);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = updateOneDocument;
