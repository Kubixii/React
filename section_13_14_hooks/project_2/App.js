const additionSign = "addition";
const subtractionSign = "subtraction";
const resetSign = "reset";


const Counter = props => {

  const [count, setCount] = React.useState(0);
  const [result, setResult] = React.useState(props.result)

  const handleMathClick = (type, number = 1) => {
    setCount(count + 1);

    if (type === 'reset') {
      setResult(props.result);
    }
    else {
      setResult(result + number)
    }

  }

  return (
    <>
      <MathButton
        name="-10"
        number={-10}
        type={subtractionSign}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={-1}
        type={subtractionSign}
        click={handleMathClick}
      />
      <MathButton
        name="reset"
        number="reset"
        type={resetSign}
        click={handleMathClick}
      />
      <MathButton
        name="10"
        number={10}
        type={additionSign}
        click={handleMathClick}
      />
      <MathButton
        name="1"
        number={1}
        type={additionSign}
        click={handleMathClick}
      />
      <ResultPanel
        count={count}
        result={result}
      />
    </>
  );
}

const MathButton = ({ type, number, click, name }) => {
  const handleOnClick = () => click(type, number)
  return (
    <button onClick={handleOnClick}>{name}</button>
  );
}

const ResultPanel = ({ count, result }) => {
  return (
    <>
      <h1>Liczby kliknięć: {count} {count > 10 ? <span>Przeciążenie procesora</span> : null}</h1>
      <h1>Wynik: {result}</h1>
    </>
  );
}
const startValue = 0;

ReactDOM.render(<Counter result={startValue} />, document.getElementById('root'));