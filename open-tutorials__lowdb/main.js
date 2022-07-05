const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (jsonFile에 해당 것들이 없으면 데이터 타입에 맞춰서 생성해준다.)
db.defaults({ topic: [], author: [] }).write();
