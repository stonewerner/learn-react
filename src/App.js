//import logo from './logo.svg';
import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>Name: {props.Name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.Age}</h2>
    </>
  )
}

function App() {

  return (
    <div className="App">
      <Person Name={'Stone'} LastName={'Werner'} Age={23} />
      <Person Name={'John'} LastName={'Doe'} Age={45} />
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