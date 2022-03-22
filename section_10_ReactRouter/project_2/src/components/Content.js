import React, { Component } from 'react'
import '../css/Content.css'
import { Switch, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import Products from './Pages/Products'
import Contact from './Pages/Contact'
import AdminPanel from './Pages/AdminPanel'
import AdminPanelLogin from './Pages/AdminPanelLogin'
import ErrorPage from './Pages/ErrorPage'
import Product from './Pages/Product'

const products = [
    {
        id: 0,
        name: "Ołówek",
        description: "Ołówek twardy",
        price: "2.99 zł"
    },
    {
        id: 1,
        name: "Zeszyt_A4",
        description: "Zeszyt A4 96 stron",
        price: "24.99 zł"
    },
    {
        id: 2,
        name: "Plecak",
        description: "Plecak 10L",
        price: "39 zł"
    },
    {
        id: 3,
        name: "Długopis",
        description: "Długopis czarny",
        price: "2.99 zł"
    },
    {
        id: 4,
        name: "Zeszyt_A5",
        description: "Zeszyt A5 120 stron",
        price: "18.99 zł"
    },
    {
        id: 5,
        name: "Laptop",
        description: "Laptop kor i siedem dysk tysionc łindows 10",
        price: "1500.99 zł"
    },
]

class Content extends Component {
    state = {
        isLoggedIn: false,
        login: "",
        password: ""
    }
    adminPanelLoginConfig = () => (
        <AdminPanelLogin
            loginFormSubmitHandler={this.loginFormSubmitHandler.bind(this)}
            loginFormChangeHandler={this.loginFormChangeHandler.bind(this)}
            login={this.state.login}
            password={this.state.password}
            isLoggedIn={this.state.isLoggedIn}
        />
    )

    render() {
        return (
            <div id="content">
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/Products/:name" component={(props) => (<Product products={products} routeProps={props} />)} />
                    <Route path="/Products" component={() => (<Products products={products} />)} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/AdminPanel" component={() => (<AdminPanel isLoggedIn={this.state.isLoggedIn} />)} />
                    <Route path="/login" component={this.adminPanelLoginConfig} />
                    {this.productsRoutes}
                    <Route component={ErrorPage} />
                </Switch>
            </div>
        )
    }

    loginFormSubmitHandler(e) {
        e.preventDefault()
        this.setState({
            login: "",
            password: "",
            isLoggedIn: true
        })
    }

    loginFormChangeHandler(e) {
        const value = e.target.value
        const name = e.target.name
        this.setState({
            [name]: value
        })
    }
}

export default Content