import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';

/*
Two syntaxes for React components: Functional and Class-Based.
Class-Based is the "old" style, Functional is the "new" style. 
They do (essentially) the same thing and are cross compatible but functional components are easier to optimize.
*/

function App() {
  return (
    /* JSX snippets need a single root element (in this case the div). */
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <main>
        <MyComponent />
      </main>
      <aside>
        <p>Created as a demo for EXSM 3939 at the University of Alberta.</p>
      </aside>
    </div>
  );
}

export default App;
