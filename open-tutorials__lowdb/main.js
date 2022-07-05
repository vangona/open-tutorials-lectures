const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (jsonFile에 해당 것들이 없으면 데이터 타입에 맞춰서 생성해준다.)

// 3강. 기본 데이터 설정
db.defaults({ topic: [], author: [] }).write();

// 4강. 생성
// db.get("author")
//   .push({
//     id: 1,
//     title: "egoing",
//     profile: "developer",
//   })
//   .write();
// db.get("topic")
//   .push({
//     id: 1,
//     title: "lowdb",
//     description: "lowdb is ...",
//     author: 1,
//   })
//   .write();

// db.get("topic")
//   .push({
//     id: 2,
//     name: "mysql",
//     description: "mysql is ...",
//     author: 1,
//   })
//   .write();

// 5강. 조회
// console.log(db.get("topic").find({ title: "lowdb", author: 1 }).value());

// 6강. 수정
db.get("topic").find({ id: 2 }).assign({ title: "MySQL & MariaDB" }).write();
