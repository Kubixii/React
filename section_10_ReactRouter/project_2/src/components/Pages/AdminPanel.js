import React from 'react'
import '../../css/Pages/AdminPanel.css'
import { Redirect, Route } from 'react-router-dom'

const AdminPanel = (props) => {
    const permissionCheck = () => {
        if (props.isLoggedIn) {
            return (
                <>
                    <h2>Siema Adminie</h2>
                </>
            )
        } else {
            return <Redirect to="/login" />
        }
    }
    return (
        <>
            <Route render={permissionCheck} />
        </>
    );
}

export default AdminPanel;