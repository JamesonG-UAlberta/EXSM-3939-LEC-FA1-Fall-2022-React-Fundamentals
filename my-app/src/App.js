import logo from './logo.svg';
import './App.css';
import './ReactLogo.css';
import ExampleCounter from './Components/ExampleCounter';
import ExampleText from './Components/ExampleText';
import ExampleList from './Components/ExampleList';
import ExampleListClass from './Components/ExampleListClass';
import ExampleLifeCycle from './Components/ExampleLifeCycle';
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
        {["small", "medium", "large"].map((x) => <img src={logo} key={x} className={`logo ${x}`} alt="logo" />)}
        <h1>EXSM3939 React</h1>
      </header>
      <main>
        <ExampleText />
        <ExampleCounter />
        <ExampleList />
        <ExampleLifeCycle />
        <ExampleCounter />
        <ExampleListClass />
      </main>
      <aside>
        <p>Created as a demo for EXSM 3939 at the University of Alberta.</p>
      </aside>
    </div>
  );
}

export default App;
