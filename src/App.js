import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

// 프롭스 작성으로 구조화되어 웹문서 출력 가능.
// 프롭스만 수정해주어도 반영되어 출력
const customers = [
{
  'id' : 1,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '왈왈이',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '헬로우',
  'birthday' : '961322',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : 'http://placeimg.com/64/64/any',
  'name' : '댕댕댕',
  'birthday' : '961522',
  'gender' : '남자',
  'job' : '대학생'
}

]


function App() {
  return ( 
    <div>
  {
    customers.map(c=> {
      return (
        <Customer
          key={c.id}
          id = {c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
        />
      )
    })
  }
    </div>
  );
}

export default App;