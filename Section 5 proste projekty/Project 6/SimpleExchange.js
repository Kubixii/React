class SimpleExchange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            amount: 0,
        }
    }
    render() {
        const { amount, data } = this.state
        return (
            <>
                <label>
                    Wpisz kwotę w złotówkach
                    <input type="number" name="amount" value={amount} onChange={this.ExchangeHandler.bind(this)} />
                </label>
                {data.currency.map(item => {
                    return (
                        <Currency
                            key={item.id}
                            amount={amount}
                            ratio={item.ratio}
                            text={item.name}
                        />
                    )
                })}
            </>
        );
    }

    ExchangeHandler(e) {
        let value = e.target.value;
        if (e.target.value < 0) {
            value = 0;
        }
        this.setState({
            amount: value
        })
    }
}

const Currency = (props) => {
    const { amount, ratio, text } = props
    return (
        <>
            <p>{text}: {amount / ratio}</p>
        </>
    )
}