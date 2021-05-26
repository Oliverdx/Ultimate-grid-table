const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

export default (req, res) => {
  const { query } = req;
  const data = db.get('data');

  if(query.search){
    res.status(200).json(data);
  }else
    res.status(200).json(data);
}

