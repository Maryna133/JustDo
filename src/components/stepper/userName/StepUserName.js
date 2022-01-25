import React from'react';
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import Drop from '../../Drop/Drop'; 
import FieldPassword from '../../field/FieldPassword.js';





const StepUserName = () => {
   
    return(
            <div className='step-password'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle'></div>
                    <div className='step-circle '></div>
                </div>
                <h3 className='step-password__title'>One last step</h3>
                <FieldPassword />
                <FieldPassword/>
                <Drop/>
                <PrevButton/>
                <NextButton className='step-button' />             
            </div>
    );
}

export default StepUserName;