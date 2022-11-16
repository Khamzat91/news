import React from 'react';
import './index.scss';

const Layout = ({children}) => {
    return (
        <div className='layout'>
            {children}
        </div>
    );
};

export default Layout;