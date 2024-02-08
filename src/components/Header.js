import React from 'react';
import Hstyels from '../css/Header.module.css';

const Header = () => {
    return (
        <div className={ Hstyels.headerMain }>
            <h1>지나의 게시판</h1>
        </div>
    );
};

export default Header;