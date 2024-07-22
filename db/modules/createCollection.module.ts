import mongoose from "mongoose";
import Member from "../../shared/Member";

// MongoDB 연결 URI
const uri = "mongodb://localhost:27017/rockcodersERP";

// Mongoose 연결
mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB server"))
  .catch((err: Error) => console.error("Error connecting to MongoDB:", err));

const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

console.log(exampleSchema);

const ExampleModel = mongoose.model("Example", exampleSchema);
console.log(typeof ExampleModel);

async function createDocument() {
  try {
    // 데이터 삽입
    const doc = new ExampleModel({ name: "Alice", age: 25 });
    await doc.save();
    console.log("Document saved:", doc);
  } catch (err) {
    console.error("Error saving document:", err);
  } finally {
    // 연결 종료
    mongoose.connection.close();
  }
}

createDocument();
// // 스키마 정의
// const Schema = mongoose.Schema;

// const exampleSchema = new Schema({
//   name: { type: String, required: true },
//   age: { type: Number, required: true },
// });

// // 모델 정의
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
