const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

export default (req, res) => {
  const data = db.get("data");

  res.status(200).json(data);
};
