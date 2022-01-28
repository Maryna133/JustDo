import React from'react';
import { useState } from'react';
import './Creat.css'
import plus from '../../../src/image/plus.svg'
import TaskCreation from '../../pages/task-creation/TaskCreation.js'





const CreatButton = (props) => {
    const [createActive, SetCreateActive] = useState(false)
    return(
        <div className='creat'>
            <button className='creat-button' info='Create group' onClick={() =>SetCreateActive(true)}>{props.info}
            <img className='creat-buttom__img' src={plus} alt='plus' /> 
        </button>
         <TaskCreation active={createActive} setActive={SetCreateActive}/>
        </div>
        
    );
}

export default CreatButton;