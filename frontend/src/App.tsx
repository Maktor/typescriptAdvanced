import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);

  const getCounter = async () => {
    const res = await axios.get('http://localhost:3000/counter');
    setCounter(res.data.count);
  };

  useEffect(() => {
    getCounter();
  }, []);

  const increment = async () => {
    const res = await axios.post('http://localhost:3000/counter/increment');
    setCounter(res.data.count);
  };

  const decrement = async () => {
    const res = await axios.post('http://localhost:3000/counter/decrement');
    setCounter(res.data.count);
  };

  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
