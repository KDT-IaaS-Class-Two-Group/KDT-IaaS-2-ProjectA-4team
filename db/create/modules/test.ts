// import mongoose from "mongoose";
// import Member from "../../shared/Member";

// // MongoDB 연결 URI
// const uri = "mongodb://localhost:27017/rockcodersERP";

// // Mongoose 연결
// mongoose
//   .connect(uri)
//   .then(() => console.log("Connected to MongoDB server"))
//   .catch((err: Error) => console.error("Error connecting to MongoDB:", err));

// const Schema = mongoose.Schema;

// const exampleSchema = new Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
// });

// const ExampleModel = mongoose.model("Example", exampleSchema);

// async function createDocument() {
//   try {
//     // 데이터 삽입
//     const doc = new ExampleModel({ name: "Alice", age: 25 });
//     await doc.save();
//     console.log("Document saved:", doc);
//   } catch (err) {
//     console.error("Error saving document:", err);
//   } finally {
//     // 연결 종료
//     mongoose.connection.close();
//   }
// }

// createDocument();

import Creator from "../CREATOR";

const testCreator = new Creator("mongodb://localhost:27017/rockcodersERP");

const testSchema = testCreator.createSchema("name", {
  type: String,
  require: true,
});

const testModel = testCreator.createModel("hi", testSchema);

// testCreator.insertData(testModel, { name: "ㅎㅇ", age: 123 });

testCreator.insertManyData(testModel, [
  { name: "John Doe", age: 30, email: "john@example.com" },
  { name: "Jane Doe", age: 25, email: "jane@example.com" },
]);
