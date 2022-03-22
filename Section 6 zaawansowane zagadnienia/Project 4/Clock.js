class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            time: {
                hours: '00',
                minutes: '00',
                seconds: '00'
            }
        }
    }
    interval

    render() {
        const { hours, minutes, seconds } = this.state.time
        return (
            <>
                {`${hours} : ${minutes} : ${seconds}`}
            </>
        )
    }

    componentDidMount() {
        this.updateClock()
        this.interval = setInterval(this.updateClock.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updateClock() {
        const date = new Date();
        const addZero = number => {
            if (number < 10) {
                return String("0" + number)
            }
            else {
                return number
            }
        }
        const time = {
            hours: addZero(date.getHours()),
            minutes: addZero(date.getMinutes()),
            seconds: addZero(date.getSeconds())
        }
        this.setState({
            time
        })
    }
}