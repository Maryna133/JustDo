import React from'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/global-context.js";
import NextButton from '../../button/Next';
import FieldEmail from '../../field/FieldEmail.js';
import './StepEmail.css'





const StepEmail = ({ navigation }) => {
const { next } = navigation;
  const [state, dispatch] = useContext(GlobalContext);
  const [email, setEmail] = useState(state.email || "");

  const submitForm = () => {
    if (email === "") return;

    dispatch({
      type: "SAVE_LOGIN",
      email: email
    });
    next();
  };
    return(
            <div className='step-email'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle opacity'></div>
                    <div className='step-circle opacity'></div>
                </div>
                <h3 className='step-email__title'>Registration</h3>
                <p className='step-email__subtitle'>Already a member?<span className='step-email__subtitle__color'> Log in</span></p>
                <FieldEmail  onChange={(e) => setEmail(e.target.value)}/>
                <NextButton onClick={submitForm}/>
                <p className='step-text'>Continuing with Email, you agree to the<span className='step-text__color'>Terms of Use</span>  and <span className='step-text__color' >Privacy Policy</span>.</p>
                
            </div>
    );
}

export default StepEmail;