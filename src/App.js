//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('you have changed the counter to ' + counter);

  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>

    </div>
  );
}

export default App;




//deleted this from boilerplate code in <dic className="App">
/*<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
*/