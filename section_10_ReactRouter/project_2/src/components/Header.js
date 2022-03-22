import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../css/Header.css'
import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'
import header3 from '../images/header3.jpg'
const Header = () => {

    return (
        <header>
            <Switch>
                <Route exact path="/" component={() => (<img id="headerImage" src={header1} alt='header' />)} />
                <Route path="/Products" component={() => (<img id="headerImage" src={header1} alt='header' />)} />
                <Route path="/Contact" component={() => (< img id="headerImage" src={header2} alt='header2' />)} />
                <Route path="/AdminPanel" component={() => (<img id="headerImage" src={header3} alt='header3' />)} />
                <Route component={() => (<img id="headerImage" src={header1} alt='header1' />)} />
            </Switch>
        </header>
    )
}

export default Header