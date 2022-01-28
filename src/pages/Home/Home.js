import React, { useState } from'react';
import './Home.css'
import './HomeTable.css'
import ellipse from '../../../src/image/Ellipse 2.svg'
import illustration from '../../../src/image/Illustration.svg'
import MenuDecstop from '../../components/menu/MenuDecstop';
import MenuTable from '../../components/menu/MenuTable';
import burger from '../../../src/image/Vector.svg'
import Registration from '../Registration/Registration';



const Home = () => {
    const [registrationActive, setRegistrationActive] = useState(false)
    return(
   <div className='home-container'>
        <div className='blur'/>
            <header className='home-header'>
            <img  className='header-burger' src={burger} alt='burger'/>
                <MenuDecstop/>
                <MenuTable/>
                
                <div className='header-button'>
                        <button className='header-button__registration' onClick={() =>setRegistrationActive(true) }>Registration</button>
                        <button className='header-button__login'>Log in</button>
                      <Registration active={registrationActive} setActive={setRegistrationActive}/>
                       
                </div>
            </header>
      
            <div className='home-section'>
                <div className='justgo-info'>
                    <img className='justgo-info__img' src={ellipse} alt='ellipse'/>
                    <h1 className='justgo-info__title'>Be productive <span className='justgo-info__title___color' >with JustDo</span></h1>
                    <button className='justgo-info__button'>To begin</button>
                </div>  
                     <img className='justdo-img' src={illustration} alt='illustration'/>
            </div>

        </div>

    );
}

export default Home;