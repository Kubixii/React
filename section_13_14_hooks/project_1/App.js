

const App = () => {
  const [stan, setStan] = React.useState([
    0, {
      name: "a",
      desc: "b"
    },
    {
      formValue: ''
    }
  ]);

  const ButtonHandler = () => {
    const newStan = { ...stan }
    newStan[0] += 1;
    setStan(newStan);
  }

  const ButtonHandler2 = () => {
    const newStan = { ...stan };
    newStan[1].name += 'a';
    newStan[1].desc += 'b';
    setStan(newStan);
  }

  const inputHandler = () => {
    const newStan = { ...stan }
    newStan[2].formValue = document.getElementById('input').value;
    setStan(newStan);
  }

  return (
    <div>
      <h1>Prezentacja stanu w React</h1>
      <p>Wartość stanu: {stan[0]}</p>
      <button onClick={ButtonHandler.bind(this)}>Dodaj</button><br />
      <button onClick={ButtonHandler2.bind(this)}>Dodaj</button><br />
      <input type="text" value={stan[2].formValue} onChange={inputHandler.bind(this)} id='input' />
      <Test name={stan[1].name} desc={stan[1].desc} />
      <h3>{stan[2].formValue}</h3>
    </div>
  );
}


const Test = ({ name, desc }) => (
  <>
    <li>Nazwa: {name}, </li>
    <li>Opis: {desc}</li>
  </>
)
ReactDOM.render(<App />, document.getElementById('root'));