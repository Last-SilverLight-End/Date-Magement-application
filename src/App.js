import logo from './logo.svg';
import './App.css';
import React from 'react';

let posts = ['개발 blog','맞긴 하네'];

function UseFunction (){
  return 150
};

// <div style = { { color : 'gray; } };
let Header = { color : 'gray' , fontSize : '30px' };

function App() {
  return (
    <div className="App">
      <div className="black-nav">
        {/*JSX에서 style을 집어 넣을 때 style = { { obj } }*/}
        <div style = { Header }>{posts[0]}</div>
      </div>
      <h4>{posts[1]}</h4>
      <div>{UseFunction()}</div>
      <img src = {logo}/>
    </div>
  );
}

export default App;
