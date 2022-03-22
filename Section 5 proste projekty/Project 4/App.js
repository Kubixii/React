class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: this.props.data.items,
            purchaseAmount: 0,
            price: 0,
        }
    }

    render() {
        const { purchaseAmount, price, items } = this.state
        return (
            <>
                <h1>Menu</h1>
                <Header purchaseAmount={purchaseAmount} price={price} />
                <h4>Twoje zamówienie:</h4>
                <ItemList
                    data={items}
                    updateOrder={this.updateOrder.bind(this)}
                    ItemAmountChangeHandler={this.ItemAmountChangeHandler.bind(this)}
                />
            </>
        )
    }
    updateOrder(text) {
        let price = this.state.price
        let updatedItemList = this.state.items.map(item => {
            if (item.text === text) {
                item.selected = !item.selected;

                if (item.selected) {
                    item.itemPurchaseAmount = 1;
                    price += item.price;
                }
                else {
                    price -= item.price * item.itemPurchaseAmount;
                    item.itemPurchaseAmount = 0;
                }
            }
            return item;
        })
        let purchaseAmount = this.state.items.filter(item => {
            return item.selected
        })
        this.setState({
            items: updatedItemList,
            purchaseAmount: purchaseAmount.length,
            price: price
        })
    }

    ItemAmountChangeHandler(text, itemPurchaseAmount) {
        this.setState(prevState => {
            let price = 0
            let updatedItemList = this.state.items.map(item => {
                if (item.text === text) {
                    const difference = itemPurchaseAmount - item.itemPurchaseAmount
                    price = item.price * difference
                    if (item.itemPurchaseAmount === 0) {
                        item.selected = false
                    }
                }

                return item;
            })
            let purchaseAmount = this.state.items.filter(item => {
                return item.selected
            })

            return {
                items: updatedItemList,
                purchaseAmount: purchaseAmount.length,
                price: prevState.price + price
            }
        })
    }
}