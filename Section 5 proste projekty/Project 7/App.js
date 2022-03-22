class App extends React.Component {
    render() {
        return (
            <>
                <Excercise1 />
                <Excercise2 />
                <Test1 />
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))