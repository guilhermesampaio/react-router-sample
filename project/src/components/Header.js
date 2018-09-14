import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';

class Header extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }

}

export default Header;