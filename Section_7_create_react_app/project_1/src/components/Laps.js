import React, { Component } from 'react'
class Laps extends Component {
    render() {
        return (
            <>
                <h3>Laps</h3>
                <ul>
                    {this.props.laps.map(time => {
                        return <li key={this.props.time}><span>{time}</span></li>
                    })}
                </ul>
            </>
        );
    }
}

export default Laps;