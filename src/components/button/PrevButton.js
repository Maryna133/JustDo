import React from'react';
import './PrevButton.css'
import arrow from '../../../src/image/arrow.svg'





const PrevButton = () => {
    return(
        <button className='prev-button'>
            <img className='prev-buttom-img' src={arrow}/> 
        </button>
    );
}

export default PrevButton;