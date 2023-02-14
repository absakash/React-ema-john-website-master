import { logDOM } from '@testing-library/react';
import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css"
const Header = () => {
    return (
        <div>
            <nav className='header-nav'>
                <img src={logo} alt="" />
                <div>
                    <a href="home">Home</a>
                    <a href="product">Product</a>
                    <a href="manage">Manage</a>
                    <a href="login">LogIn</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;