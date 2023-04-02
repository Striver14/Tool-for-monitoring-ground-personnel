const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.static('build'));

app.get('/api/officers', async (req, res) => {
  const conn = await mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'database_name'
  });
  const [rows] = await conn.query('SELECT * FROM officers');
  conn.end();
  res.json(rows);
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
