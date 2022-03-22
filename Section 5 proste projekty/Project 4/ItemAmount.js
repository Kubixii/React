class ItemAmount extends React.Component {
    render() {
        const { itemPurchaseAmount, text, ItemAmountChangeHandler } = this.props
        return (
            <div className='purchaseAmountButton'>
                <label htmlFor="purchaseAmount">Ilość</label>
                <input type="number" name="purchaseAmount" value={itemPurchaseAmount} onChange={(e) => {
                    const itemPurchaseAmount = e.target.value
                    ItemAmountChangeHandler(text, itemPurchaseAmount)
                }
                } />
            </div>
        );
    }
}