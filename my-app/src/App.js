import logo from './logo.svg';
import './App.css';
import './ReactLogo.css';
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
      <header>
      <img src={logo} className="logo large" alt="logo" />
      <img src={logo} className="logo medium" alt="logo" />
      <img src={logo} className="logo small" alt="logo" />
        <p>
          EXSM3939 React
        </p>
      </header>
      <main>
        <div className='exampleComponent'></div>
        <MyComponent />
        <div className='exampleComponent'></div>
        <div className='exampleComponent'></div>
        <div className='exampleComponent'></div>
        <div className='exampleComponent'></div>
      </main>
      <aside>
        <p>Created as a demo for EXSM 3939 at the University of Alberta.</p>
      </aside>
    </div>
  );
}

export default App;
