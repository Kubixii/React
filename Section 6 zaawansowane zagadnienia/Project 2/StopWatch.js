class StopWatch extends React.Component {
    constructor(props) {
        super(props)
        let sekundy;
    }
    render() {
        return (
            <>
            </>
        )
    }

    componendDidUpdate() {
        console.log("haha updacik")
    }

    componentDidMount() {
        this.props.reset()
        this.sekundy = setInterval(this.props.addSecond, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.sekundy)
    }
}