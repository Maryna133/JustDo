import React from'react';
import Field from '../../components/field/Field';
import './TaskCreation.css'




const TaskCreation = ({active,setActive}) => {
    
    return(
            <div className={active ? "edit active" : "edit"} onClick={() => setActive(false)}>
                <div className='edit-container' onClick={e => e.stopPropagation()}>
                    <p className='edit-title'>Edit task</p>
                    <div className='edit-info'>
                        <Field info='Task Name'/>
                    </div>
                    
                </div>
            </div>
    );
}

export default  TaskCreation;