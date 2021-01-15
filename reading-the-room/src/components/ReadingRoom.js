import React from 'react';
import leftArrow from '../images/leftArrow.svg';
import chair from '../images/chair.svg';
import dot from '../images/dot.svg';


const ReadingRoom = () => {
    return (
    <div>
        <nav className='left-arrow'><img id='left-arrow' src={leftArrow} alt='left-arrow'/></nav>
        <h1 className='reading-room'>Reading The Room</h1>
        <p className='reading-room-screen'>Being mindful of your surroundings can help make you more comfortable in new environments.
        </p>
        <img id='chair' src={chair} alt="chair"/>
        <img id='dot' src={dot} alt="dot"/>

    </div>
    )
}

export default ReadingRoom;
