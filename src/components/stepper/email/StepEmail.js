import React from 'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/global-context.js";
import NextButton from '../../button/Next.js';
import { useForm } from "react-hook-form";
import './StepEmail.css'






const StepEmail = ({ setStep }) => {
  // const { next } = navigation;
  const [state, dispatch] = useContext(GlobalContext);
  const [email, setEmail] = useState(state.email || "");

  const {
    register,
    formState: { errors }
  } = useForm();


  const submitForm = () => {
    // if (email === "") return;
    console.log(1);
    setStep(1);
    dispatch({
      type: "SAVE_LOGIN",
      email: email
    });

  };
  return (
    <div className='step-email'>
      <div className='step'>
        <div className='step-circle'></div>
        <div className='step-circle opacity'></div>
        <div className='step-circle opacity'></div>
      </div>
      <h3 className='step-email__title'>Registration</h3>
      <p className='step-email__subtitle'>Already a member?<span className='step-email__subtitle__color'> Log in</span></p>
      <form >
      <label class='text-field'>
        <input  class="text-field__input" placeholder="Enter your E-Mail"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i 
            })}
        /> {errors?.email?.type === "pattern" && (
        <p>Alphabetical characters only</p>
      )}
        <span class="text-field__label">E-mail</span>
      </label> 
    </form>
      <NextButton className='next-button'  info='Next' onClick={submitForm} />
      <p className='step-text'>Continuing with Email, you agree to the<span className='step-text__color'>Terms of Use</span>  and <span className='step-text__color' >Privacy Policy</span>.</p>

    </div>
  );
}

export default StepEmail;