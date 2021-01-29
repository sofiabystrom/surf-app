import React, { Component } from 'react';

/* assets */
import logo from '../assets/surfkollen-logo.png';


export class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-container">
                <img src={logo} className="header-logo" alt="logo" />
                </header>
            </div>
        )
    }
}

export default Header