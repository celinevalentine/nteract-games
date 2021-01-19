import React from 'react';
import './PromptBox.css';

const PromptBox = ({gameName,msg}) => {
    return (
        <div className='promptOverlay'>
            <h3 className='gameTitle'>{gameName}</h3>
            <p className='promptMsg'>{msg}</p>
            <button className='continueBtn'>Continue</button>
        </div>
    )
}

export default PromptBox;
