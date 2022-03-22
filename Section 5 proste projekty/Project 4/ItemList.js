class ItemList extends React.Component {
    render() {
        const { data, updateOrder, ItemAmountChangeHandler, ItemAmountDisplayButtons } = this.props
        return (
            <>
                <ul>
                    {data.map(item => {
                        return (
                            <Item
                                text={item.text}
                                selected={item.selected}
                                key={item.text}
                                itemPurchaseAmount={item.itemPurchaseAmount}
                                updateOrder={updateOrder}
                                ItemAmountChangeHandler={ItemAmountChangeHandler}
                                ItemAmountDisplayButtons={ItemAmountDisplayButtons}
                            />
                        )
                    })}
                </ul>
            </>
        );
    }
}