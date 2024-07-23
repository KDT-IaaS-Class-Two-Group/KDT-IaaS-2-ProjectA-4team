import mongoose from "mongoose";

const updateOneDocument = async (collection, field, value, data) => {
  try {
  } catch {
    console.error("Error : ", err);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = updateOneDocument;
