import React from'react';
import { useContext, useState } from "react";
import { GlobalContext } from "../../../context/global-context.js";
import { useForm } from "react-hook-form";
import NextButton from '../../button/Next';
import PrevButton from '../../button/PrevButton.js'
import Drop from '../../Drop/Drop'; 
import Field from '../../field/Field.js';





const StepUserName = ({setStep}) => {
    const [state, dispatch] = useContext(GlobalContext);
    const [name, setName] = useState(state.name|| "");
    const [lastname, setLastName] = useState(state.name|| "");

    const {
        register,
        formState: { errors }
      } = useForm();
    
    
  
    const submitForm = () => {
        dispatch({
        type: "SAVE_USER",
        name: name,
        lastname:lastname
      });
      setStep(2);
    };

    const prevForm = () => {
        dispatch({
            type: "SAVE_USER",
            name: name,
            lastname:lastname
          });
        setStep(4);
      };

   
    return(
            <div className='step-password'>
                <div className='step'>
                    <div className='step-circle'></div>
                    <div className='step-circle'></div>
                    <div className='step-circle '></div>
                </div>
                <h3 className='step-password__title'>One last step</h3>
                <form >
                  <label class='text-field'>
                      <input  class="text-field__input" placeholder="Enter your First"
                          {...register("firstname", {
                              required: true
                          })}
                      /> 
                      <span class="text-field__label">First Name</span>
                    </label> 
                </form>
                <form >
                  <label class='text-field'>
                    <input  class="text-field__input" placeholder="Enter your Last Name"
                      {...register("lastname", {
                        required: true
                     })}
                    /> 
                    <span class="text-field__label">Last Name</span>
                  </label> 
                </form>
                <Drop/>
                <PrevButton  onClick={prevForm}/>
                <NextButton className='step-button' info='Start' onClick={submitForm} />             
            </div>
    );
}

export default StepUserName;