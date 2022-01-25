import React from'react';
import { useState } from 'react';
import './Field.css'





const FieldEmail= (props) => {
  const{onChange} = props;
  const[password, setPassword] = useState('')    
  const[passwordError, setPasswordError] = useState('')
 


  const passwordHandler = (e) =>{

      setPassword(e.target.value)
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  
      if (!re.test(String(e.target.value).toLowerCase())){
          setPasswordError('Incorrect data')
      } else { 
        setPasswordError('')}
   }
    return(
      <form action="#">
      <label class='text-field'>
        <input  class="text-field__input" placeholder="Enter your password" value={password} 
                                                                          onChange={e => passwordHandler(e)}  
                                                                          onChange={onChange}
                                                                          type="text" id="password" name="password"/>
        <span class="text-field__label">
          Password
        </span>
        {passwordError && <div className='input__error'>{passwordError}</div>}
      </label>
    </form>
    );
}

export default FieldEmail;