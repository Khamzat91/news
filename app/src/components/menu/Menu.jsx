import React from 'react';
import './index.scss';

const Menu = ({handleExitToggle}) => {
    return (
        <div className='menu'>
            <div className="menu__inner">
                <div className="menu__inner-title">Меню</div>
                <div onClick={handleExitToggle} className="menu__inner-btn">
                    <span/>
                    <span/>
                    <span/>
                </div>
            </div>
        </div>
    );
};

export default Menu;