import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../css/Calendar.css';
import "../css/main.css"
import MenuBar from '../common/menuBar';

const Home = () => {

    const [value, setValue] = useState(new Date());

    return(
        <div>
            <MenuBar>
            </MenuBar>
            <div className='Cal-body'>
                <Calendar onChange={setValue} value={value} locale={"en-US"} />
            </div>
        </div>
    );
};

export default Home;