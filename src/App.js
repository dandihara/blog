/* eslint-disable */

import logo from './logo.svg';
import jordan_img from './jordan1.jpg';
import './App.css';
import React, {useState} from 'react';

function App() {
  
  let list = 'Jordan 1';
  function test(){
    return 100
  }
  let posts = '데블스도어';

  let changeTitle = '여자 코트 추천';
  
  let [글제목 , 글제목변경] = useState(['오늘의 식단','jordan1','강남 우동 맛집','TomBoy']); //변수처럼 저장하는 공간
 
  let [likeCount,카운트변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; //deep copy
    newArray[0] = changeTitle;
    글제목변경(newArray); 
   //['오늘의 식단','jordan1','강남 우동 맛집','TomBoy']
   // ['여자 코트 추천','jordan1','강남 우동 맛집','TomBoy']
   //
  }

  function 제목리스트정렬(){
    var arr = [...글제목];
    arr.sort()
    글제목변경(arr)
    console.log(arr)
  }


  return (
    <div className="App">
      <div className = "black-nav">
        <div>MOON BLOG</div>
      </div>
      <button onClick = {() => {제목바꾸기()}}>제목변경 버튼</button>
      <button onClick={()=>{제목리스트정렬()}}> 정렬 </button>
      <img src = {jordan_img}/>
      <Board title={글제목[0]}/>
      <hr/>
      <Board title = {글제목[1]}/>
      <Modal></Modal>
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

function Board(props){
  return (
    <div className = 'list'>
      <h3>{props.title}</h3>
      <p>3월 글</p>
    </div>
  )
}

export default App;
