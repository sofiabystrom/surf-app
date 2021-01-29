import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class Footer extends Component {

    render(){

        return(
            <footer>
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Orter</NavLink></li>
                        <li><NavLink to="/about/">Om</NavLink></li>
                    </ul>
                </nav>
            </footer>
        );
    }
}
export default Footer;
