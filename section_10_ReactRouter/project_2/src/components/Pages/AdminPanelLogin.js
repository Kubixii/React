import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AdminPanelLogin = (props) => {
    const permissionCheck = () => {
        if (props.isLoggedIn) {
            return (
                <Redirect to="/AdminPanel" />
            )
        } else {
            return (
                <form onSubmit={props.loginFormSubmitHandler}>
                    <label htmlFor="login">Podaj Login:
                        <input type="text" name="login" id="login" value={props.login} onChange={props.loginFormChangeHandler} />
                    </label>
                    <label htmlFor="password">Podaj Hasło:
                        <input type="password" name="password" id="password" value={props.password} onChange={props.loginFormChangeHandler} />
                    </label>
                    <button type="submit">Zaloguj</button>
                </form>
            )
        }
    }
    return (
        <>
            <Route render={permissionCheck} />
        </>
    );
}

export default AdminPanelLogin;