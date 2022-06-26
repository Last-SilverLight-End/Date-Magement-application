import logo from './logo.svg';
import "./App.css";
//import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";




const Login = () =>{

    const [values, setValues] = useState({ id: "", password: "" });
    const [logincheck, setLoginCheck] = useState(false);
    
    // handleChange 는 여기에다가 맞는지 여부 확인 해야함
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    // handlesubmit 도 따로 loginjs 만들어서 분리 해야됨 나중에 현재야 이야기 하자

    const handleSubmit = (event) =>{

        event.preventDefault();
        setLoginCheck(true);
            
        if(values.id !== "" && values.password.length >= 8){
            console.error("오류 발생!");
        }

    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/Calendar">
          <button>나와라 얍</button>
        </Link> 
        <form onSubmit={handleSubmit}>
                <p>ID</p>
                <input
                    value={values.id}
                    name="id"
                    onChange={handleChange} />
                <p> Password</p>
                <input
                    value={values.password}
                    name="password"
                    onChange={handleChange}
                />

                <button type = "submit" disabled = {logincheck} clasName ="">
                    Login
                </button>
        </form>    
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

export default Login;
