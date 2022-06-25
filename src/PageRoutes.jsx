// Import dependencies
import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


import Login from "./Login";
import Home from "./Calendar/Home";

function Buttons() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Main" element={<Home/>}/>
            </Routes>
        </Router>
    );
};

export default Buttons;