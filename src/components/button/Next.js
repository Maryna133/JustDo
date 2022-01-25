import React from'react';
import './Next.css'
import arrow from '../../../src/image/VectorArrow.svg'





const NextButton = (props) => {
    const {onclick} =props;
    return(
        <button className='next-button' >Next
            <img className='next-buttom-img' src={arrow} onClick={onclick}/> 
        </button>
    );
}

export default NextButton;