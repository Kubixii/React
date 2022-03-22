import React, { Component } from 'react'
import './CSSSomething.css'

import image from './images/image.jpg'
import glass from './images/glass.png'

class CSSSomething extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="imageWrapper">
                    <img src={image} alt="idk" />
                    <div className="glassIcon">
                        <img src={glass} alt="glass" />
                    </div>
                </div>
            </>
        );
    }
}

export default CSSSomething;