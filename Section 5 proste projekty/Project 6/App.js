class App extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="main">
                    <SimpleExchange data={data} />
                </div>
                <div className="main">
                    <AdvancedExchange data={data} />
                </div>
            </>
        );
    }
}

const data = {
    currency: [
        {
            id: 0,
            name: "Dolar Amerykański",
            ratio: 3.83,
        },
        {
            id: 1,
            name: "Euro",
            ratio: 4.52,
        },
        {
            id: 2,
            name: "Funt Brytyjski",
            ratio: 5.27,
        },
        {
            id: 3,
            name: "Rubel",
            ratio: 0.052,
        },
        {
            id: 4,
            name: "Rupia",
            ratio: 0.053,
        },
        {
            id: 5,
            name: "Dolar Kanadyjski",
            ratio: 3.03,
        },
        {
            id: 6,
            name: "Frank Szwajcarski",
            ratio: 4.18,
        },
    ],
    products: [
        {
            id: 0,
            name: "Prąd",
            unit: "kWH",
            priceInPLN: 0.7,
        },
        {
            id: 1,
            name: "Benzyna",
            unit: "L",
            priceInPLN: 5.63,
        },
        {
            id: 2,
            name: "Cukierki",
            unit: "kg",
            priceInPLN: 10.3,
        },
    ]
}
ReactDOM.render(<App />, document.getElementById('root'))