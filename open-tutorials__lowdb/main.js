const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (jsonFile에 해당 것들이 없으면 데이터 타입에 맞춰서 생성해준다.)
db.defaults({ topic: [], author: [] }).write();
// db.get("author")
//   .push({
//     id: 1,
//     name: "egoing",
//     profile: "developer",
//   })
//   .write();
// db.get("topic")
//   .push({
//     id: 1,
//     name: "lowdb",
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

console.log(db.get("topic").find({ name: "lowdb", author: 1 }).value());
