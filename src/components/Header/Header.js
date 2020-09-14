import React from 'react';
import headerLogoPath from '../../images/header-logo.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={headerLogoPath} alt="Логотип" />
        </header>
    );
}

export default Header;