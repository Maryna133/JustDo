import React from'react';
import { useState } from 'react';
import './Field.css'





const FieldEmail= (props) => {
  const{onChange} = props;
  const[email, setEmail] = useState('')    
  const[emailError, setEmailError] = useState('')
  


 


 const emailHandler = (e) =>{
      setEmail(e.target.value)
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/  
      if (!re.test(String(e.target.value).toLowerCase())){
          setEmailError('Incorrect data')
      } else setEmailError('')
  
   }
    return(
      <form action="#">
      <label class='text-field'>
        <input  class="text-field__input" placeholder="Enter your E-Mail" value={email} onChange={e => emailHandler(e)}  value={email} onChange={e => emailHandler(e)}  
                                                                       onChange={onChange}
                                                                          type="text" id="email" name="email"/>
        <span class="text-field__label">
          E-Mail
        </span>
        {emailError && <div className='input__error'>{emailError}</div>}
      </label>
    </form>
    );
}

export default FieldEmail;