import logo from '../logo.svg';
import "../css/login.css";
//import axios from 'axios';
import React, { useState } from "react";
import { Link } from "react-router-dom";




const Signup = () =>{

  const [values, setValues] = useState({ id: "", password: "" });
  const [logincheck, setLoginCheck] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    // handleChange 는 여기에다가 맞는지 여부 확인 해야함
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    // handlesubmit 도 따로 loginjs 만들어서 분리 해야됨 나중에 현재야 이야기 하자

    const handleInput = (event) =>{
        const {value,name} = event.target;
        setValues({[name] : value});
    }

    const handleJoin = () => {

    }

    return (
        <div class="LoginDonghee">
          <span className="logo">Semonet</span>
          <form class="loginBox">
            <input  
              type="text"
              className="id loginInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              name="email"
              onChange={handleInput}
            />
            <input
              type="password"
              className="password loginInput"
              placeholder="비밀번호"
              name="password"
              onChange={handleInput}
            />
            <button
              type="button"
              onClick={handleJoin}
              className={
                email.includes('@') && password.length > 5
                  ? 'activeBtn'
                  : 'inactiveBtn'
              }
            >
              로그인
            </button>
          </form>
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      );
}

export default Signup;
