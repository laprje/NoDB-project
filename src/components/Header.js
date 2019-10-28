import React from 'react';
import './header.css';
import {Link} from 'react-router-dom'


function Header() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
            <header className="title">NBA Roster</header>
            <br/>
            <nav>
                <Link className="link" to="/">Your Roster</Link>
            </nav>
            <br/>
            <nav>
                <Link className="link" to="/draft">Sign New Players</Link>
                </nav>
            <br/>
            <br/>
        </div>
    )
}

export default Header;