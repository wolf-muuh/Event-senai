import React, { Children } from 'react';
import './Container.css'

const Container = () => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;