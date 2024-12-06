import IncrementButton from './components/IncrementButton.jsx';
import { useState } from 'react';

// src/App.jsx


const App = () => {

  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <IncrementButton addOne={addOne} />
    </>
  );
};

export default App;
