import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            <header className="title">NBA Roster</header>
            <nav>
                <Link className="link" to="/">Your Roster</Link>
                <Link className="link" to="/draft">Sign New Players</Link>
            </nav>
        </div>
    )
}

export default Header;