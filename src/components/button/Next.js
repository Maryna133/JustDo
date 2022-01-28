import React from'react';
import './Next.css'
import arrow from '../../../src/image/VectorArrow.svg'





const NextButton = (props) => {
    const {onclick} =props;
    return(
        <button className='next-button' onClick={props.onClick}>{props.info}
            <img className='next-buttom-img' src={arrow} /> 
        </button>
    );
}

export default NextButton;