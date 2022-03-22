import React, { createRef, PureComponent } from 'react';

class Counter extends PureComponent {

    state = {
        counter: 0
    }

    componentRef = createRef();

    render() {
        const { counter } = this.state;
        return (
            <div ref={this.componentRef}>
                <p>Wartośc licznik wynosi {counter}</p>
                <button onClick={this.asyncIncreaseCounterValue}>Take asynchronus data</button>
            </div>
        );
    }

    asyncIncreaseCounterValue = () => setTimeout(
        () => {
            // if (this.componentRef.current) {
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }))
            // }
        },
        3000
    )
}

export default Counter;