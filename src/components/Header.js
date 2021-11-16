import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md">
                    <div><a>mostafa</a></div>
                    <ul className="nav-bar navbar-collapse justify-content-end">
                        <li className="navbar-link">login</li>
                        <li className="navbar-link">logout</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header