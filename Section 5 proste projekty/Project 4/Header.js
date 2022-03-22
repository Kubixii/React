class Header extends React.Component {
    render() {
        return (
            <>
                <h3>Wielkość zamówienia: {this.props.purchaseAmount}</h3>
                <h3>Do zapłaty: {this.props.price} zł</h3>
            </>
        );
    }
}