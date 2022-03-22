import React, { Component } from 'react'

class Stopwatch extends Component {
    interval
    render() {
        return (
            <>
                <p>StopWatch Running...</p>
            </>
        );
    }

    componentDidMount() {
        this.interval = setInterval(this.props.run, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
}

export default Stopwatch;