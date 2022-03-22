import React from 'react'
import '../css/Header.css'

const Header = (props) => {
    return (
        <>
            <ul>
                <li onClick={() => { props.pageChangeHandler("main") }}>Strona główna</li>
                <li onClick={() => { props.pageChangeHandler("gallery") }}>Galeria</li>
                <li onClick={() => { props.pageChangeHandler("contact") }}>Kontakt</li>
                <li onClick={() => { props.pageChangeHandler("videotest") }}>VideoTest</li>
                <li onClick={() => { props.pageChangeHandler("APItest") }}>APItest</li>
                <li onClick={() => { props.pageChangeHandler("drzewo") }}>Drzewo</li>
                <li onClick={() => { props.pageChangeHandler("onoff") }}>OnOff</li>
                <li onClick={() => { props.pageChangeHandler("csssth") }}>CSS coś</li>
                <li onClick={() => { props.pageChangeHandler("dobazy") }}>Do bazy danych</li>
            </ul>
        </>
    );
}

export default Header;