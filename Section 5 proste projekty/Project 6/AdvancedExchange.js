class AdvancedExchange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            amount: 0,
            price: 0,
            product: this.props.data.products[0].name,
            unit: this.props.data.products[0].unit
        }
    }
    render() {
        const { amount, data, unit, price } = this.state
        return (
            <>
                <label>
                    Wybierz produkt:
                    <select onChange={this.ProductSelectHandler.bind(this)}>
                        {data.products.map(product => {
                            return <option key={product.id} value={product.name}>{product.name}</option>
                        })}
                    </select>
                </label>
                <br />
                <label>
                    <input type="number" value={amount} onChange={this.NumberInputHandler.bind(this)} />
                    {unit}
                </label>
                {data.currency.map(item => {
                    return (
                        <PriceInCurrency
                            key={item.id}
                            amount={price}
                            ratio={item.ratio}
                            text={item.name}
                        />
                    )
                })}
            </>
        );
    }
    NumberInputHandler(e) {
        const products = this.state.data.products
        let PriceInPLN = 0
        let amount = e.target.value;
        if (e.target.value < 0) amount = 0
        products.map(product => {
            if (product.name === this.state.product) {
                PriceInPLN = product.priceInPLN * amount
            }
        })
        console.log(PriceInPLN)
        this.setState({
            amount,
            price: PriceInPLN
        })
    }

    ProductSelectHandler(e) {
        const products = this.state.data.products
        let unit = ""
        let price = 0
        products.map(product => {
            if (product.name === e.target.value) {
                unit = product.unit
                price = product.price
            }
        })
        this.setState({
            product: e.target.value,
            unit,
            amount: 0,
            price: 0
        })
    }
}
const PriceInCurrency = (props) => {
    const { amount, ratio, text } = props
    return (
        <>
            <p>{text}: {amount / ratio}</p>
        </>
    )
}