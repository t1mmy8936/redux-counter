import React from 'react';
import './App.css';
import {increment, decrement} from './actions';
import {useSelector, useDispatch} from 'react-redux';




function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable info</h3>: <h3>Not so valuable info</h3>}
    </div>
  );
  
}

export default App;
