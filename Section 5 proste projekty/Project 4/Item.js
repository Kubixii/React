class Item extends React.Component {
    state = {}
    render() {
        const { text, selected, updateOrder, itemPurchaseAmount, ItemAmountChangeHandler, ItemAmountDisplayButtons } = this.props
        return (
            <>
                <li className={selected && itemPurchaseAmount != 0 ? "selected" : "unselected"} onClick={() => updateOrder(text)}>
                    {text}
                </li>
                {selected ? <ItemAmount itemPurchaseAmount={itemPurchaseAmount} ItemAmountChangeHandler={ItemAmountChangeHandler} ItemAmountDisplayButtons={ItemAmountDisplayButtons} text={text} /> : null}
            </>
        );
    }
}