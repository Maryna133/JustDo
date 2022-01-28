import React from'react';
import './PrevButton.css'
import arrow from '../../../src/image/arrow.svg'





const PrevButton = (props) => {
    return(
        <button className='prev-button' onClick={props.onClick}>
            <img className='prev-buttom-img' src={arrow}/> 
        </button>
    );
}

export default PrevButton;