const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

// 사용자 입장에서 api/hello 로 접근 시 무슨 처리를 해줄건지
app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'http://placeimg.com/64/64/1',
            'name' : '왈왈이',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'http://placeimg.com/64/64/2',
            'name' : '헬로우',
            'birthday' : '961322',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 3,
            'image' : 'http://placeimg.com/64/64/3',
            'name' : '댕댕댕',
            'birthday' : '961522',
            'gender' : '남자',
            'job' : '대학생'
          }
          
    ]);
});

// 서버가 동작 중이면 동작 중 이라고 출력 (포트번호를 출력)(따옴표가 아니라 숫자 1 왼쪽에 있는 특수문자임)
app.listen(port, () => console.log(`Listening on port ${port}`)); 
