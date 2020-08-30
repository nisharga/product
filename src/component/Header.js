import React from 'react';
// import Logo from '../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="topbar">
            <nav>
                <a href="/shop">our shop</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manage Your Order</a>
            </nav>
        </div>
    );
};

export default Header;