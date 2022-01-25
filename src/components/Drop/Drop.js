import React from'react';
import { useState } from 'react';
import upload from '../../image/pic-upload.svg'
import './Drop.css'



const Drop = () => {
    const {drag, SetDrag} = useState(false);

    const dragStartHandler = (e) =>{
        e.preventDefault()
        SetDrag(true)
    }

    const dragLeaveHandler = (e) =>{
        e.preventDefault()
        SetDrag(false)
    }




    return(
            <div className='drop'   onDragStart={e => dragStartHandler()}
                                    onDragLeave={e => dragLeaveHandler()}
                                    onDragOver={e => dragStartHandler()}>
                <img src={upload}  alt='upload'className='drop-img'/>
                <p className='drop-title'>Drop your image here, or <span className='drop-title color'>browse </span></p>
                <div className='drop-info'>
                    <p className='drop-info__text'>Supports: PNG, JPG, SVG</p>
                    <div className='drop-info__circle'></div>
                    <p className='drop-info__text'>Max size: 512x512 px</p>
                </div>
            </div>
    );
}

export default Drop;