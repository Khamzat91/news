import React from 'react';
import './index.scss';

const HeaderTopInput = () => {
    return (
        <div className='headerTop-input'>
            <label>
                <input type="text" placeholder='Поиск статьи по заголовку или тексту...'/>
            </label>
            <button>X</button>
        </div>
    );
};

export default HeaderTopInput;