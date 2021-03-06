import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div className="header">
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            <header className="title">NBA Roster</header>
            <br />
            <div className="nav-container">
                <nav>
                    <Link className="link" to="/">Your Roster</Link>
                </nav>
                <br />
                <nav>
                    <Link className="link" to="/draft">Sign New Players</Link>
                </nav>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Header;