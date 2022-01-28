import React, { useState } from'react';
import './Setting.css'
import bell from '../../../src/image/bell.svg'
import setting from '../../../src/image/bx-settings.svg'
import logout from '../../../src/image/bx-log-out.svg'
import avatar from '../../../src/image/avatar.png'





const Setting = () => {
    const [active, SetActive] = useState(false)
    
    return(
            
        <div className='sidebar-setting'>
            <div className='sidebar-profile' onClick={e => SetActive(!active)}>
                <img className='sidebar-profile__img' src={avatar} alt='WA'/>
                <p className='sidebar-profile__info'>Whitney A.</p>
                <span></span>
            </div>
            {active &&(
                    <div className='setting-content' >
                        <div className='setting-item profile'>
                            <img className='sidebar-profile__img' src={avatar} alt='WA'/>
                            <div className='sidebar-profile__info'>
                                <p className='sidebar-profile__info'>Whitney A.</p>
                                <p className='sidebar-profile__info email'>Whitneya@gmail.com</p>
                            </div>
                        </div>
                        <div className='setting-item'>
                            <img className='setting-img' src={setting} alt='setting-img'/>
                            <p className='setting-text'>Settings</p>
                        </div>
                        <div className='setting-item'>
                            <img className='setting-img' src={bell} alt='setting-img'/>
                            <p className='setting-text'>Notifications</p>
                        </div>
                        <div className='setting-item'>
                            <img className='setting-img' src={logout} alt='setting-img'/>
                            <p className='setting-text'>Log out</p>
                        </div>
                    </div>
            )}

            
        </div>
    );
}
export default Setting;