import React from 'react'

const OnOffButton = props => {
    return (
        <div className="buttonWrapper" onClick={() => props.click(props.id)} >
            <div className={props.switch ? "on buttonDot" : "off buttonDot"}>{props.switch ? "✓" : "X"}</div>
        </div >
    )
}

export default OnOffButton;