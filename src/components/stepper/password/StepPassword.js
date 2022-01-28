import React from'react';
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../../context/global-context.js";
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import './StepPassword.css'






const StepPassword = ({setStep}) => {
   
   
    const [state, dispatch] = useContext(GlobalContext);
    const [password, setPassword] = useState(state.password || "");
  
    const {
      register,
      formState: { errors }
    } = useForm();
  
  
    const submitForm = () => {
      dispatch({
        type: "SAVE_PASSWORD",
        password: password
      });
      setStep(2);
    };

    
    const prevForm = () => {
      dispatch({
        type: "SAVE_PASSWORD",
        password: password
      });
      setStep(3);
    };


  
    return(
            <div className='step-password'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle'></div>
                    <div className='step-circle opacity'></div>
                </div>
                <h3 className='step-password__title'>Almost done</h3>
                <form >
                  <label class='text-field'>
                      <input  class="text-field__input" placeholder="Enter your password"
                          {...register("password", {
                              required: true,
                              pattern: /^[A-Z0-9._!&@]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                          })}
                      /> {errors?.email?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                            )}
                      <span class="text-field__label">Password</span>
                    </label> 
                </form>
                <form >
                  <label class='text-field'>
                    <input  class="text-field__input" placeholder="Enter your password"
                      {...register("password", {
                        required: true,
                        pattern: /^[A-Z0-9._!&@]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                     })}
                    /> {errors?.email?.type === "pattern" && (
                    <p>Alphabetical characters only</p>
                    )}
                    <span class="text-field__label">Password Confirmation</span>
                  </label> 
                </form>
                <PrevButton onClick={prevForm} />
                <NextButton className='step-button' info='Next'  onClick={submitForm}/>       
                
            </div>
    );
}

export default StepPassword;