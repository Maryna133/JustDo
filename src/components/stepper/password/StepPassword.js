import React from'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/global-context.js";
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import './StepPassword.css'
import FieldPassword from '../../field/FieldPassword.js';





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
                <FieldPassword onChange={(e) => setPassword(e.target.value)} />
                <FieldPassword onChange={(e) => setPassword(e.target.value)}/>
                <PrevButton onClick={submitForm}/>
                <NextButton className='step-button' />       
                
            </div>
    );
}

export default StepPassword;