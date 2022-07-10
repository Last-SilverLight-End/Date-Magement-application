// Import dependencies
import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


// 여기에다가 페이지 넣을께요
import Login from "./Login/Login"; // 이건 로그인
import Home from "./Calendar/Home" // 이건 달력
import Signup from "./Login/Signup" // 이건 회원가임
import Find from "./Login/Find";


function Buttons() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path ="/Home" element = {<Home/>}/>
                <Route path ="/Signup" element = {<Signup/>}/>
                <Route path ="/Find" element = {<Find/>}/>
            </Routes>
        </Router>
    );
};

export default Buttons;