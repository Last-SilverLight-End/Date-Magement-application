import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Link } from "react-router-dom";


/*const Login = () =>{


}*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/Main">
          <button>나와라 얍</button>
        </Link> 
        <p>
         여기는 Login Page 입니다. 시작해볼까요?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
