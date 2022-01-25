import React from'react';
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import Drop from '../../Drop/Drop'; 
import Field from '../../field/Field.js';





const StepUserName = () => {
   
    return(
            <div className='step-password'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle'></div>
                    <div className='step-circle '></div>
                </div>
                <h3 className='step-password__title'>One last step</h3>
                <Field info='First Name' placeholder='Enter your Name'/>
                <Field info='Last Name' placeholder='Enter your Last Name'/>
                <Drop/>
                <PrevButton />
                <NextButton className='step-button' info="Start" />             
            </div>
    );
}

export default StepUserName;