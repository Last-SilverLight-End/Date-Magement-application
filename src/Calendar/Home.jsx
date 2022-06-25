import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/Calendar.css';
import "../css/main.css"

function Home() {

    const [value, onChange] = useState(new Date());

    return(
        <header>
            <div className='Title'>
                <div className='TitleText'>
                    Main
                </div>
            </div>
            <div>
                <Calendar onChange={onChange} value={value} locale={"en-US"} />
            </div>
        </header>
    );
};

export default Home;