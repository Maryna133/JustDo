import React from'react';

import logo from '../../../src/image/logo1.svg'
import './Dashboard.css'
import CreatButton from '../../components/button/Creat';
import Setting from '../../components/setting/Setting.js'






const Dashboard = () => {
  
    return(
        <div className='page-container'>
            <div className='sidebar-container'>
                <div className='sidebar-logo'>
                    <img className='logo-img' src={logo} alt='logo'/>
                    <p className='logo-title'>JustDo</p>
                </div>
        
                <div className='sidebar-category'>
                    <p className='sidebar-title'>Category</p>

                </div>
                <div className='sidebar-tags'>
                    <p className='sidebar-title'>tags</p>

                </div>
                <Setting />
            </div>
                
            <div className='dashboard-container'>
                <CreatButton info='Create group'/>
        
            </div>
        </div>
  
    );
}

export default Dashboard;