import React from'react';
import logo from '../../../src/image/logo1.svg'
import './MenuTable.css'





const MenuTable = () => {
    return(
        <header className='header-table'>
                <div className='header-logo'>
                    <img className='header-logo__img'  src ={logo} alt='logo'/>
                    <p className='header-logo__title'>JustDo</p>
                </div>
                <nav className='header-navigation'>
                    <ul className='header-list'>
                        <li className='header-list__item'>Oportunities</li>
                        <li className='header-list__item'>Templates</li>
                        <li className='header-list__item'>For teams</li>
                        <li className='header-list__item'>Resources</li>
                    </ul>
             
                </nav>
            </header>
  
    );
}

export default MenuTable;