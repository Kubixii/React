import React, { useEffect, useLayoutEffect, useState } from 'react'

import Triangle from './Triangle';

const App = () => {
  // useEffect(
  //   () => console.log('Po renderze DOM'),
  //   []
  // );

  // useLayoutEffect(
  //   () => console.log('Przed renderem DOM'),
  //   []
  // );

  // useEffect(
  //   () => {
  //     const element = document.querySelector('.triangle');
  //     element.style.top = '50%';
  //     element.style.left = '50%';
  //     element.style.transform = 'translate(-50%,-50%) rotate(90deg)';

  //   },
  //   []
  // )

  const [triangleVisibility, setTriangleVisibility] = useState(false)

  const toggleTriangleVisibility = () => setTriangleVisibility(!triangleVisibility);

  const triangleComponent = triangleVisibility ? <Triangle /> : null;

  console.log('render');
  return (
    <div>
      <button onClick={toggleTriangleVisibility}>Toggle</button>
      {triangleComponent}
    </div>
  );
}

export default App;