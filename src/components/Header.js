import React from 'react';
import Hstyels from '../css/Header.module.css';

const Header = () => {
    return (
        <div className={ Hstyels.headerMain }>
            <h1>지나의 개발 일기</h1>
        </div>
    );
};

export default Header;