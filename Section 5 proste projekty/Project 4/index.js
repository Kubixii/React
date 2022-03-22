const Data = {
    items: [
        {
            id: 0,
            text: "Ziemniaki",
            price: 7,
            itemPurchaseAmount: 0,
            selected: false
        },
        {
            id: 1,
            text: "Surówka",
            price: 5,
            itemPurchaseAmount: 0,
            selected: false
        },
        {
            id: 2,
            text: "Napój",
            price: 5,
            itemPurchaseAmount: 0,
            selected: false
        },
        {
            id: 3,
            text: "Frytki",
            price: 12,
            itemPurchaseAmount: 0,
            selected: false
        },
        {
            id: 4,
            text: "Rosół",
            price: 14,
            itemPurchaseAmount: 0,
            selected: false
        },
        {
            id: 5,
            text: "Kompot",
            price: 7,
            purchaseAmount: 0,
            selected: false
        },
    ]
}

ReactDOM.render(<App data={Data} />, document.getElementById('root'))