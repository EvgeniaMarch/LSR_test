import React, { useCallback, useState } from 'react';
import './App.css';
import OneCard from './OneCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [result, setResult] = useState<number>(0);

  const addResultHandler = useCallback((value: number) => {
    setResult((prev) => (prev += value));
  }, []);

  return (
    <div className="App">
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <OneCard addResultHandler={addResultHandler} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <OneCard addResultHandler={addResultHandler} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <OneCard addResultHandler={addResultHandler} />
          </div>
        </div>
      </div>
      <div className="result">
        Результат: <b>{result}</b>
      </div>
    </div>
  );
}

export default App;
