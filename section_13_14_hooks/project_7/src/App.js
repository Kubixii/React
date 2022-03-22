import React, { useRef } from 'react';

const App = () => {

  const paragraphElement = useRef();

  const addChar = () => {
    paragraphElement.current.textContent += "!";
  }

  return (
    <div>
      <p ref={paragraphElement} >Hello </p>
      <button onClick={addChar} >Kliknij mnie</button>
    </div>
  );
}

export default App;