
import "../css/login.css";
//import axios from 'axios';
import React, { useState, useEffect } from "react";

import "../css/Signup.css";



const Find = () => {


    const [toggled, setToggled] = useState(true);
    const [find_ID, setFind_ID] = useState({ email: "", name: "", birth: "" });
    const [find_PW, setFind_PW] = useState({ id: "", email: "", name: "" });

    const findSubmit_ID = (event) => {
        const { name, value } = event.target;
        setFind_ID({ ...find_ID, [name]: value });
    }
    const findSubmit_PW = (event) => {
        const { name, value } = event.target;
        setFind_PW({ ...find_PW, [name]: value });
    }

    // 버튼 눌러서 작동 할 수 있게 한다. 간단하게 할수 있을거 같은데 능지
    const ToggleClick = (num) => {
        if (num == 1) {
            setToggled(true);
        }
        else if (num == 0) {
            setToggled(false);
        }
        console.log(toggled);
        return;
    }


    /*  useEffect(() =>{
        ToggleClick();
    },[toggle]);*/
    // handleChange 는 여기에다가 맞는지 여부 확인 해야함


    return (
        <div className="App">
            <header className="App-header">
                <div className="btn_group">
                    <button className="find_btn_line" onClick={() => ToggleClick(1)}>
                        아이디 찾기
                    </button>
                    <button className="find_btn_line" onClick={() => ToggleClick(0)}>
                        비밀번호 찾기
                    </button>
                </div>
                {toggled ?
                    <div className="input_group_all">

                        <form onSubmit={findSubmit_ID}>
                            <div className="input_group">
                                <h2 className="input_group">아이디 찾기</h2>
                            </div>

                            <div className="input_group">
                                <label for="Id_inputEmail">Email : </label>
                                <input
                                    id ="Id_pushEmail"
                                    value={find_ID.email}
                                    name="email"
                                    placeholder="이메일"
                                    onChange={findSubmit_ID} />

                            </div>

                            <div className="input_group">
                            <label for="Id_inputName">Name : </label>
                                <input
                                 id ="Id_pushName"
                                    value={find_ID.name}
                                    name="name"
                                    placeholder="이름"
                                    onChange={findSubmit_ID} />

                            </div>

                            <div className="input_group">
                            <label for="Id_inputBirth">Bitrh : </label>
                                <input
                                 id ="Id_pushBirth"
                                    value={find_ID.birth}
                                    name="birth"
                                    placeholder="생년월일 ex)  19980101"
                                    onChange={findSubmit_ID} />
                            </div>

                            <button className="submit_btn" type="submit">
                                submit
                            </button>

                        </form>
                    </div>

                    :

                    <div className="input_group_all">

                        <form onSubmit={findSubmit_PW}>
                            <div className="input_group">
                                <h2 className="input_group">비밀번호 찾기</h2>
                            </div>
                            <div className="input_group">

                                <label for="Pw_inputID">ID : </label>
                                <input
                                     id ="Pw_pushId"
                                    value={find_PW.id}
                                    placeholder = "아이디"
                                    name="id"
                                    onChange={findSubmit_PW} />
                            </div>
                            <div className="input_group">

                                <label for="Pw_inputEmail">Email : </label>
                                <input
                                    id="Pw_pushEmail"
                                    value={find_PW.email}
                                    name="email"
                                    onChange={findSubmit_PW} />
                            </div>

                            <div className="input_group">
                                <label for="Pw_inputName">Name : </label>
                                <input
                                    id="Pw_pushName"
                                    value={find_PW.name}
                                    name="name"
                                    onChange={findSubmit_PW} />
                            </div>
                            <button className="submit_btn" type="submit">
                                submit
                            </button>


                        </form>
                    </div>

                }

            </header >
        </div >
    );
}

export default Find;
