import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter(prevValue => prevValue + 1);
  const buttonHandler = () => setIsActive(prevValue => !prevValue);

  // useEffect(() => {
  //    alert('Hello');
  // },
  //   []
  // )

  return (
    <div onClick={handler}>
      <button onClick={buttonHandler}>Pokaż/ukryj komponent</button>
      <button onClick={handler}>Przerenderuj komponent</button>
      {isActive ? <Counter rerenderCounter={counter} /> : null}

    </div>
  );
}

const Counter = ({ rerenderCounter }) => {

  const [counter, setCounter] = useState(0);

  const handleMouseMove = (event) => {
    setCounter(event.clientX)
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      alert('RERENDER');
      window.removeEventListener('mousemove', handleMouseMove);
    }
  },
    [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      {/* <p>{re_renderCounter}</p> */}
    </div>
  )
}

export default App;
