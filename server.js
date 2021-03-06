const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : conf.host,
  user : conf.user,
  password : conf.password,
  port : conf.port,
  database : conf.database
});

connection.connect();

// 사용자 입장에서 api/hello 로 접근 시 무슨 처리를 해줄건지
app.get('/api/customers', (req, res) => {
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields) => {
        res.send(rows);
      }
    );
});

// 서버가 동작 중이면 동작 중 이라고 출력 (포트번호를 출력)(따옴표가 아니라 숫자 1 왼쪽에 있는 특수문자임)
app.listen(port, () => console.log(`Listening on port ${port}`)); 
