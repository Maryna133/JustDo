import React from'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/global-context.js";
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import './StepPassword.css'
import Field from '../../field/Field.js';





const StepPassword = (navigation) => {
   
    const { next } = navigation;
    const [state, dispatch] = useContext(GlobalContext);
    const [password, setPassword] = useState(state.password || "");
  
    const submitForm = () => {
      if (password === "") return;
  
      dispatch({
        type: "SAVE_PASSWORD",
        password: password
      });
      next();
    };
    
    return(
            <div className='step-password'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle'></div>
                    <div className='step-circle opacity'></div>
                </div>
                <h3 className='step-password__title'>Almost done</h3>
                <Field onChange={(e) => setPassword(e.target.value)} info='Password' placeholder='Enter your password'/>
                <Field onChange={(e) => setPassword(e.target.value)} info='Password Confirmation' placeholder='Enter your password'/>
                <PrevButton />
                <NextButton className='step-button' onClick={submitForm} />       
                
            </div>
    );
}

export default StepPassword;