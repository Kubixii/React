class App extends React.Component {
  state = {
    stock: 10,
    purchaseCount: 0,
    freshStock: false
  }
  render() {
    const { stock, purchaseCount, freshStock } = this.state
    return (
      <>
        <CartButton
          value='-'
          clickAction={this.modifyPurchaseAmount.bind(this)}
          clickable={purchaseCount <= 0}
        />
        <span style={purchaseCount == 0 ? { opacity: 0.3 } : null} >{purchaseCount}</span>
        <CartButton
          value='+'
          clickAction={this.modifyPurchaseAmount.bind(this)}
          clickable={purchaseCount == stock}
        />

        {purchaseCount > 0 ?
          <CartButton
            value='Kup'
            clickAction={this.purchaseHandler.bind(this)}
            clickable={false}
          />
          :
          null}

        {stock == 0 ? <span>Unfortunately we have run out of stock</span> : null}
        {freshStock ? <span>Fresh stock arrived this morning</span> : null}
        <br />
        <br />
        <form onSubmit={this.formHandler.bind(this)}>
          <input type='number' name='stock' onChange={this.stockHandler.bind(this)} />
          <button type='submit'>Add Stock</button>
        </form>
      </>
    )
  }

  modifyPurchaseAmount(e) {
    if (e.target.value == "+") {
      this.setState(prevState => {
        return {
          purchaseCount: prevState.purchaseCount + 1
        }
      })
    }
    else {
      this.setState(prevState => {
        return {
          purchaseCount: prevState.purchaseCount - 1
        }
      })
    }
  }

  purchaseHandler() {
    const purchaseCountTemp = this.state.purchaseCount;
    this.setState(prevState => {
      return {
        stock: prevState.stock - purchaseCountTemp,
        purchaseCount: 0,
        freshStock: false
      }
    })
  }

  formHandler(e) {
    e.preventDefault();
    const additionalStock = parseInt(e.target.stock.value)
    e.target.stock.value = 0;
    this.setState(prevState => {
      return {
        stock: prevState.stock + additionalStock,
        freshStock: true
      }
    })
  }

  stockHandler(e) {
    if (parseInt(e.target.value) < 0) {
      e.target.value = 0;
    }
  }
}

const CartButton = (props) => {
  const { clickAction, value, clickable } = props
  return (
    <button
      onClick={clickAction}
      value={value}
      disabled={clickable}
    >
      {value}
    </button>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))