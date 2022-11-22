import logo from './logo.svg';
import './App.css';
import './ReactLogo.css';
import ExampleCounter from './Components/ExampleCounter';
import ExampleText from './Components/ExampleText';
import ExampleList from './Components/ExampleList';
import ExampleListClass from './Components/ExampleListClass';
import ExampleLifeCycle from './Components/ExampleLifeCycle';
import ExampleReference from './Components/ExampleReference';
import ExampleLifeCycleTwo from './Components/ExampleLifeCycleTwo';
import ExampleCallback from './Components/ExampleCallback';
import ExampleProps from './Components/ExampleProps';
import {useState} from 'react';

function App() {
  
  return (
    /* JSX snippets need a single root element (in this case the div). */
    <div className="App">
      <header>
        {["small", "medium", "large"].map((x) => <img src={logo} key={x} className={`logo ${x}`} alt="logo" />)}
        <h1>EXSM3939 React</h1>
      </header>
      <main>
        <ExampleProps example="Testing" array={[1, 10, 100, 1000]}/>
        <ExampleProps example="Hello, World!" />
        <ExampleProps example="This is a prop value!" />
        <ExampleProps example="12345" />
        <ExampleProps array={["Hello","World","Today","Is","Great"]} />
        <ExampleProps />
      </main>
      <aside>
        <p>Created as a demo for EXSM 3939 at the University of Alberta.</p>
      </aside>
    </div>
  );
}

export default App;
