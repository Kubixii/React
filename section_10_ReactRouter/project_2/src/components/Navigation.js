import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Navigation.css'

const Navigation = props => {

    return (
        <div id="navigation">
            <ul>
                <li>
                    <NavLink exact to="/">
                        <div className="navElementWrapper">Start</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Products">
                        <div className="navElementWrapper">Produkty</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Contact">
                        <div className="navElementWrapper">Kontakt</div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/AdminPanel">
                        <div className="navElementWrapper">Panel Admina</div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation