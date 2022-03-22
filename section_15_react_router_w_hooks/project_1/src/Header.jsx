import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Strona główna</NavLink>
                    </li>
                    <li>
                        <NavLink to="/react">React</NavLink>
                    </li>
                    <li>
                        <NavLink to="/redux">Redux</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mobx">MobX</NavLink>
                    </li>
                    <li>
                        <NavLink to="/typescript">TypeScript</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;