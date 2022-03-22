import React, { useCallback, useMemo, useState } from 'react';

import Counter from './Counter'

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const increaseFirstCounter = useCallback(() => {
    setFirstCounter(firstCounter + 1)
  }, [firstCounter])

  const increaseSecondCounter = useCallback(() => {
    setSecondCounter(secondCounter + 1)
  }, [secondCounter])

  const firstCounterComponent = (
    <Counter callback={increaseFirstCounter} index={1} />
  )

  const secondCounterComponent = (
    <Counter callback={increaseSecondCounter} index={2} />
  )

  return (
    <div>
      {/* <button onClick={increaseFirstCounter}>Licznik 1 +1</button>
      <button onClick={increaseSecondCounter}>Licznik 2 +1</button> */}
      <p>counter 1 {firstCounter}</p>
      <p>counter 2 {secondCounter}</p>

      {firstCounterComponent}
      {secondCounterComponent}
    </div>
  );
}

export default App;