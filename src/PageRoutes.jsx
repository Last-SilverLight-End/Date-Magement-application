// Import dependencies
import React from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


import Login from "./Login";

function Buttons() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
            </Routes>
        </Router>
    );
};

export default Buttons;