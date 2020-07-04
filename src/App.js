import React from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

// 프롭스 작성으로 구조화되어 웹문서 출력 가능.
// 프롭스만 수정해주어도 반영되어 출력
const customer = {
  'name' : '왈왈이',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
}


function App() {
  return ( 
  <Customer
    name = {customer.name}
    birthday = {customer.birthday}
    gender = {customer.gender}
    job = {customer.job}
    />
  );
}

export default App;