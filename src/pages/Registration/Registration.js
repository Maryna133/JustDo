import React from'react';
import './Registration.css'
import picture from '../../../src/image/Frame 8083.svg'
import  cross from '../../../src/image/bx-close.svg'
import RegistrationFormStepper from '../../components/stepper/RegistrationStepper.js'
import GlobalContextProvider from '../../context/global-context.js'




const Registration = ({active,setActive}) => {
    
    return(
            <div className={active ? "registration active" : "registration"} onClick={() => setActive(false)}>
                <div className='registration-container' onClick={e => e.stopPropagation()}>
                    <img className='registration-button' src={cross} alt='close' onClick={() => setActive(false)}/>
                    <div className='registration-content'>
                        <img className='registration-content__img' src={picture} alt='picture'/>
                        <GlobalContextProvider>
                            <RegistrationFormStepper />
                        </GlobalContextProvider>
                    </div>
                </div>
            </div>
    );
}

export default Registration;